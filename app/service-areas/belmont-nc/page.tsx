import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Belmont NC | 24/7 Service",
	description:
		"Professional garage door repair in Belmont, NC. Spring repair, opener installation, door replacement & 24/7 emergency service. Call (828) 450-2416",
};

export default function BelmontNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Belmont, NC"
			subtitle="Gaston County Service Area"
			intro="Charlotte Garage Door Repair provides expert garage door services to Belmont, NC. Whether you need emergency spring replacement, a quiet new opener, or a brand-new garage door installation, our experienced technicians deliver quality results with every visit."
			highlights={[
				{
					title: "Rapid Emergency Response",
					text: "Fast 24/7 dispatch for broken springs, stuck doors, and security concerns.",
				},
				{
					title: "Complete Repair Services",
					text: "Expert cable, roller, hinge, and track repairs using durable, premium parts.",
				},
				{
					title: "Beautiful Door Installations",
					text: "Enhance your Belmont home with carriage house, modern, and traditional style doors.",
				},
			]}
			image="/images/door-replacement/IMG_0068.jpg"
			ctaHeading="Need garage door repair in Belmont, NC? Call (828) 450-2416!"
		/>
	);
}
