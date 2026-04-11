import ServicePage from "@/src/components/Service/ServicePage";
import { getServiceMetadata, getServicePage } from "@/src/utils/servicePages";

const page = getServicePage("forex-algo-execution-india");

export const metadata = getServiceMetadata("forex-algo-execution-india");

export default function ForexAlgoExecutionIndia() {
  return <ServicePage page={page} />;
}
