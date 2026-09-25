import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Installation | Charlotte, NC",
	description:
		"New garage door installation in Charlotte, NC. Premium steel, carriage house, and insulated garage doors installed with precision. Call (828) 450-2416",
};

export default function GarageDoorInstallationPage() {
	return (
		<ServiceDetail
			subtitle="New Door Installation"
			heading="Residential Garage Door Installation in Charlotte, NC"
			intro="Upgrade your home's curb appeal, energy efficiency, and security with professional garage door installation from Charlotte Garage Door Repair. We offer top-quality insulated steel, carriage house, and modern garage doors customized for your home."
			heroImage="/images/door-installation/C6.jpeg"
			bandImage="/images/door-installation/C 5.jpeg"
			steps={[
				{
					icon: "fas fa-ruler-combined",
					title: "Measurement & Selection",
					description: "Accurate opening measurement and design customization matching your home style.",
				},
				{
					icon: "fas fa-truck-loading",
					title: "Old Door Removal",
					description: "Safe removal and haul-away of existing garage door panels, tracks, and hardware.",
				},
				{
					icon: "fas fa-tools",
					title: "Precision Installation",
					description: "Mounting heavy-duty tracks, sectional panels, high-tension springs, and seals.",
				},
				{
					icon: "fas fa-clipboard-check",
					title: "Calibration & Safety Test",
					description: "Testing door balance, weather stripping fit, and opener integration.",
				},
			]}
			included={[
				"Free design consultation & door measurement",
				"Professional removal & haul-away of old door",
				"Heavy-duty galvanized steel tracks and hinges",
				"High-cycle torsion spring installation",
				"Weather perimeter seal & bottom astragal seal",
			]}
			benefits={[
				"Dramatically enhances home curb appeal",
				"High thermal insulation lowers energy bills",
				"Quiet, smooth motor operation",
				"Increases property value and security",
				"Full manufacturer & installation warranty",
			]}
			idealFor={[
				"Homeowners upgrading aging or damaged doors",
				"New home construction & remodeling",
				"Improving garage temperature control",
				"Enhancing home resale value",
				"Quiet operation for bedrooms over garages",
			]}
			gallery={{
				title: "Installation Projects",
				description: "Recent Commercial & Residential Overhead Door Installations",
				images: [
					{
						src: "/images/door-installation/C7.jpeg",
						alt: "Industrial facility exterior featuring black commercial roll-up doors",
						title: "Black Roll-Up Commercial Door Installation",
					},
					{
						src: "/images/door-installation/C 1.jpeg",
						alt: "Commercial overhead garage door vertical track and frame installation",
						title: "Track & Framing Installation",
					},
					{
						src: "/images/door-installation/C 3.jpeg",
						alt: "Technician using scissor lift to install tall commercial sectional door panels",
						title: "High-Bay Sectional Panel Stacking",
					},
					{
						src: "/images/door-installation/C 8.jpeg",
						alt: "High-lift commercial sectional door with overhead torsion shaft installed",
						title: "High-Lift Track & Torsion Counterbalance Mount",
					},
					{
						src: "/images/door-installation/C 10.jpeg",
						alt: "Interior staging of commercial sectional door tracks and torsion hardware",
						title: "Hardware Staging & Track Alignment",
					},
					{
						src: "/images/door-installation/C 13.jpeg",
						alt: "Two commercial roll-up garage doors installed on corrugated metal exterior",
						title: "Completed Bay Door Exterior Installation",
					},
				],
			}}
			ctaHeading="Upgrade your home with a new garage door today. Call (828) 450-2416!"
		/>
	);
}
