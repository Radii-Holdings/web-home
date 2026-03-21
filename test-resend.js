const { Resend } = require('resend');

function test(val, label) {
  try {
    const resend = new Resend(val);
    console.log(`PASS: Resend initialized with ${label}`);
  } catch (e) {
    console.log(`FAIL: Resend failed with ${label}: ${e.message}`);
  }
}

test(undefined, 'undefined');
test('', 'empty string');
test('valid_key', 'valid string');
