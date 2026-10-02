import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Midland NC | 24/7 Service",
	description:
		"Fast garage door repair in Midland, NC. Spring replacement, opener installation, cable repair & 24/7 emergency service. Call (828) 450-2416",
};

export default function MidlandNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Midland, NC"
			subtitle="Cabarrus County Service Area"
			intro="Charlotte Garage Door Repair provides fast, reliable garage door repair and installation services to Midland, NC. From emergency spring replacements and cable repairs to complete door installations, our expert technicians are ready to handle any garage door challenge."
			highlights={[
				{
					title: "24/7 Emergency Service",
					text: "Round-the-clock dispatch for broken springs, jammed doors, and security concerns.",
				},
				{
					title: "Full-Service Repairs",
					text: "Expert spring, cable, roller, and track repairs using high-quality parts.",
				},
				{
					title: "New Door Options",
					text: "Beautiful insulated doors in raised panel, carriage house, and contemporary styles.",
				},
			]}
			image="/images/cable-repair/IMG_9513.jpg"
			ctaHeading="Need garage door repair in Midland, NC? Call (828) 450-2416!"
		/>
	);
}
