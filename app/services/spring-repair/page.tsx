import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Spring Repair & Replacement | Charlotte, NC",
	description:
		"Safe garage door spring repair & replacement in Charlotte, NC. Torsion & extension spring replacement with high-cycle steel springs. Call (828) 450-2416",
};

export default function SpringRepairPage() {
	return (
		<ServiceDetail
			subtitle="Spring Replacement"
			heading="Garage Door Spring Repair & Replacement in Charlotte, NC"
			intro="Garage door springs do the heavy lifting for your door. When a spring snaps, your door becomes impossibly heavy and dangerous to operate. We provide safe, professional torsion and extension spring replacement using high-cycle oil-tempered steel springs."
			heroImage="/images/spring-replacement/IMG_0770.jpg"
			bandImage="/images/spring-replacement/IMG_0778.jpg"
			steps={[
				{
					icon: "fas fa-shield-virus",
					title: "Safety Assessment",
					description: "Relieving remaining tension safely and measuring precise spring wire size.",
				},
				{
					icon: "fas fa-cut",
					title: "Broken Spring Removal",
					description: "Disconnecting broken springs and winding cones from the center shaft.",
				},
				{
					icon: "fas fa-cogs",
					title: "High-Cycle Installation",
					description: "Installing oil-tempered springs rated for 15,000+ opening cycles.",
				},
				{
					icon: "fas fa-balance-scale-right",
					title: "Winding & Balancing",
					description: "Winding springs to exact door weight specifications for neutral balance.",
				},
			]}
			included={[
				"Oil-tempered high-cycle torsion spring installation",
				"Dual spring replacement recommendation for balance",
				"Center bearing & end bearing inspection",
				"Cable inspection & re-tensioning",
				"Complete door weight balance calibration",
			]}
			benefits={[
				"Restores effortless, smooth door lifting",
				"Prevents opener motor burnout",
				"Longer lasting 15,000–20,000 cycle rating",
				"Eliminates severe DIY safety hazards",
				"Warranty protection on replacement springs",
			]}
			idealFor={[
				"Doors that only lift 2-6 inches before stopping",
				"Visible gap in the spring coil above the door",
				"Loud bang heard in the garage",
				"Heavy doors requiring manual strain to open",
				"Preventative replacement for old springs",
			]}
			gallery={{
				title: "Spring Repair Photos",
				description: "Real Examples of Broken Spring Replacements & Dual Spring Tensioning",
				images: [
					{
						src: "/images/spring-replacement/IMG_8499.jpg",
						alt: "Severed residential torsion spring above opener rail",
						title: "Snapped Residential Torsion Spring",
					},
					{
						src: "/images/spring-replacement/IMG_8500.jpg",
						alt: "Broken torsion spring on residential garage door header",
						title: "Broken Coil Gap Inspection",
					},
					{
						src: "/images/spring-replacement/IMG_0771.jpg",
						alt: "Sheared coil and center support plate",
						title: "Center Support & Bearing Plate Inspection",
					},
					{
						src: "/images/spring-replacement/IMG_0777.jpg",
						alt: "Snapped garage door torsion spring laying in two pieces on floor",
						title: "Uninstalled Broken Spring Replacement",
					},
					{
						src: "/images/spring-replacement/IMG_0780.jpg",
						alt: "Newly installed and wound dual torsion springs",
						title: "Completed Dual Torsion Spring Replacement",
					},
					{
						src: "/images/spring-replacement/IMG_8787.jpg",
						alt: "Broken torsion spring snapped near winding cone",
						title: "Winding Cone Area Break Inspection",
					},
				],
			}}
			ctaHeading="Broken garage door spring? Call (828) 450-2416 for safe spring replacement!"
		/>
	);
}
