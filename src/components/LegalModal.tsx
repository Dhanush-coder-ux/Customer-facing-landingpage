import { useEffect, useState, useRef } from "react";
import {
  X,
  Shield,
  FileText,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Building,
  Check,
  Search,
  Printer,
  ChevronRight,
  AlertCircle,
  HelpCircle,
  Clock,
  Scale,
} from "lucide-react";
import {
  COMPANY_NAME,
  REGISTERED_ADDRESS,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  GRIEVANCE_OFFICER,
  HELPLINE_NUMBER,
  GAC_PORTAL,
} from "../constants";
import { ALL_LEGAL_DOCS, LegalDocType, LegalDocument } from "../data/legalDocuments";

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export type { LegalDocType };

export default function LegalModal({ type, onClose }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy" | "retailer-terms" | "retailer-privacy">("terms");
  const [copiedLink, setCopiedLink] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type) {
      setActiveTab(type);
    }
  }, [type]);

  // Sync activeTab to URL hash and listen for escape key
  useEffect(() => {
    if (!type) return;

    // Update URL hash without causing a page jump
    window.history.replaceState(null, "", `#${activeTab}`);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, activeTab]);

  const handleClose = () => {
    // Clear legal hash from URL when closing
    if (window.location.hash.match(/#(terms|privacy|retailer-terms|retailer-privacy)/)) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
    onClose();
  };

  const handleTabChange = (tab: "terms" | "privacy" | "retailer-terms" | "retailer-privacy") => {
    setActiveTab(tab);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el && scrollContainerRef.current) {
      const containerTop = scrollContainerRef.current.getBoundingClientRect().top;
      const elTop = el.getBoundingClientRect().top;
      const offset = elTop - containerTop + scrollContainerRef.current.scrollTop - 20;
      scrollContainerRef.current.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/#${activeTab}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  if (!type) return null;

  const currentDoc: LegalDocument = ALL_LEGAL_DOCS[activeTab] || ALL_LEGAL_DOCS.terms;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-5 bg-stone-900/65 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative flex max-h-[94vh] w-full max-w-4xl flex-col rounded-3xl bg-white shadow-2xl overflow-hidden border border-outline">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline bg-hero/80 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-primary shadow-sm ring-1 ring-orange-200/60">
              {activeTab === "terms" || activeTab === "retailer-terms" ? (
                <FileText size={22} className="stroke-[2.2]" />
              ) : (
                <Shield size={22} className="stroke-[2.2]" />
              )}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 id="legal-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                  {currentDoc.title}
                </h2>
                <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-[11px] font-semibold text-primary-dark">
                  {currentDoc.audience}
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                {currentDoc.version} · Effective: {currentDoc.effectiveDate} · Platform Operator: {COMPANY_NAME}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              type="button"
              onClick={handleCopyLink}
              title="Copy link to this document"
              className="inline-flex items-center gap-1.5 rounded-xl border border-outline bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 shadow-sm transition hover:bg-orange-50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {copiedLink ? (
                <>
                  <Check size={14} className="text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <ExternalLink size={14} />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              title="Print document"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-outline bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 shadow-sm transition hover:bg-orange-50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="flex h-9 w-9 items-center justify-center rounded-full text-stone-500 hover:bg-orange-100 hover:text-stone-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close legal documents modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-outline bg-stone-50 px-6 py-2.5 text-xs font-semibold">
          <span className="text-stone-400 mr-1 uppercase tracking-wider text-[10px] font-bold">
            ShopiQ App:
          </span>
          <button
            type="button"
            onClick={() => handleTabChange("terms")}
            className={`rounded-lg px-3.5 py-1.5 transition ${
              activeTab === "terms"
                ? "bg-primary text-white shadow-sm font-bold"
                : "text-stone-600 hover:bg-stone-200/60"
            }`}
          >
            ShopiQ Terms of Use
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("privacy")}
            className={`rounded-lg px-3.5 py-1.5 transition ${
              activeTab === "privacy"
                ? "bg-primary text-white shadow-sm font-bold"
                : "text-stone-600 hover:bg-stone-200/60"
            }`}
          >
            ShopiQ Privacy Policy
          </button>

          <span className="text-stone-300 mx-1 hidden sm:inline">|</span>
          <span className="text-stone-400 mr-1 uppercase tracking-wider text-[10px] font-bold">
            Merchant:
          </span>
          <button
            type="button"
            onClick={() => handleTabChange("retailer-terms")}
            className={`rounded-lg px-3 py-1.5 transition ${
              activeTab === "retailer-terms"
                ? "bg-stone-800 text-white shadow-sm font-bold"
                : "text-stone-600 hover:bg-stone-200/60"
            }`}
          >
            InventQ Terms
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("retailer-privacy")}
            className={`rounded-lg px-3 py-1.5 transition ${
              activeTab === "retailer-privacy"
                ? "bg-stone-800 text-white shadow-sm font-bold"
                : "text-stone-600 hover:bg-stone-200/60"
            }`}
          >
            InventQ Privacy
          </button>
        </div>

        {/* Quick Section Navigator Bar */}
        <div className="border-b border-outline/70 bg-milk-warm px-6 py-2 overflow-x-auto scrollbar-thin">
          <div className="flex items-center gap-1.5 min-w-max text-[11px]">
            <span className="text-stone-400 font-medium mr-1 uppercase tracking-wider text-[10px]">
              Jump to:
            </span>
            {currentDoc.sections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(`sec-${sec.id}`)}
                className="rounded-md border border-orange-200/60 bg-white px-2 py-0.5 font-medium text-stone-700 hover:border-primary hover:text-primary transition"
              >
                {sec.number}. {sec.title.split("—")[0].split(":")[0].substring(0, 22)}
              </button>
            ))}
          </div>
        </div>

        {/* Document Content Scroll Area */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto px-6 sm:px-10 py-6 text-sm leading-relaxed text-stone-700 space-y-7"
        >
          {/* Statutory Framework Banner */}
          <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-4 text-xs text-stone-800 flex items-start gap-3 shadow-sm">
            <Scale size={20} className="text-primary-dark shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-primary-dark text-xs uppercase tracking-wide">
                Regulatory Framework &amp; Applicable Laws
              </p>
              <p className="mt-1 leading-relaxed text-stone-700 font-medium">
                {currentDoc.frameworkBadge}
              </p>
              <p className="mt-1 text-[11px] text-stone-500">
                {currentDoc.description}
              </p>
            </div>
          </div>

          {/* Sections List */}
          {currentDoc.sections.map((section) => (
            <section
              key={section.id}
              id={`sec-${section.id}`}
              className="scroll-mt-6 border-b border-outline/60 pb-6 last:border-none space-y-3"
            >
              <h3 className="text-lg sm:text-xl font-bold text-ink flex items-baseline gap-2">
                <span className="text-primary font-mono text-base font-extrabold">
                  {section.number}.
                </span>
                <span>{section.title}</span>
              </h3>

              {section.content.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed text-stone-700">
                  {p}
                </p>
              ))}

              {/* Highlight Box */}
              {section.highlightBox && (
                <div className="rounded-2xl border border-orange-200 bg-white p-4 sm:p-5 shadow-sm space-y-2 ring-1 ring-orange-200/50">
                  <p className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-primary-dark text-xs">
                      ✓
                    </span>
                    {section.highlightBox.title}
                  </p>
                  {section.highlightBox.text && (
                    <p className="text-xs sm:text-sm leading-relaxed text-stone-700">
                      {section.highlightBox.text}
                    </p>
                  )}
                  {section.highlightBox.list && (
                    <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-stone-600">
                      {section.highlightBox.list.map((item, lIdx) => (
                        <li key={lIdx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Table */}
              {section.table && (
                <div className="overflow-x-auto rounded-2xl border border-outline bg-white shadow-sm mt-3">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-stone-100 text-stone-900 font-bold border-b border-outline">
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3 sm:p-3.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-orange-50/40 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-3 sm:p-3.5 text-stone-700 leading-relaxed ${
                                cIdx === 0 ? "font-semibold text-stone-900" : ""
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Bullet List */}
              {section.list && (
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-700 mt-2">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Subsections */}
              {section.subsections && (
                <div className="space-y-4 pt-2">
                  {section.subsections.map((sub) => (
                    <div
                      key={sub.id}
                      id={`sec-${sub.id}`}
                      className="rounded-2xl border border-outline bg-stone-50/80 p-4 sm:p-5 space-y-2.5"
                    >
                      <h4 className="text-base font-bold text-stone-900 flex items-baseline gap-2">
                        <span className="text-primary font-mono text-sm font-bold">
                          {sub.number}
                        </span>
                        <span>{sub.title}</span>
                      </h4>
                      {sub.content.map((subP, spIdx) => (
                        <p key={spIdx} className="text-xs sm:text-sm leading-relaxed text-stone-700">
                          {subP}
                        </p>
                      ))}
                      {sub.list && (
                        <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-stone-700 font-mono text-[12px] sm:text-[13px] leading-relaxed">
                          {sub.list.map((item, lIdx) => (
                            <li key={lIdx} className="font-sans leading-relaxed">
                              {item.replace(/^\d+\.\s*/, "")}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Statutory Grievance Redressal Card */}
          <div className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50/80 to-white p-5 sm:p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-primary-dark font-bold text-sm uppercase tracking-wide">
              <Building size={18} />
              <span>Statutory Grievance Redressal Officer</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-600">
              In accordance with the Information Technology Act, 2000, Consumer Protection (E-Commerce) Rules, 2020, and the Digital Personal Data Protection Act, 2023:
            </p>

            <div className="grid gap-3 sm:grid-cols-2 text-xs">
              <div className="rounded-xl border border-orange-200/70 bg-white p-3 space-y-1">
                <span className="text-stone-500 block">Designated Officer:</span>
                <strong className="text-stone-900 text-sm">{GRIEVANCE_OFFICER.name}</strong>
                <p className="text-stone-600">Address: {GRIEVANCE_OFFICER.address}</p>
              </div>

              <div className="rounded-xl border border-orange-200/70 bg-white p-3 space-y-1">
                <span className="text-stone-500 block">Direct Contact:</span>
                <p>
                  Email:{" "}
                  <a href={`mailto:${GRIEVANCE_OFFICER.email}`} className="text-primary font-bold hover:underline">
                    {GRIEVANCE_OFFICER.email}
                  </a>
                </p>
                <p>Phone: <span className="font-semibold text-stone-800">{GRIEVANCE_OFFICER.phone}</span></p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-orange-200/50 text-[11px] text-stone-500">
              <span>National Consumer Helpline: <strong>{HELPLINE_NUMBER}</strong></span>
              <span>
                Grievance Appellate Committee:{" "}
                <a
                  href={GAC_PORTAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  grievance.gov.in ↗
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-outline bg-stone-50 px-6 py-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <Building size={14} className="text-primary" />
            <span>Operated by {COMPANY_NAME} · Registered in Madurai, India</span>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="w-full sm:w-auto rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
