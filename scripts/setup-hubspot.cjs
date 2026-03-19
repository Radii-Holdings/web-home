const fs = require('fs');
const path = require('path');

const HUBSPOT_BASE_URL = 'https://api.hubapi.com';
const PROPERTY_GROUP_NAME = 'radiilab_custom';
const PROPERTY_GROUP_LABEL = 'radiiLab_custom';
const PROPERTY_DEFINITIONS = [
  {
    name: 'radii_lead_name',
    label: 'Radii Lead Name',
    type: 'string',
    fieldType: 'text',
    description: 'Full name captured from the Radii lead modal.',
  },
  {
    name: 'radii_lead_email',
    label: 'Radii Lead Email',
    type: 'string',
    fieldType: 'text',
    description: 'Email address captured from the Radii lead modal.',
  },
  {
    name: 'radii_whatsapp_number',
    label: 'Radii WhatsApp Number',
    type: 'string',
    fieldType: 'phonenumber',
    description: 'WhatsApp number with country code captured from the Radii lead modal.',
  },
];

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmedLine.indexOf('=');

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    let value = trimmedLine.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function loadEnv() {
  const rootDir = path.resolve(__dirname, '..');

  loadEnvFile(path.join(rootDir, '.env.local'));
  loadEnvFile(path.join(rootDir, '.env'));
}

async function hubspotFetch(endpoint, token, options = {}) {
  const response = await fetch(`${HUBSPOT_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  const responseText = await response.text();
  let responseBody = null;

  if (responseText) {
    try {
      responseBody = JSON.parse(responseText);
    } catch (error) {
      responseBody = responseText;
    }
  }

  if (!response.ok) {
    const error = new Error(
      `HubSpot request failed with status ${response.status}.`
    );

    error.status = response.status;
    error.body = responseBody;
    throw error;
  }

  return responseBody;
}

async function main() {
  loadEnv();

  const token = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!token) {
    console.error('HUBSPOT_ACCESS_TOKEN is not configured.');
    process.exit(1);
  }

  try {
    await hubspotFetch(`/crm/v3/properties/contacts/groups/${PROPERTY_GROUP_NAME}`, token, {
      method: 'GET',
    });

    console.log(
      `Property group "${PROPERTY_GROUP_NAME}" already exists. No changes were made.`
    );
    return;
  } catch (error) {
    if (error.status !== 404) {
      console.error('Unable to check the existing HubSpot property groups.');
      console.error(error.body || error.message);
      process.exit(1);
    }
  }

  try {
    await hubspotFetch('/crm/v3/properties/contacts/groups', token, {
      method: 'POST',
      body: JSON.stringify({
        name: PROPERTY_GROUP_NAME,
        label: PROPERTY_GROUP_LABEL,
        displayOrder: -1,
      }),
    });

    for (const property of PROPERTY_DEFINITIONS) {
      await hubspotFetch('/crm/v3/properties/contacts', token, {
        method: 'POST',
        body: JSON.stringify({
          ...property,
          groupName: PROPERTY_GROUP_NAME,
          formField: false,
        }),
      });
    }

    console.log(
      `Created property group "${PROPERTY_GROUP_NAME}" with ${PROPERTY_DEFINITIONS.length} custom contact properties.`
    );
  } catch (error) {
    console.error('HubSpot setup failed.');
    console.error(error.body || error.message);
    process.exit(1);
  }
}

main();
