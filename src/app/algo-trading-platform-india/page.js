import ServicePage from "@/src/components/Service/ServicePage";
import { getServiceMetadata, getServicePage } from "@/src/utils/servicePages";

const page = getServicePage("algo-trading-platform-india");

export const metadata = getServiceMetadata("algo-trading-platform-india");

export default function AlgoTradingPlatformIndia() {
  return <ServicePage page={page} />;
}
