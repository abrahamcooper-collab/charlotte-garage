import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Maintenance | Charlotte, NC",
	description:
		"Preventative garage door maintenance & annual inspections in Charlotte, NC. Extend door life and prevent sudden breakdowns. Call (828) 450-2416",
};

export default function MaintenancePage() {
	return (
		<ServiceDetail
			subtitle="Preventative Maintenance"
			heading="Annual Garage Door Maintenance & Inspection"
			intro="Prevent costly spring snaps, cable off-tracks, and opener failures with routine annual garage door maintenance. Our technicians perform a rigorous multi-point check, balance calibration, hardware tightening, and lubrication to keep your system performing flawlessly."
			heroImage="/images/residential-doors/IMG_0774.jpg"
			bandImage="/images/garage-door-repair/IMG_9100.jpg"
			steps={[
				{
					icon: "fas fa-clipboard-list",
					title: "Structural Assessment",
					description: "Checking door panel alignment, hinges, rollers, cables, and track wear.",
				},
				{
					icon: "fas fa-wrench",
					title: "Hardware Re-Torquing",
					description: "Tightening all track bolts, roller brackets, and motor mounting hardware.",
				},
				{
					icon: "fas fa-oil-can",
					title: "Complete Lubrication",
					description: "Applying heavy-duty silicone spray to springs, bearings, hinges, and rollers.",
				},
				{
					icon: "fas fa-shield-alt",
					title: "Safety Sensor Test",
					description: "Testing infrared safety eye auto-reversal and mechanical pressure limits.",
				},
			]}
			included={[
				"Comprehensive 21-point safety inspection report",
				"Full silicone lubrication of all moving parts",
				"Track alignment & roller tension check",
				"Spring tension balance measurement",
				"Opener force limit & travel calibration",
			]}
			benefits={[
				"Avoids high-cost emergency repair calls",
				"Extends door spring and motor life by years",
				"Ensures quiet, smooth daily operation",
				"Maintains home safety for children and pets",
				"Validates manufacturer warranty requirements",
			]}
			idealFor={[
				"Annual seasonal tune-up routines",
				"Squeaky or noisy garage doors",
				"Doors that haven't been serviced in 1+ years",
				"Homeowners preparing for winter/summer extremes",
				"Rental property owners wanting reliable operation",
			]}
			gallery={{
				title: "Maintenance Work Photos",
				description: "Routine Multi-Point Hardware Inspections & Track Servicing",
				images: [
					{
						src: "/images/garage-door-repair/IMG_0769.jpg",
						alt: "Frayed weather seal near roller track bracket",
						title: "Jamb Weatherstrip & Roller Bracket Inspection",
					},
					{
						src: "/images/garage-door-repair/IMG_9098.jpg",
						alt: "Damaged commercial overhead bay door hardware",
						title: "Sectional Bay Door Hardware Inspection",
					},
					{
						src: "/images/spring-replacement/IMG_0780.jpg",
						alt: "Newly installed and wound dual torsion springs on header",
						title: "Spring Tension Tune-Up & Lubrication",
					},
				],
			}}
			ctaHeading="Protect your garage door system with routine maintenance. Call (828) 450-2416!"
		/>
	);
}
