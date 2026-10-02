import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Troutman NC | 24/7 Service",
	description:
		"Fast garage door repair in Troutman, NC. Torsion spring repair, opener installation, door replacement & 24/7 emergency service. Call (828) 450-2416",
};

export default function TroutmanNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Troutman, NC"
			subtitle="Iredell County Service Area"
			intro="Charlotte Garage Door Repair extends expert garage door services to Troutman, NC. Whether you need a broken spring replaced, a new belt-drive opener installed, or a full garage door replacement, our team delivers quality workmanship with every job."
			highlights={[
				{
					title: "Fast Local Service",
					text: "Quick response times for homeowners throughout Troutman and surrounding areas.",
				},
				{
					title: "Spring & Cable Repairs",
					text: "Expert replacement of worn torsion springs, extension springs, and lifting cables.",
				},
				{
					title: "New Door Installations",
					text: "Energy-efficient insulated doors in raised panel, carriage house, and modern styles.",
				},
			]}
			image="/images/spring-replacement/IMG_8500.jpg"
			ctaHeading="Need garage door repair in Troutman, NC? Call (828) 450-2416!"
		/>
	);
}
