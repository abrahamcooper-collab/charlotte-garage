import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Cornelius NC | 24/7 Service",
	description:
		"Expert garage door repair in Cornelius, NC. Spring repair, opener installation, door replacement & 24/7 emergency service. Call (828) 450-2416",
};

export default function CorneliusNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Cornelius, NC"
			subtitle="Lake Norman Service Area"
			intro="Charlotte Garage Door Repair delivers expert garage door repair and installation services to Cornelius, NC. Whether you need an emergency spring fix, a smart opener upgrade, or a brand-new garage door, our skilled technicians provide prompt, professional service."
			highlights={[
				{
					title: "Lake Norman Community Experts",
					text: "Trusted service for Cornelius's upscale residential neighborhoods.",
				},
				{
					title: "Smart Opener Installs",
					text: "Wi-Fi-enabled openers with battery backup for seamless remote access.",
				},
				{
					title: "Comprehensive Maintenance",
					text: "Full 21-point safety inspections, lubrication, and balance adjustments.",
				},
			]}
			image="/images/opener-installation/IMG_8782.jpg"
			ctaHeading="Need garage door repair in Cornelius, NC? Call (828) 450-2416!"
		/>
	);
}
