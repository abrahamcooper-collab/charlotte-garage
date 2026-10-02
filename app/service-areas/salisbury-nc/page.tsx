import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Salisbury NC | 24/7 Service",
	description:
		"Professional garage door repair in Salisbury, NC. Spring replacement, opener installation, cable repair & 24/7 emergency service. Call (828) 450-2416",
};

export default function SalisburyNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Salisbury, NC"
			subtitle="Rowan County Service Area"
			intro="Charlotte Garage Door Repair serves homeowners and businesses in Salisbury, NC with expert garage door repair, maintenance, and installation services. From emergency spring replacements to full door upgrades, count on our team for reliable 24/7 service."
			highlights={[
				{
					title: "Rapid Local Response",
					text: "Fast dispatch for emergency garage door repairs throughout Salisbury.",
				},
				{
					title: "Expert Diagnostics",
					text: "Accurate troubleshooting of opener malfunctions, track misalignment, and spring failures.",
				},
				{
					title: "Quality Guaranteed",
					text: "Premium parts and workmanship backed by our satisfaction guarantee.",
				},
			]}
			image="/images/spring-replacement/IMG_0780.jpg"
			ctaHeading="Need garage door repair in Salisbury, NC? Call (828) 450-2416!"
		/>
	);
}
