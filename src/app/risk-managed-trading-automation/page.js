import ServicePage from "@/src/components/Service/ServicePage";
import { getServiceMetadata, getServicePage } from "@/src/utils/servicePages";

const page = getServicePage("risk-managed-trading-automation");

export const metadata = getServiceMetadata("risk-managed-trading-automation");

export default function RiskManagedTradingAutomation() {
  return <ServicePage page={page} />;
}
