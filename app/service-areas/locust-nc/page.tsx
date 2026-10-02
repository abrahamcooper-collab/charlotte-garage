import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Locust NC | 24/7 Service",
	description:
		"Fast garage door repair in Locust, NC. Spring repair, cable replacement, opener installation & 24/7 emergency service. Call (828) 450-2416",
};

export default function LocustNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Locust, NC"
			subtitle="Stanly County Service Area"
			intro="Charlotte Garage Door Repair brings dependable garage door services to Locust, NC. Whether you need a broken spring fixed, a noisy opener replaced, or a brand-new garage door installed, our experienced technicians handle it all with precision and care."
			highlights={[
				{
					title: "24/7 Emergency Service",
					text: "Round-the-clock dispatch for broken springs and stuck doors in Locust.",
				},
				{
					title: "Opener Upgrades",
					text: "Whisper-quiet belt-drive openers with battery backup and smartphone control.",
				},
				{
					title: "Comprehensive Maintenance",
					text: "Full safety inspections, lubrication, and balance adjustments to extend door life.",
				},
			]}
			image="/images/opener-repair/IMG_0766.jpg"
			ctaHeading="Need garage door repair in Locust, NC? Call (828) 450-2416!"
		/>
	);
}
