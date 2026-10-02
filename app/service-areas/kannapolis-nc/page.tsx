import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Kannapolis NC | 24/7 Service",
	description:
		"Professional garage door repair in Kannapolis, NC. Spring replacement, opener installation, cable repair & 24/7 emergency service. Call (828) 450-2416",
};

export default function KannapolisNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Kannapolis, NC"
			subtitle="Cabarrus County Service Area"
			intro="Charlotte Garage Door Repair provides comprehensive garage door repair and installation services to Kannapolis, NC. From emergency spring replacements and cable repairs to opener installations and complete door upgrades, we deliver fast, dependable service every time."
			highlights={[
				{
					title: "24/7 Emergency Dispatch",
					text: "Immediate response for stuck, off-track, or broken garage doors in Kannapolis.",
				},
				{
					title: "Opener Installation & Repair",
					text: "Expert installation and troubleshooting of LiftMaster, Chamberlain, and Genie openers.",
				},
				{
					title: "Quality Guaranteed",
					text: "Durable parts and professional workmanship backed by our satisfaction guarantee.",
				},
			]}
			image="/images/garage-door-repair/IMG_9098.jpg"
			ctaHeading="Need garage door repair in Kannapolis, NC? Call (828) 450-2416!"
		/>
	);
}
