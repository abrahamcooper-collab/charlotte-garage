import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Opener Installation | Charlotte, NC",
	description:
		"Smart Wi-Fi garage door opener installation in Charlotte, NC. Quiet belt drive & chain drive opener installation with smartphone control. Call (828) 450-2416",
};

export default function OpenerInstallationPage() {
	return (
		<ServiceDetail
			subtitle="Smart Opener Installation"
			heading="Garage Door Opener Installation in Charlotte, NC"
			intro="Upgrade your daily convenience and home security with a modern Wi-Fi enabled garage door opener. Charlotte Garage Door Repair installs whisper-quiet belt drives, heavy-duty chain drives, and wall-mount jackshaft openers featuring battery backup and smartphone app integration."
			heroImage="/images/opener-installation/IMG_0764.jpg"
			bandImage="/images/opener-installation/IMG_8781.jpg"
			steps={[
				{
					icon: "fas fa-cog",
					title: "Opener Selection",
					description: "Recommending ideal horsepower (1/2 HP, 3/4 HP, 1.25 HP) and drive mechanism.",
				},
				{
					icon: "fas fa-plug",
					title: "Motor & Rail Mounting",
					description: "Securely anchoring overhead rails, motor housing, and structural header bracket.",
				},
				{
					icon: "fas fa-wave-square",
					title: "Sensor & Console Wiring",
					description: "Wiring safety eye sensors, wall button panel, and battery backup modules.",
				},
				{
					icon: "fas fa-mobile-alt",
					title: "Smart App Setup",
					description: "Connecting myQ / smart home app and programming remotes and car Homelink.",
				},
			]}
			included={[
				"Professional motor, rail, and trolley installation",
				"Infrared safety photo-eye sensor wiring & mounting",
				"Multi-function wall control panel installation",
				"2 remote control transmitters & wireless keypad",
				"Smartphone app connection & Homelink pairing",
			]}
			benefits={[
				"Whisper-quiet operation for attached garages",
				"Monitor & control your garage door from anywhere via smartphone",
				"Battery backup keeps working during power outages",
				"Enhanced security with rolling code technology",
				"Comprehensive manufacturer warranty coverage",
			]}
			idealFor={[
				"Replacing noisy 10+ year old chain openers",
				"Homes with bedrooms located directly above the garage",
				"Homeowners wanting smart home automation integration",
				"New garage door installation projects",
				"Adding battery backup for storm reliability",
			]}
			gallery={{
				title: "Opener Installation Projects",
				description: "Installed Belt-Drive, Smart Motor Heads & Ceiling Mount Assemblies",
				images: [
					{
						src: "/images/opener-installation/IMG_0764.jpg",
						alt: "Newly installed Genie Model 2028 garage door opener motor head illuminated",
						title: "Genie Smart Motor Head Installation",
					},
					{
						src: "/images/opener-installation/IMG_8781.jpg",
						alt: "Modern belt-drive garage door opener installed and operating wood carriage door",
						title: "Belt-Drive Opener Mounted to Carriage Door",
					},
					{
						src: "/images/opener-installation/IMG_8782.jpg",
						alt: "Installed garage door opener motor head with safety release cord and tag",
						title: "Emergency Release Cord & Safety Setup",
					},
				],
			}}
			ctaHeading="Upgrade to a smart garage door opener! Call (828) 450-2416 today!"
		/>
	);
}
