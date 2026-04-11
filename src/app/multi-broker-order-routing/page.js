import ServicePage from "@/src/components/Service/ServicePage";
import { getServiceMetadata, getServicePage } from "@/src/utils/servicePages";

const page = getServicePage("multi-broker-order-routing");

export const metadata = getServiceMetadata("multi-broker-order-routing");

export default function MultiBrokerOrderRouting() {
  return <ServicePage page={page} />;
}
