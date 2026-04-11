import ServicePage from "@/src/components/Service/ServicePage";
import { getServiceMetadata, getServicePage } from "@/src/utils/servicePages";

const page = getServicePage("quant-research-services-india");

export const metadata = getServiceMetadata("quant-research-services-india");

export default function QuantResearchServicesIndia() {
  return <ServicePage page={page} />;
}
