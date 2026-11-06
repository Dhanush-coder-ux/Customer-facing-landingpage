import { useState } from "react";
import { Mail, Phone, MapPin, Shield, FileText, ArrowUpRight, UserCheck, HelpCircle } from "lucide-react";
import {
  NAV,
  APP_LOGO,
  PLAY_STORE_URL,
  COMPANY_NAME,
  REGISTERED_ADDRESS,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  GRIEVANCE_OFFICER,
  HELPLINE_NUMBER,
  GAC_PORTAL,
} from "../constants";
import LegalModal, { LegalDocType } from "./LegalModal";

export default function Footer() {
  const [legalModal, setLegalModal] = useState<LegalDocType>(null);

  return (
    <>
      <footer className="border-t border-outline bg-hero text-stone-700">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:py-16 md:grid-cols-12">
          {/* Brand & Platform Disclosure Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label="ShopiQ Home"
            >
              <picture>
                <source srcSet={APP_LOGO.webp} type="image/webp" />
                <img
                  src={APP_LOGO.png}
                  alt="ShopiQ Logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-xl object-contain shadow-sm"
                />
              </picture>
              <span className="font-bold text-xl tracking-tight text-ink">ShopiQ</span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-stone-600">
              The modern mobile shopping companion connecting you directly to verified digital storefronts, curated collections, and direct seller fulfillment.
            </p>

            {/* Statutory Platform Operator Information */}
            <div className="rounded-2xl border border-outline bg-white/70 p-4 text-xs space-y-2 text-stone-600">
              <p className="font-semibold text-stone-900">Platform Operator</p>
              <p className="font-medium text-stone-800">{COMPANY_NAME}</p>
              <p className="flex items-start gap-1.5">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>{REGISTERED_ADDRESS}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone size={14} className="text-primary shrink-0" />
                <a href={`tel:${SUPPORT_PHONE}`} className="hover:text-primary transition font-medium">
                  {SUPPORT_PHONE}
                </a>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail size={14} className="text-primary shrink-0" />
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-primary transition font-medium">
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-900">
              Navigation
            </p>
            <ul className="space-y-2 text-sm font-medium">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 py-0.5"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark transition font-semibold"
                >
                  <span>Google Play Listing</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Statutory Grievance Redressal & Legal Links */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-900">
              Grievance &amp; Compliance
            </p>

            <ul className="space-y-2.5 text-sm font-medium text-stone-600">
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal("terms")}
                  className="flex items-center gap-2 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded text-left"
                >
                  <FileText size={16} className="text-primary shrink-0" />
                  <span>ShopiQ Terms of Use</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal("privacy")}
                  className="flex items-center gap-2 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded text-left"
                >
                  <Shield size={16} className="text-primary shrink-0" />
                  <span>ShopiQ Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal("retailer-terms")}
                  className="flex items-center gap-2 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded text-left text-xs text-stone-500"
                >
                  <span>InventQ Retailer Terms of Service</span>
                </button>
              </li>
            </ul>

            {/* Grievance Officer Officer Card */}
            <div className="rounded-xl border border-orange-200/80 bg-orange-50/50 p-3.5 text-xs text-stone-700 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-stone-900">
                <UserCheck size={14} className="text-primary" />
                <span>Grievance Officer (IT Rules &amp; CPA 2019)</span>
              </div>
              <p>Name: <strong>{GRIEVANCE_OFFICER.name}</strong></p>
              <p>Email: <a href={`mailto:${GRIEVANCE_OFFICER.email}`} className="text-primary font-semibold hover:underline">{GRIEVANCE_OFFICER.email}</a></p>
              <p>Phone: {GRIEVANCE_OFFICER.phone}</p>
              <p className="text-[11px] text-stone-500 pt-1 border-t border-orange-200/50">
                National Consumer Helpline: <strong>{HELPLINE_NUMBER}</strong> · GAC: <a href={GAC_PORTAL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">grievance.gov.in</a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="border-t border-outline px-5 py-5 text-center text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. ShopiQ is an online technology marketplace connecting consumers with independent digital merchants.
          </p>
        </div>
      </footer>

      {/* Accessible Legal Documents Modal */}
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  );
}
