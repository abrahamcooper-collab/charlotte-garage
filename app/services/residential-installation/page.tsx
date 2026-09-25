import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Residential Garage Door Installation | Charlotte, NC",
	description:
		"Residential garage door installation in Charlotte, NC. Premium carriage house, traditional, and modern sectional garage doors. Call (828) 450-2416",
};

export default function ResidentialInstallationPage() {
	return (
		<ServiceDetail
			subtitle="Residential Specialist"
			heading="Residential Garage Door Installation in Charlotte, NC"
			intro="Your garage door represents up to 40% of your home's front facade. Charlotte Garage Door Repair specializes in custom residential garage door installations, providing insulated steel, faux wood, carriage house, and contemporary full-view glass doors tailored to your home."
			heroImage="/images/residential-doors/IMG_0774.jpg"
			bandImage="/images/door-installation/C 3.jpeg"
			steps={[
				{
					icon: "fas fa-palette",
					title: "Style & Material Selection",
					description: "Choosing panel styles, window inserts, insulation R-value, and hardware options.",
				},
				{
					icon: "fas fa-drafting-compass",
					title: "Precision Framing Check",
					description: "Verifying jamb squareness, header strength, and side clearance dimensions.",
				},
				{
					icon: "fas fa-hammer",
					title: "Sectional Panel Stacking",
					description: "Assembling interlocking insulated door sections with heavy-duty hinges.",
				},
				{
					icon: "fas fa-check-circle",
					title: "Balance & Weatherization",
					description: "Winding springs, installing rubber weather seals, and testing operation.",
				},
			]}
			included={[
				"Free design consultation & sample visualizer",
				"Old door teardown & complete recycling/disposal",
				"Commercial-grade hardware, rollers, and tracks",
				"High-R-value thermal insulation layers",
				"Complete weatherproofing & perimeter seal installation",
			]}
			benefits={[
				"Dramatic boost in residential curb appeal",
				"Reduces heat transfer into home living spaces",
				"Improves home security against forced entry",
				"Smooth, quiet operation for everyday use",
				"Backed by lifetime structural warranties",
			]}
			idealFor={[
				"Single-family homes, townhomes & estates",
				"Carriage house & modern architectural styles",
				"Homeowners upgrading curb appeal before selling",
				"Replacing rusted or faded original builder doors",
				"Improving garage energy efficiency",
			]}
			gallery={{
				title: "Residential Installation Projects",
				description: "Reinforced Residential Track Systems & Custom Sectional Door Installations",
				images: [
					{
						src: "/images/residential-doors/IMG_0774.jpg",
						alt: "Interior ceiling view of reinforced horizontal garage door tracks and struts",
						title: "Reinforced Overhead Track & Strut Assembly",
					},
					{
						src: "/images/door-installation/C 1.jpeg",
						alt: "Commercial overhead garage door vertical track and frame installation",
						title: "Vertical Track & Opening Framing Setup",
					},
					{
						src: "/images/door-installation/C 4.jpeg",
						alt: "Sectional commercial garage door assembled vertically in high tracks",
						title: "Stacked Sectional Panel Alignment",
					},
					{
						src: "/images/opener-installation/IMG_8781.jpg",
						alt: "Modern belt-drive garage door opener installed and operating wood carriage door",
						title: "Carriage Door Opener Drawbar Connection",
					},
				],
			}}
			ctaHeading="Transform your home's appearance with a new garage door! Call (828) 450-2416!"
		/>
	);
}
