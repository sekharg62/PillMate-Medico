import type { LucideIcon } from "lucide-react";
import { Building2, Headphones, ShieldCheck, UsersRound } from "lucide-react";

export type TrustStatItem = {
  key: string;
  label: string;
  value: string;
  valueSuffix?: string;
  icon: LucideIcon;
  theme: "emerald" | "violet" | "teal" | "amber";
};

export type TestimonialItem = {
  key: string;
  quote: string;
  name: string;
  title: string;
  initials: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};

export type PricingPlan = {
  key: string;
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  variant: "default" | "popular";
  popularLabel?: string;
  cta: { label: string } & (
    | { kind: "link"; to: string }
    | { kind: "authLink"; toWhenLoggedIn: string; toWhenLoggedOut: string }
    | { kind: "anchor"; href: string }
  );
};

export const homePageConfig = {
  statsTrustBar: [
    {
      key: "clinics",
      label: "Clinics Worldwide",
      value: "500",
      valueSuffix: "+",
      icon: Building2,
      theme: "emerald",
    },
    {
      key: "uptime",
      label: "Platform Uptime",
      value: "99.9",
      valueSuffix: "%",
      icon: ShieldCheck,
      theme: "violet",
    },
    {
      key: "records",
      label: "Patient Records Managed",
      value: "2M",
      valueSuffix: "+",
      icon: UsersRound,
      theme: "teal",
    },
    {
      key: "support",
      label: "Expert Support",
      value: "24",
      valueSuffix: "/7",
      icon: Headphones,
      theme: "amber",
    },
  ] satisfies TrustStatItem[],

  testimonials: [
    {
      key: "maria-chen",
      rating: 5,
      quote:
        '"Pillmate transformed our inventory management. We finally have an on-off switch for stock emergencies in real-time."',
      name: "Dr. Maria Chen",
      title: "Chief Pharmacist, Metro Health",
      initials: "DM",
    },
    {
      key: "james-sullivan",
      rating: 5,
      quote: '"Our staff scheduling became twice as easy. This is our family now. No more sticky notes."',
      name: "James Sullivan",
      title: "Clinic Manager, Reverie Care",
      initials: "JS",
    },
    {
      key: "ava-patel",
      rating: 4,
      quote:
        '"Patient compliance was our top issue for years. With Pillmate, we\'ve seen a 40% uptick across our network."',
      name: "Dr. Ava Patel",
      title: "Director, West Medical Union",
      initials: "AP",
    },
  ] satisfies TestimonialItem[],

  pricing: {
    badgeLabel: "Flexible plans",
    title: "Pricing that fits your clinic",
    subtitle:
      "Start with what you need, upgrade anytime, and stay confident with secure healthcare-grade tooling.",
    footerNote: "Want a tailored demo? Use the form below and our team will reach out quickly.",
    plans: [
      {
        key: "starter",
        name: "Starter",
        description: "For new clinics getting organized.",
        price: "$0",
        period: "/ month",
        features: ["Core inventory + staff", "Basic reports", "Manage upto 3 staff members"],
        variant: "default",
        cta: { kind: "link", to: "/register", label: "Start Free" },
      },
      {
        key: "growth",
        name: "Growth",
        description: "For clinics that need automation and insights.",
        price: "$3",
        period: "/ month",
        features: ["Manage 1 store", "Smart stock + expiry tracking", "Priority reports + exports", "SMS + audit-ready logs","Manage upto 10 staff members"],
        variant: "popular",
        popularLabel: "Most Popular",
        cta: {
          kind: "authLink",
          toWhenLoggedIn: "/dashboard",
          toWhenLoggedOut: "/register",
          label: "Get Growth",
        },
      },
      {
        key: "enterprise",
        name: "Enterprise",
        description: "Multi-store, compliance, and custom onboarding.",
        price: "Custom",
        features: ["Zero-trust security + audit exports", "Dedicated onboarding and SLAs", "Advanced integrations"],
        variant: "default",
        cta: { kind: "anchor", href: "#contact", label: "Contact Sales" },
      },
    ] satisfies PricingPlan[],
  },
} as const;

