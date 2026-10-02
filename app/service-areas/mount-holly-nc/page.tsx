import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Mount Holly NC | 24/7 Service",
	description:
		"Expert garage door repair in Mount Holly, NC. Spring replacement, opener installation, cable repair & 24/7 emergency service. Call (828) 450-2416",
};

export default function MountHollyNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Mount Holly, NC"
			subtitle="Gaston County Service Area"
			intro="Charlotte Garage Door Repair serves Mount Holly, NC with fast, professional garage door repair and installation services. From emergency spring fixes and cable replacements to smart opener upgrades, our team is ready to help 24/7."
			highlights={[
				{
					title: "24/7 Emergency Repairs",
					text: "Round-the-clock service for broken springs, off-track doors, and malfunctioning openers.",
				},
				{
					title: "Smart Opener Upgrades",
					text: "Install whisper-quiet LiftMaster openers with battery backup & Wi-Fi connectivity.",
				},
				{
					title: "Transparent Pricing",
					text: "No hidden fees or surprise charges — honest estimates on every repair.",
				},
			]}
			image="/images/opener-installation/IMG_8781.jpg"
			ctaHeading="Need garage door repair in Mount Holly, NC? Call (828) 450-2416!"
		/>
	);
}
