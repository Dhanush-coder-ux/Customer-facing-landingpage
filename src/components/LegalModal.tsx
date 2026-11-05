import { useEffect, useState } from "react";
import { X, Shield, FileText, ExternalLink, Mail, Phone, MapPin, Building } from "lucide-react";
import {
  COMPANY_NAME,
  REGISTERED_ADDRESS,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  GRIEVANCE_OFFICER,
  HELPLINE_NUMBER,
  GAC_PORTAL,
} from "../constants";

export type LegalDocType = "terms" | "privacy" | "retailer-terms" | "retailer-privacy" | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy" | "retailer-terms" | "retailer-privacy">("terms");

  useEffect(() => {
    if (type) {
      setActiveTab(type);
    }
  }, [type]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (type) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col rounded-3xl bg-white shadow-2xl overflow-hidden border border-outline">
        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline bg-hero/70 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-primary-dark">
              {activeTab === "terms" || activeTab === "retailer-terms" ? (
                <FileText size={20} />
              ) : (
                <Shield size={20} />
              )}
            </span>
            <div>
              <h2 id="legal-modal-title" className="text-xl sm:text-2xl font-bold text-ink">
                {activeTab === "terms" && "ShopIQ Terms of Use"}
                {activeTab === "privacy" && "ShopIQ Privacy Policy"}
                {activeTab === "retailer-terms" && "InventQ Retailer Terms"}
                {activeTab === "retailer-privacy" && "InventQ Retailer Privacy"}
              </h2>
              <p className="text-xs text-stone-500">
                Version 2.1 · Effective from 7 October 2026 · Platform: {COMPANY_NAME}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full text-stone-500 hover:bg-orange-100 hover:text-stone-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close legal documents modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-outline bg-stone-50 px-6 py-2.5 text-xs font-semibold">
          <span className="text-stone-400 mr-1 uppercase tracking-wider text-[10px]">Shopper:</span>
          <button
            type="button"
            onClick={() => setActiveTab("terms")}
            className={`rounded-lg px-3 py-1.5 transition ${
              activeTab === "terms"
                ? "bg-primary text-white shadow-sm"
                : "text-stone-600 hover:bg-stone-200/60"
            }`}
          >
            Terms of Use
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("privacy")}
            className={`rounded-lg px-3 py-1.5 transition ${
              activeTab === "privacy"
                ? "bg-primary text-white shadow-sm"
                : "text-stone-600 hover:bg-stone-200/60"
            }`}
          >
            Privacy Policy
          </button>

          <span className="text-stone-300 mx-1 hidden sm:inline">|</span>
          <span className="text-stone-400 mr-1 uppercase tracking-wider text-[10px]">Retailer:</span>
          <button
            type="button"
            onClick={() => setActiveTab("retailer-terms")}
            className={`rounded-lg px-3 py-1.5 transition ${
              activeTab === "retailer-terms"
                ? "bg-primary text-white shadow-sm"
                : "text-stone-600 hover:bg-stone-200/60"
            }`}
          >
            InventQ Terms
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("retailer-privacy")}
            className={`rounded-lg px-3 py-1.5 transition ${
              activeTab === "retailer-privacy"
                ? "bg-primary text-white shadow-sm"
                : "text-stone-600 hover:bg-stone-200/60"
            }`}
          >
            InventQ Privacy
          </button>
        </div>

        {/* Document Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 text-sm leading-relaxed text-stone-700 space-y-6">
          {/* TAB 1: ShopIQ Terms of Use */}
          {activeTab === "terms" && (
            <article className="space-y-6">
              <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-4 text-xs text-stone-700">
                <p className="font-semibold text-primary-dark">Legal & Regulatory Framework</p>
                <p className="mt-1">
                  Compliant with Consumer Protection Act, 2019 · Consumer Protection (E-Commerce) Rules, 2020 / 2026 ·
                  Information Technology Act, 2000 & Intermediary Guidelines, 2021 · Digital Personal Data Protection Act, 2023.
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">1. About these terms</h3>
                <p>
                  These Terms of Use govern your use of the <strong>ShopIQ</strong> mobile application and website,
                  operated by <strong>{COMPANY_NAME}</strong> (registered office at {REGISTERED_ADDRESS}).
                </p>
                <p>By creating an account or placing an order through ShopIQ, you agree to these terms.</p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">2. What we are — and what we are not</h3>
                <p>
                  ShopIQ is a <strong>technology platform</strong> that allows local and digital retailers to display
                  their products and receive orders from customers.
                </p>
                <div className="rounded-xl bg-stone-50 border border-outline p-4 space-y-1.5">
                  <p className="font-semibold text-stone-900">We are not the seller. For every order you place:</p>
                  <ul className="list-disc pl-5 space-y-1 text-stone-600">
                    <li>The <strong>retailer</strong> is the seller of the goods.</li>
                    <li>The retailer owns and holds the goods; we never take possession of them at any stage.</li>
                    <li>The retailer is solely responsible for the product, its quality, safety, delivery, and any return or refund.</li>
                    <li>We provide only the platform through which the order is placed.</li>
                  </ul>
                </div>
                <p>
                  The seller&rsquo;s name, address, contact number, and GSTIN (where applicable) are displayed on every store
                  page, product page, order confirmation, and invoice.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-ink">3. Platform disclosures</h3>
                <div className="grid gap-3 sm:grid-cols-2 rounded-2xl border border-outline bg-white p-4 text-xs">
                  <div>
                    <span className="text-stone-500 block">Platform Operator:</span>
                    <strong className="text-stone-900">{COMPANY_NAME}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Registered Office:</span>
                    <strong className="text-stone-900">{REGISTERED_ADDRESS}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Customer Support:</span>
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-semibold hover:underline">
                      {SUPPORT_EMAIL}
                    </a>{" "}
                    · {SUPPORT_PHONE}
                  </div>
                  <div>
                    <span className="text-stone-500 block">Grievance Officer:</span>
                    <strong className="text-stone-900">{GRIEVANCE_OFFICER.name}</strong> ({GRIEVANCE_OFFICER.email} · {GRIEVANCE_OFFICER.phone})
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">4. Your account</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You must be at least 18 years old to create an account and place orders.</li>
                  <li>You must provide accurate details, including a valid phone number and delivery address.</li>
                  <li>You are responsible for all activity under your account.</li>
                  <li>One person should maintain only one account.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">5. Placing an order</h3>
                <p>
                  Product listings, prices, availability, and images are provided by the independent retailer. Placing an
                  order constitutes an offer to buy. A contract of sale is formed directly between{" "}
                  <strong>you and the retailer</strong> when the retailer accepts your order.
                </p>
                <p>
                  <strong>Price and charges:</strong> The total price payable by you, applicable taxes, delivery charges,
                  and any other mandatory fees are clearly displayed <strong>before you confirm an order</strong>. There
                  are no hidden charges added after order placement.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">6. Payment</h3>
                <p>
                  Payment is made <strong>directly to the retailer</strong> via Cash on Delivery (COD), UPI directly to
                  the merchant&rsquo;s account, or another payment method the retailer offers.
                </p>
                <p className="font-semibold text-stone-900">
                  ShopIQ does not collect, hold, or process payments for your store orders, and does not act as a payment intermediary.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">7. Returns, refunds and cancellations</h3>
                <p>
                  The return, exchange, cancellation, and refund terms applicable to your order are displayed by the
                  retailer before purchase and form part of your order record.
                </p>
                <p>
                  Retailers must comply with their published policy and with mandatory consumer rights under the Consumer
                  Protection Act, 2019. A retailer cannot lawfully exclude remedies for goods that are defective,
                  deficient, spurious, or not as described.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">8. Delivery</h3>
                <p>
                  Delivery or pickup arrangements, timelines, and charges are set by the retailer and shown before order
                  confirmation. The retailer is responsible for fulfilling accepted orders within the stated timeframe.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">9. Search results and rankings</h3>
                <p>
                  Search results and store or product recommendations are determined objectively using relevance to your
                  search, product availability, distance, retailer performance, and ratings. Any sponsored or promoted
                  placement will always be clearly and prominently identified.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">10. Prohibited content & conduct</h3>
                <p>
                  Under Rule 3(1)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code)
                  Rules, 2021, users must not upload, host, display, or transmit information that is harmful, obscene,
                  infringing, hateful, fraudulent, defamatory, impersonating, or contrary to Indian law.
                </p>
                <p>
                  Content violations can be reported to{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-semibold hover:underline">
                    {SUPPORT_EMAIL}
                  </a>
                  . Reports are acknowledged within <strong>24 hours</strong> and disposed within <strong>15 days</strong>.
                  Complaints regarding intimate imagery or non-consensual nudity are acted upon within <strong>24 hours</strong>.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-ink">11. Complaints and grievance redressal</h3>
                <p>
                  <strong>Step 1:</strong> Contact the retailer directly using the contact details on your order receipt.
                </p>
                <p>
                  <strong>Step 2:</strong> If unresolved within 48 hours, escalate to our designated Grievance Officer:
                </p>
                <div className="rounded-xl border border-outline bg-stone-50 p-4 space-y-1 text-xs">
                  <p><strong>Name:</strong> {GRIEVANCE_OFFICER.name}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${GRIEVANCE_OFFICER.email}`} className="text-primary hover:underline">{GRIEVANCE_OFFICER.email}</a></p>
                  <p><strong>Phone:</strong> {GRIEVANCE_OFFICER.phone}</p>
                  <p><strong>Address:</strong> {GRIEVANCE_OFFICER.address}</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-outline rounded-lg">
                    <thead className="bg-stone-100 text-stone-800">
                      <tr>
                        <th className="p-2.5 border-b border-outline">Complaint Type</th>
                        <th className="p-2.5 border-b border-outline">Acknowledgment</th>
                        <th className="p-2.5 border-b border-outline">Resolution Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline">
                      <tr>
                        <td className="p-2.5">Platform or content conduct</td>
                        <td className="p-2.5 font-semibold text-primary">24 hours</td>
                        <td className="p-2.5">Within 15 days</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Orders, products, returns, or refunds</td>
                        <td className="p-2.5 font-semibold text-primary">24 hours</td>
                        <td className="p-2.5">Within 1 month</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Intimate imagery / nudity</td>
                        <td className="p-2.5 font-semibold text-primary">—</td>
                        <td className="p-2.5 font-semibold text-primary">Within 24 hours</td>
                      </tr>
                      <tr>
                        <td className="p-2.5">Court or Government agency orders</td>
                        <td className="p-2.5 font-semibold text-primary">—</td>
                        <td className="p-2.5 font-semibold text-primary">Within 36 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-stone-500">
                  Appeals from Grievance Officer decisions may be made to the <strong>Grievance Appellate Committee ({GAC_PORTAL})</strong> within 30 days. You may also contact the <strong>National Consumer Helpline ({HELPLINE_NUMBER})</strong>.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">12. Governing law</h3>
                <p>These terms are governed by the laws of India.</p>
              </section>
            </article>
          )}

          {/* TAB 2: ShopIQ Privacy Policy */}
          {activeTab === "privacy" && (
            <article className="space-y-6">
              <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-4 text-xs text-stone-700">
                <p className="font-semibold text-primary-dark">Digital Personal Data Protection (DPDP) Act, 2023 & SPDI Rules</p>
                <p className="mt-1">
                  Explains what personal data ShopIQ collects, our legal bases, data sharing with independent merchants, security, and your statutory rights.
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">1. Introduction</h3>
                <p>
                  This Privacy Policy explains what personal information <strong>ShopIQ</strong> collects when you use
                  our app and website, how we use it, and your statutory rights. The platform is operated by{" "}
                  <strong>{COMPANY_NAME}</strong>.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-ink">2. What we collect and why</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-outline rounded-lg">
                    <thead className="bg-stone-100 text-stone-800">
                      <tr>
                        <th className="p-2.5 border-b border-outline">Information Category</th>
                        <th className="p-2.5 border-b border-outline">Specific Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline">
                      <tr>
                        <td className="p-2.5 font-semibold">Name</td>
                        <td className="p-2.5">Creating your account, placing orders, delivery identification</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">Mobile number</td>
                        <td className="p-2.5">OTP authentication, order updates, retailer fulfillment contact</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">Email address (optional)</td>
                        <td className="p-2.5">Invoices, receipts, support communications, optional updates</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">Password</td>
                        <td className="p-2.5">Securing your account — stored in irreversible hashed form (bcrypt), never logged</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">Delivery address</td>
                        <td className="p-2.5">Fulfilling and delivering your orders</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">Order history</td>
                        <td className="p-2.5">Tracking, returns, disputes, and customer reference (retained 24 months)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">Location (optional)</td>
                        <td className="p-2.5">Showing shops near you; completely optional and toggled in device settings</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold">Device, IP and logs</td>
                        <td className="p-2.5">Security, fraud prevention, diagnostic performance (retained 12 months)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-stone-500">
                  <strong>Payment Information:</strong> Payments are made directly to the retailer. ShopIQ does not collect or store your payment card numbers, UPI PINs, or bank account credentials.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">3. Information shared with retailers</h3>
                <div className="rounded-xl border border-outline bg-stone-50 p-4 space-y-2">
                  <p className="font-semibold text-stone-900">
                    When you place an order, we share only what is reasonably necessary to fulfill it:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-stone-600 text-xs">
                    <li>Your name</li>
                    <li>Your phone number</li>
                    <li>Your delivery address</li>
                    <li>The items and quantities ordered</li>
                  </ul>
                  <p className="text-xs text-stone-600">
                    <strong>The retailer acts as an independent Data Fiduciary</strong> under the DPDP Act for order
                    fulfillment, invoicing, returns, and delivery. Browsing a store does not share any personal details.
                  </p>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">4. Sensitive personal data (SPDI Rules 2011)</h3>
                <p>
                  Under the Information Technology (SPDI) Rules, 2011, passwords and financial details are sensitive. The
                  only category we hold is your password, stored in <strong>one-way hashed form (bcrypt)</strong> which is
                  never visible to us or our staff. We do not store financial credentials or biometric data.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">5. Security & Data Retention</h3>
                <p>
                  We protect your information using TLS/HTTPS encryption in transit, encryption at rest, isolated database
                  workspaces, and strict internal access controls.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
                  <li>Account information: Retained while account is active.</li>
                  <li>Order history: Retained for 24 months to support statutory warranty and dispute requirements.</li>
                  <li>Security and audit logs: Retained for 12 months.</li>
                  <li>Account closure: Registration records preserved for 180 days pursuant to IT Rules 2021 before permanent deletion.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">6. Your rights under DPDP Act, 2023</h3>
                <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700">
                  <li><strong>Access:</strong> Request a summary of personal information we process about you.</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                  <li><strong>Deletion:</strong> Request erasure of your account and personal information.</li>
                  <li><strong>Withdrawal:</strong> Easily withdraw consent for location or optional notifications at any time.</li>
                  <li><strong>Nomination:</strong> Nominate an individual to exercise your rights in case of death or incapacity.</li>
                </ul>
                <p className="text-xs text-stone-600">
                  To exercise rights, email our Grievance Officer at{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-semibold hover:underline">
                    {SUPPORT_EMAIL}
                  </a>
                  . We will respond within the timelines required by Indian law.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">7. Grievance Officer</h3>
                <div className="rounded-xl border border-outline bg-stone-50 p-4 text-xs space-y-1">
                  <p><strong>Grievance Officer:</strong> {GRIEVANCE_OFFICER.name}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${GRIEVANCE_OFFICER.email}`} className="text-primary hover:underline">{GRIEVANCE_OFFICER.email}</a></p>
                  <p><strong>Phone:</strong> {GRIEVANCE_OFFICER.phone}</p>
                  <p><strong>Address:</strong> {GRIEVANCE_OFFICER.address}</p>
                </div>
              </section>
            </article>
          )}

          {/* TAB 3: InventQ Retailer Terms of Service */}
          {activeTab === "retailer-terms" && (
            <article className="space-y-6">
              <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-4 text-xs text-stone-700">
                <p className="font-semibold text-primary-dark">DOCUMENT 1 — InventQ Terms of Service (Retailer Application)</p>
                <p className="mt-1">
                  Governs merchants and retailers using InventQ for business management, invoicing, inventory, and Digital Store publication.
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">1. About these terms</h3>
                <p>
                  These Terms of Service govern your use of <strong>InventQ</strong>, a retail business management platform with its registered office at {REGISTERED_ADDRESS}. InventQ is provided to businesses. By creating an account, you confirm that you are at least 18 years old and authorized to accept these terms on behalf of your business.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">2. What InventQ provides</h3>
                <p>
                  Billing and GST-ready invoicing, inventory and stock management, purchase and supplier records, customer accounts, business analytics, and an optional online Digital Store through which customers can view your catalog and place orders.
                </p>
                <p className="font-semibold text-stone-900">
                  Platform role: InventQ is a software and technology platform. You remain the seller of record and responsible for your products, prices, taxes, invoices, customers, fulfillment, and legal compliance.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">3. Digital Store — Retailer as Seller of Record</h3>
                <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
                  <li><strong>Seller of Record:</strong> For every order placed through your Digital Store, you are the seller. InventQ does not hold or own your goods.</li>
                  <li><strong>Sole Responsibility:</strong> You are solely responsible for product descriptions, pricing, MRP accuracy, FSSAI/drug category compliance, order fulfillment, returns, refunds, and GST invoicing.</li>
                  <li><strong>Direct Settlement:</strong> Orders are settled directly between you and your customer (cash on delivery, UPI to your account, etc.). InventQ does not collect or hold transaction funds.</li>
                  <li><strong>Zero Commission:</strong> InventQ charges 0% commission on orders placed through your Digital Store.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">4. Retailer Contact & Support</h3>
                <p className="text-xs">
                  Email: <a href="mailto:supportinventq@gmail.com" className="text-primary hover:underline">supportinventq@gmail.com</a> · Grievance Officer: {GRIEVANCE_OFFICER.name} ({GRIEVANCE_OFFICER.phone})
                </p>
              </section>
            </article>
          )}

          {/* TAB 4: InventQ Retailer Privacy Policy */}
          {activeTab === "retailer-privacy" && (
            <article className="space-y-6">
              <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-4 text-xs text-stone-700">
                <p className="font-semibold text-primary-dark">DOCUMENT 2 — InventQ Privacy Policy (Retailer Application)</p>
                <p className="mt-1">
                  Explains how InventQ collects and handles retailer business information, staff accounts, security, and customer data processing.
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">1. Data Roles</h3>
                <p>
                  InventQ acts as a <strong>Data Fiduciary</strong> for retailer account administration, subscription billing, audit security, and platform analytics.
                </p>
                <p>
                  Where a retailer enters personal data about its own customers into InventQ solely for business management, the retailer acts as the <strong>Data Fiduciary</strong> and InventQ acts as a <strong>Data Processor</strong>.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">2. We Never Sell Your Data</h3>
                <p>
                  We do not sell your personal information or your business data, and we do not share your business data with other competing retailers. Data is stored on secure servers located in India.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-lg font-bold text-ink">3. Retailer Grievances</h3>
                <p className="text-xs">
                  Contact Grievance Officer: {GRIEVANCE_OFFICER.name} at{" "}
                  <a href="mailto:supportinventq@gmail.com" className="text-primary hover:underline">
                    supportinventq@gmail.com
                  </a>{" "}
                  ({GRIEVANCE_OFFICER.phone}, {REGISTERED_ADDRESS}). Complaints are acknowledged within 24 hours.
                </p>
              </section>
            </article>
          )}
        </div>

        {/* Modal Footer with Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-outline bg-stone-50 px-6 py-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <Building size={14} className="text-primary" />
            <span>Operated by {COMPANY_NAME} · Registered in Madurai, India</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
