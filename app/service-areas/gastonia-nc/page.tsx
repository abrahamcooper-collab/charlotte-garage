import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Gastonia NC | 24/7 Service",
	description:
		"Professional garage door repair in Gastonia, NC. Spring replacement, opener installation, cable repair & 24/7 emergency service. Call (828) 450-2416",
};

export default function GastoniaNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Gastonia, NC"
			subtitle="Gaston County Service Area"
			intro="Charlotte Garage Door Repair proudly serves homeowners and businesses throughout Gastonia, NC. Whether you need an emergency spring replacement, a new garage door opener, or a complete door installation, our experienced technicians deliver fast, reliable service you can count on."
			highlights={[
				{
					title: "24/7 Emergency Response",
					text: "Immediate dispatch for broken springs, stuck doors, and security concerns in Gastonia.",
				},
				{
					title: "Full-Service Repairs",
					text: "Expert cable, spring, roller, and opener repairs using premium parts.",
				},
				{
					title: "New Door Installations",
					text: "Beautiful carriage house, modern, and traditional style garage doors.",
				},
			]}
			image="/images/spring-replacement/IMG_0770.jpg"
			ctaHeading="Need garage door repair in Gastonia, NC? Call (828) 450-2416!"
		/>
	);
}
