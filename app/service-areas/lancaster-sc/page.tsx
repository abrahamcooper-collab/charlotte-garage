import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Lancaster SC | 24/7 Service",
	description:
		"Expert garage door repair in Lancaster, SC. Spring replacement, opener installation, door replacement & 24/7 emergency service. Call (828) 450-2416",
};

export default function LancasterSCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Lancaster, SC"
			subtitle="Lancaster County SC Service Area"
			intro="Charlotte Garage Door Repair delivers professional garage door repair and installation services to Lancaster, SC. From emergency spring replacements and cable repairs to smart opener upgrades, our team provides fast, honest, and affordable service."
			highlights={[
				{
					title: "Fast Cross-Border Service",
					text: "Prompt dispatch from our Charlotte Metro team to Lancaster, SC.",
				},
				{
					title: "Spring & Cable Experts",
					text: "Safe, expert repair of high-tension torsion springs and lifting cables.",
				},
				{
					title: "Complete Door Replacements",
					text: "Insulated steel, wood composite, and aluminum garage doors for every home.",
				},
			]}
			image="/images/cable-repair/IMG_9511.jpg"
			ctaHeading="Need garage door repair in Lancaster, SC? Call (828) 450-2416!"
		/>
	);
}
