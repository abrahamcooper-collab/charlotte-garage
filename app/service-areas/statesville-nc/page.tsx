import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Statesville NC | 24/7 Service",
	description:
		"Professional garage door repair in Statesville, NC. Spring replacement, opener installation, cable repair & 24/7 emergency service. Call (828) 450-2416",
};

export default function StatesvilleNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Statesville, NC"
			subtitle="Iredell County Service Area"
			intro="Charlotte Garage Door Repair provides reliable garage door repair and installation services to Statesville, NC. Our skilled technicians handle everything from emergency spring replacements and cable repairs to complete garage door installations with fast turnaround times."
			highlights={[
				{
					title: "24/7 Emergency Dispatch",
					text: "Immediate response for stuck doors, snapped springs, and security risks in Statesville.",
				},
				{
					title: "Expert Opener Repairs",
					text: "Troubleshooting and repair of all major opener brands including LiftMaster and Genie.",
				},
				{
					title: "Upfront Pricing",
					text: "Honest quotes with no hidden fees — know the cost before we start.",
				},
			]}
			image="/images/spring-replacement/IMG_8499.jpg"
			ctaHeading="Need garage door repair in Statesville, NC? Call (828) 450-2416!"
		/>
	);
}
