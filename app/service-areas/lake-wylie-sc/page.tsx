import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Lake Wylie SC | 24/7 Service",
	description:
		"Expert garage door repair in Lake Wylie, SC. Spring replacement, opener installation, cable repair & 24/7 emergency service. Call (828) 450-2416",
};

export default function LakeWylieSCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Lake Wylie, SC"
			subtitle="York County SC Service Area"
			intro="Charlotte Garage Door Repair extends professional garage door services to Lake Wylie, SC. From emergency spring replacements and cable repairs to smart opener installations and complete door upgrades, we deliver superior craftsmanship and rapid response."
			highlights={[
				{
					title: "Lakeside Community Experts",
					text: "Trusted service for Lake Wylie's residential communities and waterfront homes.",
				},
				{
					title: "High-Cycle Spring Repairs",
					text: "Durable oil-tempered springs engineered for years of reliable operation.",
				},
				{
					title: "Smart Wi-Fi Opener Installs",
					text: "Control and monitor your garage door remotely via smartphone app.",
				},
			]}
			image="/images/opener-installation/IMG_0764.jpg"
			ctaHeading="Need garage door repair in Lake Wylie, SC? Call (828) 450-2416!"
		/>
	);
}
