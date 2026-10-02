import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Kings Mountain NC | 24/7 Service",
	description:
		"Professional garage door repair in Kings Mountain, NC. Spring repair, opener installation, door replacement & 24/7 emergency service. Call (828) 450-2416",
};

export default function KingsMountainNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Kings Mountain, NC"
			subtitle="Cleveland County Service Area"
			intro="Charlotte Garage Door Repair delivers dependable garage door repair and installation services to Kings Mountain, NC. Whether it's a broken spring, a malfunctioning opener, or a complete door replacement, our team responds fast with top-quality solutions."
			highlights={[
				{
					title: "24/7 Emergency Repairs",
					text: "Round-the-clock service for off-track doors and broken springs in Kings Mountain.",
				},
				{
					title: "Quality Door Replacements",
					text: "Energy-efficient sectional doors in carriage house and modern flush styles.",
				},
				{
					title: "Complete System Tune-Ups",
					text: "Comprehensive 21-point safety inspection, lubrication, and balance adjustment.",
				},
			]}
			image="/images/garage-door-repair/IMG_0769.jpg"
			ctaHeading="Need garage door repair in Kings Mountain, NC? Call (828) 450-2416!"
		/>
	);
}
