import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Denver NC | 24/7 Service",
	description:
		"Fast garage door repair in Denver, NC. Torsion spring repair, cable replacement, opener installation & 24/7 emergency service. Call (828) 450-2416",
};

export default function DenverNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Denver, NC"
			subtitle="Lake Norman West Service Area"
			intro="Charlotte Garage Door Repair brings reliable garage door repair and installation services to Denver, NC. From emergency spring fixes and opener repairs to complete door replacements, our skilled technicians are ready to serve your Lake Norman area home."
			highlights={[
				{
					title: "Lake Norman Area Experts",
					text: "Trusted garage door service for Denver's lakeside communities and neighborhoods.",
				},
				{
					title: "Spring & Cable Specialists",
					text: "Safe, professional handling of high-tension torsion springs and lifting cables.",
				},
				{
					title: "Energy-Efficient Doors",
					text: "Insulated steel and wood composite doors to improve your home's efficiency.",
				},
			]}
			image="/images/spring-replacement/IMG_8787.jpg"
			ctaHeading="Need garage door repair in Denver, NC? Call (828) 450-2416!"
		/>
	);
}
