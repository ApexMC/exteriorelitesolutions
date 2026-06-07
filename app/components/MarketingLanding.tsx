"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { animate, stagger } from "animejs";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Weekly Lawn Mowing",
    description:
      "Consistent cuts, clean edging, and tidy blow-off service that keeps curb appeal on schedule.",
    icon: "mowing",
  },
  {
    title: "Lawn Maintenance",
    description:
      "Routine care plans for healthy grass, crisp edges, and properties that always feel cared for.",
    icon: "maintenance",
  },
  {
    title: "Landscaping",
    description:
      "Planting beds, bed reshaping, rock accents, and landscape refreshes planned around your property.",
    icon: "landscape",
  },
  {
    title: "Mulching",
    description:
      "Fresh mulch installation that protects beds, sharpens borders, and gives your yard a finished look.",
    icon: "mulch",
  },
  {
    title: "Hedge & Shrub Trimming",
    description:
      "Careful shaping and cleanup for shrubs, hedges, ornamental grasses, and front-entry plantings.",
    icon: "trim",
  },
  {
    title: "Seasonal Cleanups",
    description:
      "Spring and fall cleanup services for leaves, sticks, storm debris, overgrowth, and tired beds.",
    icon: "season",
  },
  {
    title: "Weed Control",
    description:
      "Practical weed reduction for beds, walkways, edges, and the spots that make a property look unkept.",
    icon: "weed",
  },
  {
    title: "Yard Cleanup",
    description:
      "One-time cleanup help for move-ins, listings, rentals, neglected corners, and post-project debris.",
    icon: "cleanup",
  },
];

const stats = [
  "Locally Owned",
  "Residential & Commercial",
  "Free Estimates",
  "Seasonal Services",
];

const benefits = [
  {
    title: "Dependable Scheduling",
    description:
      "We show up when promised and keep recurring service simple through clear expectations.",
  },
  {
    title: "Clean, Professional Results",
    description:
      "Mowing lines, edges, beds, and hard surfaces are left neat before we pull away.",
  },
  {
    title: "Clear Communication",
    description:
      "You get straightforward updates, practical recommendations, and no mystery around the work.",
  },
  {
    title: "Affordable Service Plans",
    description:
      "Choose weekly, seasonal, or project-based care that fits your property and your budget.",
  },
  {
    title: "Residential & Commercial",
    description:
      "From homes and rentals to storefronts and offices, we help properties make the right first impression.",
  },
  {
    title: "Fully Equipped Team",
    description:
      "Professional equipment and organized crews mean efficient visits and consistent finishes.",
  },
];

const serviceAreas = [
  "Neighborhood Homes",
  "Subdivision Properties",
  "Commercial Frontages",
  "HOA Communities",
  "Rental Properties",
  "Large Residential Lots",
];

const gallery = [
  {
    title: "Fresh Cut Lawn",
    description: "Weekly mowing with crisp stripes and clean hardscape edges.",
    position: "center",
  },
  {
    title: "Mulch Refresh",
    description: "Defined beds, fresh color, and tidy borders around plantings.",
    position: "right",
  },
  {
    title: "Landscape Cleanup",
    description: "Overgrowth trimmed back and beds reset for a cleaner entrance.",
    position: "65% center",
  },
  {
    title: "Seasonal Maintenance",
    description: "Leaves, debris, and tired growth cleared before the next season.",
    position: "left",
  },
];

const testimonials = [
  {
    quote:
      "Exterior Elite Solutions keeps our lawn looking sharp every week. They are dependable, quick to respond, and always leave the driveway clean.",
    name: "Marissa H.",
    context: "Residential mowing customer",
  },
  {
    quote:
      "They refreshed our mulch beds and trimmed everything around the house. The property looked brighter the same afternoon.",
    name: "Daniel W.",
    context: "Landscape cleanup customer",
  },
  {
    quote:
      "Our storefront finally looks maintained from the street. Scheduling is easy and the work is consistently professional.",
    name: "Keisha M.",
    context: "Commercial maintenance customer",
  },
];

const contactDetails = [
  { label: "Phone", value: "(555) 123-LAWN" },
  { label: "Email", value: "contact@exteriorelitesolutionsllc.com" },
  { label: "Location", value: "Serving Tell City, IN and surrounding areas" },
  { label: "Hours", value: "Monday: 8:00 AM-6:00 PM\nTuesday: 8:00 AM - 6:00 PM\nWednesday: 8:00 AM - 6:00 PM\nThursday: 8:00 AM - 6:00 PM\nFriday: 8:00 AM - 6:00 PM" },
];

function canAnimate() {
  return (
    typeof window !== "undefined" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function ServiceIcon({ name }: { name: string }) {
  return (
    <span className={`service-icon service-icon-${name}`} aria-hidden="true">
      <span />
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#4b8064] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#75857b] md:text-lg">
        {description}
      </p>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen || !canAnimate()) {
      return;
    }

    animate("[data-mobile-menu]", {
      opacity: [0, 1],
      y: [-10, 0],
      scale: [0.98, 1],
      duration: 260,
      ease: "outCubic",
    });

    animate("[data-mobile-link]", {
      opacity: [0, 1],
      x: [-8, 0],
      duration: 280,
      delay: stagger(38),
      ease: "outCubic",
    });
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-900 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Exterior Elite Solutions Lawn & Landscape home">
          <Image
            src="/images/ees_logo.png"
            alt="Exterior Elite Solutions Lawn & Landscape logo"
            width={70}
            height={70}
          />
          <span className="leading-tight">
            <span className="block text-sm font-bold text-[#4b8064] md:text-base">
              Exterior Elite Solutions
            </span>
            <span className="block text-xs font-semibold text-[#647067]">
              Lawn & Landscape
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#ffffff] transition-colors hover:text-[#0f6b3b]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="quote-button quote-button-small" href="#contact">
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="mobile-menu-button inline-flex lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={isOpen ? "open" : ""} />
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-navigation"
          data-mobile-menu
          className="mx-5 mb-4 rounded-lg border border-[#dfe7dd] bg-white p-3 shadow-xl shadow-[#142016]/10 lg:hidden"
        >
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                data-mobile-link
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#27352d] hover:bg-[#eef5ec] focus:bg-[#eef5ec]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              data-mobile-link
              href="#contact"
              className="mt-2 rounded-lg bg-[#0f4f2e] px-4 py-3 text-center text-sm font-bold text-white shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden pt-20 md:pt-24">
      <div className="absolute inset-x-0 top-0 h-36 bg-zinc-900" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-6 md:pb-16 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div className="hero-copy relative z-10">
          <p className="hero-animate section-eyebrow">Tell City based lawn care you can count on</p>
          <h1 className="hero-animate mt-12 max-w-4xl text-4xl font-black leading-tight text-[#4b8064] md:text-5xl">
            Reliable Lawn Care & Landscaping That Keeps Your Property Looking Its Best
          </h1>
          <p className="hero-animate mt-5 max-w-2xl text-lg leading-8 text-[#849f90]">
            Exterior Elite Solutions Lawn & Landscape provides dependable mowing, maintenance,
            mulching, trimming, cleanups, and landscape refreshes for homes and
            small businesses that need care without the hassle.
          </p>
          <div className="hero-animate mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="quote-button">
              Request a Free Quote
            </a>
            <a href="#services" className="secondary-button">
              View Services
            </a>
          </div>
        </div>

        <div className="hero-visual relative z-10">
          <div className="relative overflow-hidden rounded-lg border border-white/70 bg-zinc-900 shadow-2xl shadow-[#15351e]/20">
            <div className="relative aspect-4/3 min-h-75 lg:aspect-16/10">
              <Image
                src="/images/lawn-hero.png"
                alt="Freshly maintained green lawn with crisp mowing stripes and clean landscaping"
                fill
                fetchPriority="high"
                loading="eager"
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#4b8064]/70 via-[#4b8064]/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/92 p-5 shadow-xl shadow-black/10 backdrop-blur">
                <p className="text-sm font-bold text-[#0f4f2e]">This week&apos;s route</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {["Mow", "Edge", "Clean"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-[#eef5ec] px-3 py-2 text-center text-xs font-bold text-[#27352d]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-blades" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} className="hero-blade" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const animateCard = (card: HTMLElement, active: boolean) => {
    if (!canAnimate()) {
      return;
    }

    animate(card, {
      y: active ? -8 : 0,
      scale: active ? 1.01 : 1,
      duration: 260,
      ease: "outCubic",
    });
  };

  return (
    <section id="services" className="section-shell bg-zinc-900" data-animate="section">
      <SectionHeading
        eyebrow="Services"
        title="Everything your lawn needs, handled with care"
        description="Choose recurring mowing, seasonal maintenance, or a focused project visit. Every service is built around clean results, reliable timing, and practical property care."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {services.map((service) => (
          <article
            key={service.title}
            data-reveal-item
            className="service-card rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-sm"
            onMouseEnter={(event) => animateCard(event.currentTarget, true)}
            onMouseLeave={(event) => animateCard(event.currentTarget, false)}
          >
            <ServiceIcon name={service.icon} />
            <h3 className="mt-5 text-xl font-bold leading-7 text-[#4b8064]">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#839588]">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell bg-zinc-900" data-animate="section">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div data-reveal-item className="relative min-h-105 overflow-hidden rounded-lg bg-[#1d3325]">
          <Image
            src="/images/lawn-hero.png"
            alt="Professional lawn care result with trimmed beds, green turf, and clean edges"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#16311f]/25" />
          <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-zinc-800 border-zinc-700 p-5 shadow-xl backdrop-blur">
            <p className="text-sm font-bold text-white">Property care with pride</p>
            <p className="mt-2 text-sm leading-6 text-zinc-100">
              Clean equipment, careful finishing, and crews that respect your home or business.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p data-reveal-item className="section-eyebrow">About Exterior Elite Solutions</p>
          <h2 data-reveal-item className="mt-4 text-3xl font-bold leading-tight text-[#4b8064] md:text-5xl">
            A dependable local crew for properties that deserve steady attention
          </h2>
          <div data-reveal-item className="mt-6 space-y-5 text-base leading-8 text-[#73867b] md:text-lg">
            <p>
              Exterior Elite Solutions Lawn & Landscape was built around a simple promise: show
              up, do clean work, communicate clearly, and leave every property
              better than we found it.
            </p>
            <p>
              Whether you need weekly mowing, a one-time yard cleanup, fresh
              mulch, or a landscape refresh before guests arrive, we bring the
              same care to small lawns, busy commercial frontages, and larger
              residential lots.
            </p>
          </div>
          <div data-reveal-item className="mt-8 grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat} className="rounded-lg border border-zinc-700 bg-zinc-800 p-4">
                <p className="font-bold text-[#4b8064]">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section-shell bg-zinc-900 text-white" data-animate="section">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p data-reveal-item className="section-eyebrow section-eyebrow-dark">
              Why choose us
            </p>
            <h2 data-reveal-item className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Professional results without complicated service
            </h2>
            <p data-reveal-item className="mt-5 text-base leading-8 text-[#c6d4ca] md:text-lg">
              Lawn care should feel easy from the first quote to the final
              blow-off. We keep the process straightforward, responsive, and
              focused on the details people notice from the curb.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                data-reveal-item
                className="rounded-lg border border-zinc-700 bg-zinc-800 p-5"
              >
                <span className="benefit-mark" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#c7d3ca]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section className="section-shell bg-zinc-900" data-animate="section">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 rounded-lg border border-zinc-700 bg-zinc-900 p-6 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p data-reveal-item className="section-eyebrow">Service areas</p>
            <h2 data-reveal-item className="mt-4 text-3xl font-bold leading-tight text-[#4b8064] md:text-5xl">
              Local lawn care for nearby homes and businesses
            </h2>
            <p data-reveal-item className="mt-5 text-base leading-8 text-[#5a675f]">
              We serve local neighborhoods and surrounding communities with
              flexible mowing routes, seasonal cleanup windows, and quote-based
              landscape projects. Tell us where the property is and what you
              need cared for.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <div
                key={area}
                data-reveal-item
                className="flex items-center gap-3 rounded-lg border border-zinc-700 bg-zinc-800 p-4"
              >
                <span className="area-pin" aria-hidden="true" />
                <span className="font-bold text-[#c7d3ca]">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section-shell bg-zinc-900" data-animate="section">
      <SectionHeading
        eyebrow="Project gallery"
        title="Fresh cuts, clean beds, and tidy finishes"
        description="A polished property starts with the basics done well. These sample project cards show the kind of work we help local customers keep up with throughout the year."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 md:grid-cols-2 lg:px-8">
        {gallery.map((item, index) => (
          <article
            key={item.title}
            data-reveal-item
            className={`gallery-card ${index === 0 ? "md:row-span-2" : ""}`}
          >
            <Image
              src="/images/lawn-hero.png"
              alt={`${item.title} lawn care and landscaping project example`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: item.position }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#4b8064]/82 via-[#4b8064]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-2xl font-bold text-white">{item.title}</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-[#e6efe7]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="section-shell bg-zinc-900" data-animate="section">
      <SectionHeading
        eyebrow="Reviews"
        title="Trusted by customers who want the job done right"
        description="Friendly service, quick communication, and clean work are the things customers remember after every visit."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 md:grid-cols-3 lg:px-8">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            data-reveal-item
            className="rounded-lg border border-zinc-700 bg-zinc-800 p-6 shadow-sm"
          >
            <div className="flex gap-1" aria-label="Five star review">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="review-star" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-5 text-base leading-8 text-zinc-100">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-6 border-t border-zinc-700 pt-5">
              <p className="font-bold text-[#4b8064]">{testimonial.name}</p>
              <p className="mt-1 text-sm text-[#66736b]">{testimonial.context}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Connect this front-end form to a quote request handler when a backend is available.
    setFormStatus("Thanks. Your quote request is ready to connect to the future contact handler.");
  };

  return (
    <section id="contact" className="section-shell bg-[#243f30] text-white" data-animate="section">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p data-reveal-item className="section-eyebrow section-eyebrow-dark">
            Free quote
          </p>
          <h2 data-reveal-item className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Tell us what your property needs.
          </h2>
          <p data-reveal-item className="mt-5 max-w-2xl text-base leading-8 text-[#c6d4ca] md:text-lg">
            Share a few details and we'll follow up with next steps!
          </p>

          <form
            data-reveal-item
            onSubmit={handleQuoteSubmit}
            className="mt-9 grid gap-4 rounded-lg border border-white/10 bg-white/[0.07] p-5 md:grid-cols-2 md:p-6"
          >
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="form-field">
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="propertyType">Property Type</label>
              <select id="propertyType" name="propertyType" defaultValue="">
                <option value="" disabled>
                  Select property type
                </option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Rental Property</option>
                <option>HOA or Common Area</option>
              </select>
            </div>
            <div className="form-field md:col-span-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your lawn, timing, and the service you have in mind."
              />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="quote-button w-full sm:w-auto">
                Request a Free Quote
              </button>
              {formStatus ? (
                <p className="mt-4 text-sm font-semibold text-[#dfeccf]" role="status">
                  {formStatus}
                </p>
              ) : null}
            </div>
          </form>
        </div>

        <aside data-reveal-item className="rounded-lg border border-white/10 bg-zinc-900 p-6 text-[#4b8064] shadow-2xl shadow-black/20">
          <p className="section-eyebrow">Contact details</p>
          <h3 className="mt-4 text-2xl font-bold">Exterior Elite Solutions Lawn & Landscape</h3>
          <p className="mt-3 text-sm leading-7 text-[#5c6a61]">
            Ready for a cleaner, easier-to-maintain property? Reach out with your
            service needs, location, and preferred timing.
          </p>
          <dl className="mt-8 grid gap-4">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="rounded-lg bg-zinc-800 p-4">
                <dt className="text-xs font-bold text-[#0f6b3b]">{detail.label}</dt>
                <dd className="mt-1 text-sm font-semibold leading-6 text-zinc-100">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d1711] px-5 py-12 text-[#d8e4db] lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.7fr_0.9fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
            src="/images/ees_logo.png"
            alt="Exterior Elite Solutions Lawn & Landscape logo"
            width={70}
            height={70}
          />
            <p className="font-bold text-white">Exterior Elite Solutions Lawn & Landscape</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#b7c7bd]">
            Reliable mowing, landscaping, cleanup, trimming, and property
            maintenance for local residential and commercial customers.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">Quick Links</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">Services</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">Contact</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            {contactDetails.slice(0, 3).map((detail) => (
              <li key={detail.label}>{detail.value}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-[#9dafb4]">
        <p>Copyright {new Date().getFullYear()} Exterior Elite Solutions Lawn & Landscape. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function MarketingLanding() {
  useEffect(() => {
    if (!canAnimate()) {
      return;
    }

    document.body.classList.add("animations-ready");

    const runningAnimations = [
      animate(".hero-copy .hero-animate", {
        opacity: [0, 1],
        y: [26, 0],
        duration: 900,
        delay: stagger(90),
        ease: "outCubic",
      }),
      animate(".hero-visual", {
        opacity: [0, 1],
        x: [34, 0],
        duration: 1000,
        delay: 220,
        ease: "outCubic",
      }),
      animate(".hero-blade", {
        rotate: [-5, 5],
        duration: 1800,
        delay: stagger(85),
        ease: "inOutSine",
        loop: true,
        alternate: true,
      }),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const section = entry.target as HTMLElement;
          const items = section.querySelectorAll("[data-reveal-item]");
          section.classList.add("is-visible");

          if (items.length > 0) {
            runningAnimations.push(
              animate(items, {
                opacity: [0, 1],
                y: [28, 0],
                duration: 680,
                delay: stagger(70),
                ease: "outCubic",
              }),
            );
          } else {
            runningAnimations.push(
              animate(section, {
                opacity: [0, 1],
                y: [18, 0],
                duration: 650,
                ease: "outCubic",
              }),
            );
          }

          observer.unobserve(section);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -90px 0px" },
    );

    document
      .querySelectorAll<HTMLElement>("[data-animate='section']")
      .forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      runningAnimations.forEach((animation) => animation.revert());
      document.body.classList.remove("animations-ready");
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#4b8064]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <ServiceAreas />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
