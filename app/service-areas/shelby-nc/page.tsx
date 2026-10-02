import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Shelby NC | 24/7 Service",
	description:
		"Fast garage door repair in Shelby, NC. Torsion spring repair, cable replacement, opener installation & 24/7 emergency service. Call (828) 450-2416",
};

export default function ShelbyNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Shelby, NC"
			subtitle="Cleveland County Service Area"
			intro="Charlotte Garage Door Repair brings expert garage door services to Shelby, NC. From emergency spring fixes and cable replacements to brand-new opener installations, our skilled team provides quick response times and quality workmanship every visit."
			highlights={[
				{
					title: "Rapid Local Dispatch",
					text: "Fast service response for homeowners throughout Shelby and Cleveland County.",
				},
				{
					title: "Spring & Cable Specialists",
					text: "Safe, professional handling of high-tension torsion springs and lifting cables.",
				},
				{
					title: "Opener Installation & Repair",
					text: "LiftMaster, Chamberlain, and Genie opener installs with Wi-Fi and battery backup.",
				},
			]}
			image="/images/spring-replacement/IMG_0777.jpg"
			ctaHeading="Need garage door repair in Shelby, NC? Call (828) 450-2416!"
		/>
	);
}
