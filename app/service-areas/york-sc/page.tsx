import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair York SC | 24/7 Service",
	description:
		"Fast garage door repair in York, SC. Torsion spring repair, opener installation, door replacement & 24/7 emergency service. Call (828) 450-2416",
};

export default function YorkSCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="York, SC"
			subtitle="York County SC Service Area"
			intro="Charlotte Garage Door Repair provides top-rated garage door repair and installation services to York, SC. Whether you need a broken spring replaced, a new smart opener installed, or a complete garage door upgrade, our team delivers prompt, professional results."
			highlights={[
				{
					title: "24/7 Emergency Dispatch",
					text: "Immediate response for stuck, off-track, or broken garage doors in York.",
				},
				{
					title: "Spring & Hardware Repair",
					text: "Replacing worn cables, rollers, hinges, and high-tension torsion springs.",
				},
				{
					title: "New Door Installation",
					text: "Custom sectional garage doors in carriage house, raised panel, and flush styles.",
				},
			]}
			image="/images/residential-doors/IMG_0774.jpg"
			ctaHeading="Need garage door repair in York, SC? Call (828) 450-2416!"
		/>
	);
}
