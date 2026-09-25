import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair | Charlotte, NC",
	description:
		"Fast, reliable garage door repair in Charlotte, NC and surrounding areas. Repair broken springs, off-track doors, cables, and openers. 24/7 emergency repair. Call (828) 450-2416",
};

export default function GarageDoorRepairPage() {
	return (
		<ServiceDetail
			subtitle="Expert Repair"
			heading="Professional Garage Door Repair in Charlotte, NC"
			intro="When your garage door breaks or stops opening smoothly, it creates an immediate inconvenience and potential security risk. Charlotte Garage Door Repair provides fast, comprehensive repair services for broken springs, frayed cables, off-track rollers, damaged panels, and malfunctioning openers."
			heroImage="/images/garage-door-repair/IMG_9100.jpg"
			bandImage="/images/garage-door-repair/IMG_9098.jpg"
			steps={[
				{
					icon: "fas fa-stethoscope",
					title: "Comprehensive Inspection",
					description: "We diagnose spring tension, tracks, cables, rollers, and opener electronics.",
				},
				{
					icon: "fas fa-wrench",
					title: "Precision Repair",
					description: "Replacing worn hardware with heavy-duty, long-lasting replacement components.",
				},
				{
					icon: "fas fa-balance-scale",
					title: "System Balancing",
					description: "Tuning door weight balance, track clearance, and safety auto-reverse sensors.",
				},
				{
					icon: "fas fa-check-circle",
					title: "Final Safety Testing",
					description: "Thorough testing to ensure smooth, whisper-quiet, and reliable door operation.",
				},
			]}
			included={[
				"Multi-point safety inspection",
				"Spring and cable balance check",
				"Track alignment and roller lubrication",
				"Safety sensor alignment & testing",
				"Opener limit & force adjustment",
			]}
			benefits={[
				"Restores safe home access",
				"Prevents catastrophic door failure",
				"Reduces loud noise and grinding",
				"Same-day & 24/7 emergency availability",
				"Warranty-backed parts & labor",
			]}
			idealFor={[
				"Doors stuck open or closed",
				"Snapped or noisy torsion springs",
				"Off-track or crooked garage doors",
				"Noisy, grinding motor operation",
				"Homes needing immediate security repair",
			]}
			gallery={{
				title: "Repair Work Photos",
				description: "Real Examples of Our Garage Door Repair & Track Alignment Work",
				images: [
					{
						src: "/images/garage-door-repair/IMG_0769.jpg",
						alt: "Frayed weather seal near roller track bracket",
						title: "Jamb Weatherstrip & Roller Bracket Inspection",
					},
					{
						src: "/images/garage-door-repair/IMG_0071.jpg",
						alt: "Vertical garage door track alignment along exterior casing",
						title: "Vertical Track Alignment Check",
					},
					{
						src: "/images/garage-door-repair/IMG_0072.jpg",
						alt: "Deteriorated header frame trim and top panel seal",
						title: "Header Trim & Weather Seal Maintenance",
					},
					{
						src: "/images/garage-door-repair/IMG_9099.jpg",
						alt: "Bent upper panel frame and misaligned commercial door",
						title: "Panel Reinforcement & Track Realignment",
					},
				],
			}}
			ctaHeading="Need fast garage door repair in Charlotte? Call (828) 450-2416 now!"
		/>
	);
}
