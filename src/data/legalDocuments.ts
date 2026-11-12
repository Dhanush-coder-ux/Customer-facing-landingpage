import {
  COMPANY_NAME,
  REGISTERED_ADDRESS,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  RETAILER_SUPPORT_EMAIL,
  GRIEVANCE_OFFICER,
  HELPLINE_NUMBER,
  GAC_PORTAL,
} from "../constants";

export type LegalDocType = "terms" | "privacy" | "retailer-terms" | "retailer-privacy" | null;

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: string[];
  subsections?: {
    id: string;
    number: string;
    title: string;
    content: string[];
    list?: string[];
  }[];
  list?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  highlightBox?: {
    title: string;
    text?: string;
    list?: string[];
  };
}

export interface LegalDocument {
  id: string;
  title: string;
  subtitle: string;
  audience: string;
  version: string;
  effectiveDate: string;
  frameworkBadge: string;
  description: string;
  sections: LegalSection[];
}

export const SHOPIQ_TERMS: LegalDocument = {
  id: "terms",
  title: "ShopiQ Terms of Use",
  subtitle: "ShopiQ application & website",
  audience: "ShopiQ App Users",
  version: "Version 2.1",
  effectiveDate: "7 October 2026",
  frameworkBadge:
    "Consumer Protection Act, 2019 · Consumer Protection (E-Commerce) Rules, 2020 (as amended 2026) · Information Technology Act, 2000 & Intermediary Guidelines, 2021 · Digital Personal Data Protection Act, 2023",
  description:
    "These Terms of Use govern your use of the ShopiQ mobile application and website, operated by InventQ. Please read them carefully before creating an account or placing an order.",
  sections: [
    {
      id: "about",
      number: "1",
      title: "About these terms",
      content: [
        `These Terms of Use govern your use of the ShopiQ mobile application and website, operated by ${COMPANY_NAME} with its registered office at ${REGISTERED_ADDRESS}.`,
        "By creating an account or placing an order through ShopiQ, you agree to these terms.",
      ],
    },
    {
      id: "platform-role",
      number: "2",
      title: "What we are — and what we are not",
      content: [
        "ShopiQ is a technology platform that allows local retailers to display their products and receive orders from customers.",
        "We facilitate communication and ordering between you and the retailer, but we do not become a party to the underlying sale of goods unless expressly stated for a particular transaction or service.",
        "The seller's business name, registered address, customer-care contact number, and GSTIN (where applicable) are clearly displayed on every store page, product page, order confirmation, and invoice.",
      ],
      highlightBox: {
        title: "We are not the seller. For every order you place:",
        list: [
          "The retailer is the seller of the goods.",
          "The retailer owns and holds the goods; we never take possession of them at any stage.",
          "The retailer is solely responsible for the product, its quality, its safety, its delivery, and any return or refund.",
          "We provide only the technology platform through which the order is placed.",
        ],
      },
    },
    {
      id: "disclosures",
      number: "3",
      title: "Platform disclosures",
      content: [
        `ShopiQ is operated by ${COMPANY_NAME}. We provide the technology platform connecting consumers with independent retailers. Each retailer remains responsible for the products and services it offers.`,
        "Information about the relevant retailer — including its business name, address, and customer-care details — is displayed through the platform as required by applicable law.",
      ],
      table: {
        headers: ["Platform Parameter", "Statutory Declaration"],
        rows: [
          ["Platform Operator Legal Name", COMPANY_NAME],
          ["Registered Office Address", REGISTERED_ADDRESS],
          ["Customer Support Contact", `${SUPPORT_EMAIL} · ${SUPPORT_PHONE}`],
          ["Statutory Grievance Officer", `${GRIEVANCE_OFFICER.name} (${GRIEVANCE_OFFICER.email} · ${GRIEVANCE_OFFICER.phone})`],
        ],
      },
    },
    {
      id: "account",
      number: "4",
      title: "Your account",
      content: [
        "To maintain platform security, accountability, and seamless order fulfillment, the following account requirements apply:",
      ],
      list: [
        "You must be at least 18 years old to create an account and place orders.",
        "You must provide accurate and verifiable details, including a valid phone number and delivery address.",
        "You are responsible for all activity conducted under your account.",
        "One person should maintain only one account.",
      ],
    },
    {
      id: "placing-order",
      number: "5",
      title: "Placing an order",
      content: [
        "Product listings, prices, availability, and images are provided directly by the independent retailer.",
        "Placing an order constitutes an offer to buy. A contract of sale is formed directly between you and the retailer when the retailer accepts your order.",
        "The retailer is responsible for accepting, preparing, supplying, and, where applicable, delivering the order.",
        "The retailer may decline or cancel an order — for example, if an item is out of stock — and will inform you promptly.",
        "Price and charges: The price payable by you, applicable taxes, delivery charges, and any other mandatory charges will be clearly displayed before you confirm an order. There are zero hidden charges added after order confirmation.",
        "Product information: Product information is supplied by the retailer. Retailers are responsible for ensuring that descriptions, images, prices, availability, claims, expiry or best-before information, country-of-origin information, and other mandatory statutory disclosures are accurate and current.",
        "Discounts and offers: Retailers are responsible for the accuracy and legality of discounts, offers, and price comparisons displayed for their products. Where applicable law requires a prior price to be displayed alongside a price reduction, that information will be shown.",
      ],
    },
    {
      id: "payment",
      number: "6",
      title: "Payment",
      content: [
        "Payment is made directly to the retailer, by Cash on Delivery (COD), by UPI directly to the merchant's account, or by another payment method the retailer offers.",
        "We do not collect, hold, or process payments for your orders, and we do not act as a payment intermediary between you and the retailer.",
        "Any dispute regarding payment must be resolved directly with the retailer, although you may raise a grievance with us under Section 12 if it is not resolved.",
      ],
    },
    {
      id: "returns",
      number: "7",
      title: "Returns, refunds and cancellations",
      content: [
        "The return, exchange, cancellation, and refund terms applicable to your order are displayed by the retailer before you purchase and form part of your order record. The version shown at the time you placed the order is the version that applies.",
        "Retailers must comply with their published policy and with mandatory consumer rights under applicable law. A retailer policy cannot exclude or restrict a right or remedy that cannot lawfully be excluded.",
        "Where applicable law requires a retailer to accept a return or provide a refund — for example, for goods that are defective, deficient, spurious, or not as described — the retailer remains legally responsible for providing that remedy.",
        "Cancellation charges, where legally permitted, will be disclosed before the order is confirmed. Nothing in these terms authorises a cancellation charge that is prohibited by applicable law.",
        "We may assist with communication or status tracking, but this does not replace the retailer's legal responsibility for the sale.",
      ],
    },
    {
      id: "delivery",
      number: "8",
      title: "Delivery",
      content: [
        "Delivery or pickup arrangements, timelines, and charges are set by the retailer, and are shown before you confirm your order.",
        "The retailer is responsible for the accuracy of the stated delivery or pickup information and for fulfilling accepted orders within the stated timeframe, subject to circumstances outside its reasonable control.",
        "Where third-party delivery providers are used, delivery may also be subject to the terms and operational limitations of those providers.",
        "Where an order is delayed, lost, damaged, or otherwise affected during delivery, responsibility depends on the applicable transaction, the retailer's arrangements, and applicable law.",
        "We do not deliver goods ourselves and do not guarantee delivery times.",
      ],
    },
    {
      id: "search",
      number: "9",
      title: "Search results and sponsored listings",
      content: [
        "Search results and store or product recommendations may be determined using factors including relevance to your search query, availability, your location, product information, retailer performance, customer ratings, and other operational factors.",
        "Where a product or store placement is sponsored or promoted, we will identify it clearly and prominently.",
        "We may adjust ranking or recommendation methods from time to time in accordance with applicable e-commerce transparency guidelines.",
      ],
    },
    {
      id: "conduct",
      number: "10",
      title: "Your conduct and prohibited content",
      content: [
        "You agree not to place fraudulent, fake, or abusive orders; misuse contact details obtained through the platform; attempt to disrupt or gain unauthorised access to the platform; or use the platform for any unlawful purpose.",
      ],
      subsections: [
        {
          id: "prohibited-content",
          number: "10.1",
          title: "Content you must not host, display, upload, publish or share",
          content: [
            "Under Rule 3(1)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, you must not use the platform to host, display, upload, modify, publish, transmit, store, update or share any information that:",
          ],
          list: [
            "1. Belongs to another person and to which you do not have any right;",
            "2. Is obscene, pornographic, paedophilic, invasive of another's privacy including bodily privacy, insulting or harassing on the basis of gender, racially or ethnically objectionable, or otherwise inconsistent with or contrary to the laws in force;",
            "3. Is harmful to a child;",
            "4. Infringes any patent, trademark, copyright or other proprietary right;",
            "5. Deceives or misleads the recipient about the origin of the message, or knowingly and intentionally communicates any misinformation or information which is patently false or misleading in nature;",
            "6. Impersonates another person;",
            "7. Threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign States, or public order, or causes incitement to the commission of any cognisable offence, or prevents investigation of any offence, or is insulting to any foreign State;",
            "8. Contains a software virus or any other computer code, file or program designed to interrupt, destroy or limit the functionality of any computer resource;",
            "9. Violates any law for the time being in force;",
            "10. Is patently false and untrue, and is written or published in any form with the intent to mislead or harass a person, entity or agency for financial gain or to cause any injury to any person.",
          ],
        },
        {
          id: "reporting-content",
          number: "10.2",
          title: "Reporting content and statutory response timelines",
          content: [
            `To report content on the platform, contact ${SUPPORT_EMAIL}. We will acknowledge your report within 24 hours and dispose of it within 15 days.`,
            "Complaints regarding content that is obscene, that depicts a person in a state of nudity or in a sexual act, or that is artificially morphed to depict a person in such a manner, will be acted upon within 24 hours of receipt.",
            "Where we receive an order from a court of competent jurisdiction or a notification from an appropriate government agency requiring content removal, we will act within 36 hours.",
            "Where we remove or disable access to content, we will preserve the information and associated records for 180 days for investigation purposes, or longer if required by law, court, or authorised agency.",
          ],
        },
      ],
    },
    {
      id: "reviews",
      number: "11",
      title: "Reviews and user content",
      content: [
        "You may submit reviews, ratings, photographs, or other feedback where the platform provides that functionality.",
        "Your content must be truthful and based on your genuine purchasing experience, and must not contain unlawful, defamatory, threatening, abusive, discriminatory, obscene, misleading, or infringing material.",
        "You must not post another person's personal information without a lawful basis or permission, impersonate another person, manipulate ratings, post fake reviews, or submit reviews in exchange for undisclosed incentives.",
        `You grant ${COMPANY_NAME} a non-exclusive, worldwide, royalty-free licence to host, reproduce, display, format, and distribute your submitted content as necessary to operate and improve the platform.`,
        "We may remove, restrict, or moderate content that we reasonably believe violates applicable law, these terms, or our platform policies.",
      ],
    },
    {
      id: "grievance",
      number: "12",
      title: "Complaints and grievance redressal",
      content: [
        "Step 1 — Contact the retailer: For anything relating to your order, product specifications, delivery timeline, returns, or refunds, contact the seller directly using the details shown on your order receipt. They are the seller of record and best positioned to assist.",
        "Step 2 — Contact us: If the retailer does not respond within 48 hours, or the matter is not resolved satisfactorily, contact our statutory Grievance Officer:",
      ],
      table: {
        headers: ["Nature of Grievance", "Acknowledgment", "Statutory Resolution Limit"],
        rows: [
          ["Platform conduct or content on platform", "Within 24 hours", "Within 15 days"],
          ["Order, product, delivery, return or refund", "Within 24 hours", "Within 1 month"],
          ["Content showing nudity, sexual acts, or morphed imagery", "Immediate intake", "Within 24 hours"],
          ["Order from Court or Government agency", "Immediate intake", "Within 36 hours"],
        ],
      },
      highlightBox: {
        title: "Statutory Escalation & Consumer Rights",
        text: `When you submit a grievance, you will be issued a unique complaint/ticket number and an official copy of the complaint record. If your complaint concerns platform content and you are not satisfied with our decision, you may appeal to the Grievance Appellate Committee (${GAC_PORTAL}) within 30 days. You may also contact the National Consumer Helpline at ${HELPLINE_NUMBER} or approach your local Consumer Dispute Redressal Commission at any time.`,
      },
    },
    {
      id: "ip",
      number: "13",
      title: "Intellectual property",
      content: [
        `The ShopiQ platform, its software, algorithms, user interface design, and trademarks belong exclusively to ${COMPANY_NAME}.`,
        "Product names, images, catalog descriptions, and brand logos shown in store showcases belong to the respective retailers or brand owners.",
      ],
    },
    {
      id: "liability",
      number: "14",
      title: "Limitation of liability",
      content: [
        "To the maximum extent permitted by applicable law, we will not be liable for indirect, incidental, special, or consequential losses arising from your use of the platform.",
        `We are not responsible for the acts or omissions of an independent retailer, including the quality, safety, legality, authenticity, availability, description, pricing, fulfillment, delivery, warranty, return, or refund of that retailer's products, except to the extent responsibility is expressly imposed on marketplace entities by applicable law.`,
        "Nothing in these terms excludes, restricts, or limits any statutory liability, right, or remedy that cannot lawfully be excluded or limited, including all consumer rights protected under the Consumer Protection Act, 2019.",
      ],
    },
    {
      id: "changes",
      number: "15",
      title: "Changes to these terms & account closure",
      content: [
        "We may update these terms from time to time. Material changes will be notified in the app before they take effect. Continued use of ShopiQ after that date constitutes your acceptance.",
        "Annual notification: At least once every year, we will inform you of these terms, our Privacy Policy, and any changes made to them, as required under applicable Indian intermediary rules.",
        "If you close your account, we will retain your registration information for 180 days afterwards, as required under Rule 3(1)(h) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, after which it will be securely deleted, except where a longer retention period is mandated by law.",
      ],
    },
    {
      id: "governing-law",
      number: "16",
      title: "Governing law",
      content: [
        "These terms are governed by and construed in accordance with the laws of the Republic of India.",
      ],
    },
  ],
};

export const SHOPIQ_PRIVACY: LegalDocument = {
  id: "privacy",
  title: "ShopiQ Privacy Policy",
  subtitle: "ShopiQ application & website",
  audience: "ShopiQ App Users",
  version: "Version 2.1",
  effectiveDate: "7 October 2026",
  frameworkBadge:
    "Digital Personal Data Protection Act, 2023 · Information Technology Act, 2000 & SPDI Rules, 2011 · IT Intermediary Guidelines, 2021",
  description:
    "This Privacy Policy explains what personal information ShopiQ collects when you use the app and website, how we use and protect it, what is shared with retailers you purchase from, and your statutory data protection rights.",
  sections: [
    {
      id: "intro",
      number: "1",
      title: "Introduction",
      content: [
        `This policy explains what personal information ShopiQ collects when you use our mobile application and website, how we use it, and your statutory rights. The platform is operated by ${COMPANY_NAME}.`,
        "Please read Section 5 carefully — it explains what information is shared with the local retailers you buy from when you place an order.",
      ],
    },
    {
      id: "what-we-collect",
      number: "2",
      title: "What we collect and why",
      content: [
        "We collect only the information necessary to provide our store discovery, live availability, and order transmission services:",
      ],
      table: {
        headers: ["Personal Data Category", "Specific Lawful Purpose"],
        rows: [
          ["Name", "Creating your account, addressing you, order fulfillment, delivery identification"],
          ["Mobile number", "Signing you in via OTP, order notifications, retailer fulfillment contact"],
          ["Email address (optional)", "Account notices, digital receipts, support replies, opt-in marketing"],
          ["Password", "Securing your account — stored in irreversible hashed form (bcrypt), never visible to us"],
          ["Delivery address", "Delivering your order to your chosen physical address"],
          ["Order history", "Order tracking, returns, dispute resolution, customer reference (retained 24 months)"],
          ["Location (optional)", "Showing verified local stores near you and distance calculation (optional)"],
          ["Device, IP & logs", "Security verification, fraud prevention, diagnostic telemetry (retained 12 months)"],
          ["Reviews & photos", "Public display on store and product pages, and platform moderation"],
          ["Support messages", "Answering inquiries, grievance redressal, and dispute resolution"],
        ],
      },
      highlightBox: {
        title: "Payment Information & Location Privacy",
        list: [
          "Payment Information: Payments are made directly to the retailer. ShopiQ does not collect, process, or store your debit/credit card numbers, UPI PINs, or bank account credentials.",
          "Location Information: Location access may be precise or approximate depending on the permission you grant. It is used strictly to display shops near you and confirm delivery coverage. Location access is 100% optional — the app works without it, and you can revoke it at any time in your device settings.",
        ],
      },
    },
    {
      id: "legal-bases",
      number: "3",
      title: "How we determine the purposes for processing",
      content: [
        "In accordance with the Digital Personal Data Protection Act, 2023, we process personal data under clear lawful grounds:",
      ],
      list: [
        "To provide a service you have requested: Creating and administering your account, displaying catalogs, and transmitting orders to retailers.",
        "With your consent: Where consent is required under applicable law — for example, marketing communications or device location permissions.",
        "To comply with legal obligations: Tax records, consumer grievance resolution, and statutory law enforcement disclosures.",
        "For security and fraud prevention: Protecting our services, preventing abusive or fraudulent accounts, and ensuring platform integrity.",
      ],
    },
    {
      id: "how-we-use",
      number: "4",
      title: "How we use your information",
      content: [
        "We use collected information strictly for transparent operational purposes:",
        "• To create and manage your account credentials securely.",
        "• To transmit your orders to independent retailers and provide real-time order status updates.",
        "• To show you verified shops, catalogs, and products nearby.",
        "• To respond to your customer support requests and statutory grievances.",
        "• To send essential notices regarding your orders, security alerts, and terms updates.",
        "• To prevent fraud, abusive bot actions, and platform misuse.",
        "• To improve the application using aggregated and de-identified telemetry.",
        "• To comply with statutory obligations under Indian e-commerce and intermediary law.",
      ],
      highlightBox: {
        title: "Zero Data Sale Commitment",
        text: "We do not sell, rent, or trade your personal information to third-party data brokers or advertisers under any circumstances.",
      },
    },
    {
      id: "retailer-sharing",
      number: "5",
      title: "Information shared with retailers",
      content: [
        "When you place an order, we provide the retailer with the personal information reasonably necessary to fulfill and administer that order:",
      ],
      list: [
        "Your name",
        "Your contact phone number",
        "Your delivery address",
        "The items, variants, and quantities ordered",
      ],
      highlightBox: {
        title: "Retailer as an Independent Data Fiduciary",
        text: `The retailer needs this information to prepare, package, and deliver your order, and to communicate with you regarding delivery or returns. The retailer acts as an independent Data Fiduciary under the Digital Personal Data Protection Act, 2023 for their own processing of that information. We share your details only with retailers you actually place an order with. Browsing a store or checking stock does NOT share any personal information.`,
      },
    },
    {
      id: "other-sharing",
      number: "6",
      title: "Other sharing and cross-border transfers",
      content: [
        "We share personal data with trusted technical service providers who assist in operating our infrastructure (cloud hosting, database clusters, SMS/OTP gateways, and crash diagnostic tools). All providers are bound by strict contractual confidentiality and security commitments.",
        "Cross-border processing: Some cloud service providers may process data outside India. Where this occurs, it is conducted in full compliance with the Digital Personal Data Protection Act, 2023, utilizing appropriate contractual, organizational, and technical safeguards.",
        "Legal disclosures: We may disclose personal data where required by a valid order of a court, law enforcement agency, or statutory government authority under Indian law.",
      ],
    },
    {
      id: "communications",
      number: "7",
      title: "Communications and notifications",
      content: [
        "We may send you notifications via Push, SMS, WhatsApp, or email depending on your account preferences:",
        "Transactional communications: Order confirmations, dispatch notifications, security OTPs, and important account notices. These cannot be disabled because they are essential to order fulfillment.",
        "Marketing communications: Promotional updates or new store announcements are sent only where you have explicitly opted in. You can withdraw consent at any time via in-app settings or the unsubscribe link.",
      ],
    },
    {
      id: "reviews-policy",
      number: "8",
      title: "Reviews and public feedback",
      content: [
        "Reviews and photos you post are public and display your chosen display name alongside your rating.",
        "Do not include sensitive personal details, full phone numbers, or private information in review text.",
      ],
    },
    {
      id: "spdi",
      number: "8A",
      title: "Sensitive personal data (SPDI Rules, 2011)",
      content: [
        "Under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, sensitive information includes passwords, financial details, health records, and biometric data.",
        "The only sensitive personal category held by ShopiQ is your password, which is stored in irreversible one-way hashed form (bcrypt) and is never visible or readable by our staff or systems.",
        "We do not collect or store credit/debit card numbers, UPI credentials, bank details, health records, or biometric data.",
      ],
    },
    {
      id: "security",
      number: "9",
      title: "Security practices and procedures",
      content: [
        "We protect personal data through documented reasonable security practices:",
        "• Transport Layer Security (TLS 1.3 / HTTPS) encryption for all data in transit.",
        "• AES-256 encryption for sensitive data at rest and isolated database storage.",
        "• Irreversible password hashing using industry-standard bcrypt with per-user salt.",
        "• Strict role-based internal access controls with automated audit logging.",
        "• Automated session expiry and token rotation.",
      ],
    },
    {
      id: "breaches",
      number: "10",
      title: "Personal data breaches",
      content: [
        "We maintain documented incident response procedures for detecting, assessing, containing, investigating, and remediating personal data breaches.",
        "Where required by the Digital Personal Data Protection Act, 2023 or CERT-In directions, we will notify the Data Protection Board of India and affected users within the prescribed statutory timeframes and in the prescribed manner.",
      ],
    },
    {
      id: "user-rights",
      number: "11",
      title: "Your statutory rights under DPDP Act, 2023",
      content: [
        "Subject to Indian data protection law, you have the following enforceable rights:",
      ],
      list: [
        "Right to Access: Request a summary of personal data processed about you and the processing activities undertaken.",
        "Right to Correction: Request correction of inaccurate, misleading, or incomplete personal data.",
        "Right to Erasure / Deletion: Request the erasure of personal data that is no longer necessary for the purpose it was collected.",
        "Right to Withdraw Consent: Easily withdraw consent for optional processing (e.g., location access, promotional messages) at any time.",
        "Right of Grievance Redressal: Redressal of any data-protection grievances through our Grievance Officer and the Data Protection Board.",
        "Right to Nominate: Nominate another individual to exercise your data rights in the event of death or incapacity.",
      ],
      highlightBox: {
        title: "How to Exercise Your Rights",
        text: `To exercise any of your statutory rights, email ${SUPPORT_EMAIL}. We will verify your identity and respond within statutory timeframes. If your request concerns records held independently by a retailer (such as historical invoices held for tax compliance), we will direct you to the specific merchant and assist you in submitting your request.`,
      },
    },
    {
      id: "retention",
      number: "12",
      title: "Data retention schedule",
      content: [
        "We retain personal data only for as long as necessary to fulfill the purposes set out in this policy:",
      ],
      table: {
        headers: ["Data Category", "Retention Period", "Statutory Rationale"],
        rows: [
          ["Account Profile Data", "Duration of active account", "Service provision & authentication"],
          ["Order History", "24 months", "Warranty claims, disputes, consumer protection records"],
          ["Security & Audit Logs", "12 months", "Fraud detection, incident investigation, CERT-In compliance"],
          ["Closed Account Records", "180 days post-closure", "Mandatory requirement under Rule 3(1)(h) IT Rules 2021"],
          ["Removed Content Records", "180 days post-removal", "Preservation for investigation under IT Rules 2021"],
        ],
      },
    },
    {
      id: "children",
      number: "13",
      title: "Children's privacy",
      content: [
        "ShopiQ is strictly intended for individuals aged 18 and above. You are required to confirm your age when creating an account.",
        "We do not knowingly collect personal data from minors. If we discover an account has been registered by a person under 18, we will suspend the account and delete the associated personal data immediately.",
      ],
    },
    {
      id: "cookies",
      number: "14",
      title: "Cookies and mobile telemetry",
      content: [
        "On our website, we use necessary session cookies for security and authentication, and privacy-respecting analytics.",
        "In our mobile application, we use secure device identifiers, local tokens, and crash reporting SDKs solely for security, diagnostic stability, and service notifications.",
        "You can manage cookies in your browser settings and permissions in your mobile operating system settings.",
      ],
    },
    {
      id: "grievance-privacy",
      number: "15",
      title: "Data protection Grievance Officer",
      content: [
        "For any question, concern, or grievance regarding your personal information, contact our designated Grievance Officer:",
      ],
      table: {
        headers: ["Grievance Officer Designation", "Contact Details"],
        rows: [
          ["Name", GRIEVANCE_OFFICER.name],
          ["Email", GRIEVANCE_OFFICER.email],
          ["Phone", GRIEVANCE_OFFICER.phone],
          ["Registered Address", GRIEVANCE_OFFICER.address],
          ["Acknowledgment Timeline", "Within 24 hours"],
          ["Resolution Timeline", "Within 15 days (platform/content) / 30 days (general)"],
        ],
      },
    },
    {
      id: "changes-privacy",
      number: "16",
      title: "Changes to this policy",
      content: [
        "We may update this Privacy Policy from time to time. Material changes will be communicated via in-app notification before they take effect.",
        "At least once every year, we will remind you of this policy and of any changes made to it, as required under Indian intermediary regulations.",
      ],
    },
  ],
};

export const RETAILER_TERMS: LegalDocument = {
  id: "retailer-terms",
  title: "InventQ Terms of Service",
  subtitle: "Retailer application & merchant services",
  audience: "Retailers & Merchants",
  version: "Version 2.1",
  effectiveDate: "7 October 2026",
  frameworkBadge:
    "Information Technology Act, 2000 · Consumer Protection (E-Commerce) Rules, 2020 · Legal Metrology Act, 2009 · GST Framework",
  description:
    "These Terms of Service govern merchants and businesses using InventQ for business management, billing, inventory control, and Digital Store marketplace publication.",
  sections: [
    {
      id: "retailer-about",
      number: "1",
      title: "About these terms",
      content: [
        `These Terms of Service govern your use of InventQ, a business management platform with its registered office at ${REGISTERED_ADDRESS}.`,
        "InventQ is provided exclusively to businesses. By creating an account, you confirm that you are at least 18 years old and authorised to accept these terms on behalf of your business.",
      ],
    },
    {
      id: "retailer-provides",
      number: "2",
      title: "What InventQ provides",
      content: [
        "InventQ provides retail business software, including billing and GST-ready invoicing, inventory and stock management, purchase and supplier records, customer accounts, business analytics, and an optional online Digital Store through which customers can view your catalog and place orders.",
        "Platform role: InventQ is a software and technology platform. You remain the seller of record and responsible for your products, prices, taxes, invoices, customers, fulfillment, and legal compliance.",
      ],
    },
    {
      id: "retailer-seller-record",
      number: "3",
      title: "The Digital Store — Retailer responsibilities as seller",
      content: [
        "You are the Seller of Record: For every order placed through your Digital Store, you are the seller. InventQ is the technology platform only. InventQ does not own, sell, hold, or take possession of your goods at any stage, and is not a party to the contract of sale between you and your customer.",
        "Sole Responsibility: You are solely responsible for product descriptions, images, pricing accuracy, MRP compliance, fulfillment, delivery, returns, refunds, GST invoicing, and responding to customer inquiries.",
        "Seller Disclosures: Your store cannot be published until you provide your business name, address, customer-care phone number, GSTIN (if applicable), return/refund policy, and delivery/pickup terms.",
        "Direct Payments: Orders are settled directly between you and your customer (Cash on Delivery, UPI to your account, etc.). InventQ does not collect, hold, or settle transaction funds on your behalf.",
        "Zero Commission: InventQ charges 0% commission on orders placed through your Digital Store.",
      ],
    },
    {
      id: "retailer-acceptable-use",
      number: "4",
      title: "Acceptable use and regulatory compliance",
      content: [
        "You must operate your business and use InventQ in compliance with all applicable laws, including GST, consumer protection, legal metrology, food safety (FSSAI), drug regulations, product safety, and the Information Technology Act, 2000.",
        "You must not list, advertise, or sell any prohibited goods or products for which you do not hold the required statutory licence.",
      ],
    },
    {
      id: "retailer-contact",
      number: "5",
      title: "Retailer support and Grievance Officer",
      content: [
        `Retailer support: ${RETAILER_SUPPORT_EMAIL}`,
        `Grievance Officer: ${GRIEVANCE_OFFICER.name} (${RETAILER_SUPPORT_EMAIL} · ${GRIEVANCE_OFFICER.phone} · ${REGISTERED_ADDRESS})`,
        "Complaints regarding intellectual property or platform conduct are acknowledged within 24 hours and disposed within 15 days.",
      ],
    },
  ],
};

export const RETAILER_PRIVACY: LegalDocument = {
  id: "retailer-privacy",
  title: "InventQ Privacy Policy",
  subtitle: "Retailer application & merchant data",
  audience: "Retailers & Merchants",
  version: "Version 2.1",
  effectiveDate: "7 October 2026",
  frameworkBadge:
    "Digital Personal Data Protection Act, 2023 · Information Technology (SPDI) Rules, 2011",
  description:
    "Explains how InventQ handles retailer business data, staff user accounts, security safeguards, and data processing roles.",
  sections: [
    {
      id: "retailer-roles",
      number: "1",
      title: "Data roles under DPDP Act, 2023",
      content: [
        "Where InventQ determines the purposes of processing relating to retailer accounts, billing, security, analytics, and platform operation, InventQ acts as the Data Fiduciary.",
        "Where a retailer enters personal data about its own customers into InventQ solely for business management, the retailer acts as the Data Fiduciary and InventQ processes that data as a Data Processor on the retailer's instructions.",
      ],
    },
    {
      id: "retailer-data-ownership",
      number: "2",
      title: "You own your business data",
      content: [
        "You retain all ownership rights to the business data you enter into InventQ.",
        "We do not sell your personal information or your business data. We do not share your business data with other competing retailers.",
        "Your data is stored securely on servers located in India with encryption in transit and at rest.",
      ],
    },
    {
      id: "retailer-spdi",
      number: "3",
      title: "Sensitive data & security",
      content: [
        "Passwords are stored in one-way hashed format and are never visible to our staff.",
        "Workspace isolation ensures no merchant can ever access another merchant's catalog, sales, or customer data.",
      ],
    },
    {
      id: "retailer-privacy-contact",
      number: "4",
      title: "Grievance Officer for retailers",
      content: [
        `Grievance Officer: ${GRIEVANCE_OFFICER.name}`,
        `Email: ${RETAILER_SUPPORT_EMAIL}`,
        `Phone: ${GRIEVANCE_OFFICER.phone}`,
        `Address: ${REGISTERED_ADDRESS}`,
        "Complaints are acknowledged within 24 hours and resolved within statutory timeframes.",
      ],
    },
  ],
};

export const ALL_LEGAL_DOCS: Record<string, LegalDocument> = {
  terms: SHOPIQ_TERMS,
  privacy: SHOPIQ_PRIVACY,
  "retailer-terms": RETAILER_TERMS,
  "retailer-privacy": RETAILER_PRIVACY,
};
