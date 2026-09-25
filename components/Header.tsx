"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const closeMobileMenu = useCallback(() => {
		const header = document.querySelector("header") as HTMLElement | null;
		const menuBtn = document.querySelector("#menu-btn");

		if (header) {
			header.classList.remove("menu-open");
			header.style.height = "";
		}
		if (menuBtn) {
			menuBtn.classList.remove("menu-open");
		}
		document.body.style.overflow = "";
		if (typeof window !== "undefined" && (window as any).mobile_menu_show !== undefined) {
			(window as any).mobile_menu_show = 0;
		}
		setIsMenuOpen(false);
	}, []);

	// Automatically close mobile menu on route change
	useEffect(() => {
		closeMobileMenu();
	}, [pathname, closeMobileMenu]);

	useEffect(() => {
		const handleMenuClick = () => {
			const header = document.querySelector("header") as HTMLElement | null;
			const menuBtn = document.querySelector("#menu-btn");

			if (header?.classList.contains("menu-open")) {
				closeMobileMenu();
			} else {
				header?.classList.add("menu-open");
				menuBtn?.classList.add("menu-open");
				document.body.style.overflow = "hidden";
				setIsMenuOpen(true);
			}
		};

		const menuBtn = document.querySelector("#menu-btn");
		menuBtn?.addEventListener("click", handleMenuClick);

		// Close menu when clicking on any menu link inside mainmenu
		const handleLinkClick = (e: Event) => {
			const target = e.currentTarget as HTMLAnchorElement;
			if (target.getAttribute("href") === "#") {
				e.preventDefault();
				return;
			}
			closeMobileMenu();
		};

		const menuLinks = document.querySelectorAll("#mainmenu a");
		menuLinks.forEach((link) => {
			link.addEventListener("click", handleLinkClick);
		});

		return () => {
			menuBtn?.removeEventListener("click", handleMenuClick);
			menuLinks.forEach((link) => {
				link.removeEventListener("click", handleLinkClick);
			});
			document.body.style.overflow = "";
		};
	}, [closeMobileMenu]);

	return (
		<header
			className="transparent"
			style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
		>
			<div id="topbar" className="bg-color text-light">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="d-flex justify-content-between xs-hide">
								<div className="d-flex">
									<div className="topbar-widget">
										<a>5604 Harkey Rd, Waxhaw, NC 28173</a>
									</div>
								</div>
								<div className="d-flex">
									<div className="topbar-widget me-5">
										<a href="tel:+18284502416">Call 24/7: (828) 450-2416</a>
									</div>
									<div className="topbar-widget">
										<a href="mailto:Charlottesgaragedoorrepairs@gmail.com">
											Message us: Charlottesgaragedoorrepairs@gmail.com
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="de-flex sm-pt10">
							<div className="de-flex-col">
								<div id="logo">
									<Link href="/">
										<Image
											className="logo-main"
											src="/logo.jpeg"
											alt="Charlotte Garage Door Repair"
											width={85}
											height={90}
											style={{ height: "auto", maxHeight: "85px", width: "auto" }}
											priority
										/>
										<Image
											className="logo-mobile"
											src="/logo.jpeg"
											alt="Charlotte Garage Door Repair"
											width={60}
											height={65}
											style={{ height: "auto", maxHeight: "60px", width: "auto" }}
											priority
										/>
									</Link>
								</div>
							</div>
							<div className="de-flex-col header-col-mid">
								<ul id="mainmenu">
									<li>
										<Link className="menu-item" href="/">
											Home
										</Link>
									</li>
									<li>
										<Link className="menu-item" href="/about">
											About Us
										</Link>
									</li>
									<li>
										<Link className="menu-item" href="/services">
											Services
										</Link>
										<ul className="innermenue">
											<li>
												<Link href="/services/garage-door-repair">
													Garage Door Repair
												</Link>
											</li>
											<li>
												<Link href="/services/emergency-repair">
													24/7 Emergency Repair
												</Link>
											</li>
											<li>
												<Link href="/services/spring-repair">
													Spring Replacement
												</Link>
											</li>
											<li>
												<Link href="/services/cable-repair">
													Cable Repair
												</Link>
											</li>
											<li>
												<Link href="/services/opener-repair">
													Opener Repair
												</Link>
											</li>
											<li>
												<Link href="/services/garage-door-installation">
													Door Installation
												</Link>
											</li>
											<li>
												<Link href="/services/opener-installation">
													Opener Installation
												</Link>
											</li>
											<li>
												<Link href="/services/residential-installation">
													Residential Doors
												</Link>
											</li>
											<li>
												<Link href="/services/garage-door-replacement">
													Door Replacement
												</Link>
											</li>
											<li>
												<Link href="/services/garage-door-service">
													General Tune-Up
												</Link>
											</li>
											<li>
												<Link href="/services/garage-door-maintenance">
													Annual Maintenance
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link className="menu-item" href="#">
											Service Areas
										</Link>
										<ul className="innermenue">
											<li>
												<Link href="/service-areas/charlotte-nc">
													Charlotte, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/waxhaw-nc">
													Waxhaw, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/monroe-nc">
													Monroe, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/matthews-nc">
													Matthews, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/indian-trail-nc">
													Indian Trail, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/fort-mill-sc">
													Fort Mill, SC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/indian-land-sc">
													Indian Land, SC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/huntersville-nc">
													Huntersville, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/mooresville-nc">
													Mooresville, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/concord-nc">
													Concord, NC
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link className="menu-item" href="/gallery">
											Gallery
										</Link>
									</li>
									<li>
										<Link className="menu-item" href="/blog">
											Blog
										</Link>
									</li>
									<li>
										<Link className="menu-item" href="/faqs">
											FAQs
										</Link>
									</li>
									<li>
										<Link className="menu-item" href="/contact">
											Contact Us
										</Link>
									</li>
								</ul>
							</div>
							<div className="de-flex-col">
								<div className="menu_side_area">
									<a
										href={siteConfig.phoneHref}
										className="header-btn-call"
									>
										<i className="icofont-phone me-1"></i>
										<span className="btn-text-full">Call {siteConfig.phoneDisplay}</span>
										<span className="btn-text-short">Call</span>
									</a>
									<Link
										href="/contact"
										className="header-btn-quote"
									>
										<span className="btn-text-full">Get a Free Quote</span>
										<span className="btn-text-short">Free Quote</span>
									</Link>
									<span id="menu-btn"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
