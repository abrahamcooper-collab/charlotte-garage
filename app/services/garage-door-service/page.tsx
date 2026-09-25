import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Service | Charlotte, NC",
	description:
		"Comprehensive garage door service & tune-ups in Charlotte, NC. Inspections, track adjustment, spring tensioning & lubrication. Call (828) 450-2416",
};

export default function GarageDoorServicePage() {
	return (
		<ServiceDetail
			subtitle="Routine Service"
			heading="Comprehensive Garage Door Service & Tune-Up"
			intro="Regular maintenance and servicing extend the lifespan of your garage door while preventing sudden spring or cable breakdowns. Our comprehensive tune-up inspects every moving component, tightens hardware, adjusts track clearances, and lubricates all wear points."
			heroImage="/images/residential-doors/IMG_0774.jpg"
			bandImage="/images/garage-door-repair/IMG_9100.jpg"
			steps={[
				{
					icon: "fas fa-search",
					title: "21-Point Inspection",
					description: "Examining rollers, springs, cables, pulleys, hinges, and track alignment.",
				},
				{
					icon: "fas fa-bolt",
					title: "Hardware Tightening",
					description: "Torquing loose bolts, brackets, and track fasteners caused by vibration.",
				},
				{
					icon: "fas fa-oil-can",
					title: "Precision Lubrication",
					description: "Applying premium silicone lubricant to springs, hinges, bearings, and rollers.",
				},
				{
					icon: "fas fa-shield-alt",
					title: "Safety Calibration",
					description: "Testing infrared photoelectric sensors and auto-reverse safety mechanisms.",
				},
			]}
			included={[
				"Complete 21-point safety inspection",
				"Commercial-grade silicone lubrication",
				"Track alignment & tension adjustment",
				"Photo-eye safety sensor cleaning & calibration",
				"Opener force limit testing",
			]}
			benefits={[
				"Prevents unexpected, costly door failures",
				"Eliminates squeaking, grinding, and rattling",
				"Extends lifespan of springs and opener motor",
				"Ensures maximum family and property safety",
				"Keeps garage door operation smooth & quiet",
			]}
			idealFor={[
				"Annual preventative maintenance",
				"Doors making squeaking or grinding noises",
				"Ensuring safe operation before winter/summer",
				"Homeowners wanting reliable daily performance",
				"Protecting garage door warranty compliance",
			]}
			gallery={{
				title: "Service Inspection Photos",
				description: "Track Alignment, Structural Struts & Spring Balance Inspections",
				images: [
					{
						src: "/images/residential-doors/IMG_0774.jpg",
						alt: "Interior ceiling view of reinforced horizontal garage door tracks and struts",
						title: "Horizontal Track Run & Reinforcement Strut Inspection",
					},
					{
						src: "/images/garage-door-repair/IMG_0071.jpg",
						alt: "Vertical garage door track alignment along white exterior jamb casing",
						title: "Jamb Casing & Vertical Track Alignment",
					},
					{
						src: "/images/spring-replacement/IMG_0780.jpg",
						alt: "Newly installed and wound dual torsion springs on garage door header",
						title: "Torsion Spring Counterbalance Calibration",
					},
				],
			}}
			ctaHeading="Schedule your garage door tune-up today. Call (828) 450-2416!"
		/>
	);
}
