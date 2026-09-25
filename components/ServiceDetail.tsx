import Image from "next/image";
import Link from "next/link";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import { siteConfig } from "@/data/siteConfig";

export interface ServiceStep {
	icon: string; // Font Awesome class, e.g. "fas fa-spray-can-sparkles"
	title: string;
	description: string;
}

export interface ServiceDetailProps {
	subtitle: string;
	heading: string;
	intro: string;
	heroImage: string;
	bandImage: string;
	steps: ServiceStep[];
	included: string[];
	benefits: string[];
	idealFor: string[];
	beforeAfter?: {
		title: string;
		description: string;
		beforeImage?: string;
		afterImage?: string;
	};
	gallery?: {
		title?: string;
		description?: string;
		images: Array<{
			src: string;
			alt: string;
			title?: string;
		}>;
	};
	ctaHeading: string;
}

export default function ServiceDetail({
	subtitle,
	heading,
	intro,
	heroImage,
	bandImage,
	steps,
	included,
	benefits,
	idealFor,
	beforeAfter,
	gallery,
	ctaHeading,
}: ServiceDetailProps) {
	return (
		<div className="no-bottom no-top" id="content">
			<div id="top"></div>

			<section className="no-top no-bottom overflow-hidden">
				<div className="container-fluid position-relative half-fluid">
					<div className="container">
						<div className="row mt-desktop-10">
							<div className="col-lg-6 position-lg-absolute right-half h-100">
								<Image
									src={heroImage}
									className="img-fluid rounded"
									alt={heading}
									width={1200}
									height={800}
								/>
							</div>
							<div className="col-lg-6">
								<div className="me-lg-3">
									<div className="py-5 mb-3 me-lg-3">
										<div
											className="subtitle id-color wow fadeInUp"
											data-wow-delay=".0s"
										>
											{subtitle}
										</div>
										<h1 className="wow fadeInUp" data-wow-delay=".2s">
											{heading}
										</h1>
										<p className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">
											{intro}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-dark-2 jarallax">
				<Image
					src={bandImage}
					className="jarallax-img"
					alt={`${heading} process`}
					width={1920}
					height={1080}
				/>
				<div className="sw-overlay"></div>
				<div className="container relative z-2">
					<div className="row g-4 justify-content-center">
						<div className="col-lg-12 text-center">
							<div className="subtitle">Steps</div>
							<h2>How It Works</h2>
						</div>

						{steps.map((step, i) => (
							<div
								key={i}
								className={`col-6 col-md-3 de-step${
									i < steps.length - 1 ? " de-step-arrow" : ""
								}`}
							>
								<div className="de-step-icon bg-color">
									<i className={`${step.icon} fa-2x`}></i>
								</div>
								<h4 className="fw-bold">{step.title}</h4>
								<p>{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row g-4">
						<div className="col-md-4">
							<h3>What&apos;s Included</h3>
							<ul className="ul-check">
								{included.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>

						<div className="col-md-4">
							<h3>Benefits</h3>
							<ul className="ul-check">
								{benefits.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>

						<div className="col-md-4">
							<h3>Ideal For</h3>
							<ul className="ul-check">
								{idealFor.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{gallery && gallery.images && gallery.images.length > 0 && (
				<section className="bg-dark-2">
					<div className="container">
						<div className="row g-4 justify-content-center mb-4">
							<div className="col-lg-8 text-center">
								<div className="subtitle">{gallery.title || "Project Showcase"}</div>
								<h2>{gallery.description || "Real Work Photos From Our Service Projects"}</h2>
							</div>
						</div>
						<div className="row g-4 justify-content-center">
							{gallery.images.map((img, idx) => (
								<div key={idx} className={gallery.images.length <= 2 ? "col-md-6" : "col-md-4 col-sm-6"}>
									<div className="hover rounded-1 overflow-hidden relative text-light">
										<div style={{ position: "relative", width: "100%", height: 260 }}>
											<Image
												src={img.src}
												alt={img.alt}
												fill
												className="hover-scale-1-1"
												style={{ objectFit: "cover" }}
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
										</div>
										{img.title && (
											<div className="abs z-2 bottom-0 p-3 w-100 bg-blur">
												<p className="mb-0 fs-14 fw-bold">{img.title}</p>
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			)}

			{beforeAfter && (
				<BeforeAfterSection
					subtitle="Real Results"
					title={beforeAfter.title}
					description={beforeAfter.description}
					beforeImage={beforeAfter.beforeImage ?? "/images/door-replacement/IMG_0068.jpg"}
					afterImage={beforeAfter.afterImage ?? "/images/opener-repair/IMG_9509.jpg"}
					beforeAlt="Before"
					afterAlt="After"
					imageWidth={800}
					imageHeight={450}
				/>
			)}

			<section className="bg-color text-light pt-60 pb-50">
				<div className="container">
					<div className="row g-4 align-items-center">
						<div className="col-md-7">
							<h3 className="mb-0 fs-32">{ctaHeading}</h3>
						</div>
						<div className="col-md-5 text-md-end d-flex gap-2 justify-content-md-end flex-wrap">
							<a className="btn-main fx-slide btn-line" href={siteConfig.phoneHref}>
								<i className="icofont-phone me-1"></i>
								<span>Call Now</span>
							</a>
							<Link className="btn-main fx-slide" href="/contact">
								<span>Get a Free Quote</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
