export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Threat", href: "#threat" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#cta" },
] as const;

export const HERO = {
  headline: "QUANTUM",
  sublines: [
    "> Initializing post-quantum encryption protocols...",
    "> Lattice-based key exchange: ACTIVE",
    "> Threat level: CRITICAL — Harvest Now, Decrypt Later",
    "> Quantum-safe migration: READY",
  ],
  cta1: { label: "Start Migration", href: "#cta" },
  cta2: { label: "View Algorithms", href: "#technology" },
};

export const ABOUT = {
  heading: "Post-Quantum Cryptography",
  subheading: "Securing the future against quantum threats",
  paragraphs: [
    "Quantum computers will break RSA, ECC, and every classical encryption algorithm your organization relies on. This isn't theoretical—it's an engineering timeline. NIST has already standardized the replacements.",
    "Post-quantum cryptography (PQC) uses mathematical problems that remain hard even for quantum computers: structured lattices, hash-based signatures, and multivariate equations. We implement these standards before the threat arrives.",
  ],
  stat: { value: "2030", label: "Estimated year quantum computers break RSA-2048" },
};

export const SERVICES = [
  {
    title: "PQC Migration",
    description: "End-to-end migration of your cryptographic infrastructure to NIST-standardized post-quantum algorithms. Zero downtime, full audit trail.",
    icon: "shield",
  },
  {
    title: "Lattice-Based Encryption",
    description: "Implementation of CRYSTALS-Kyber key encapsulation for quantum-resistant key exchange across your communication channels.",
    icon: "lock",
  },
  {
    title: "Digital Signatures",
    description: "Deploy CRYSTALS-Dilithium and FALCON signature schemes to ensure document and code authenticity in a post-quantum world.",
    icon: "pen",
  },
  {
    title: "Security Audits",
    description: "Comprehensive cryptographic inventory and quantum-vulnerability assessment. Identify every RSA and ECC dependency in your stack.",
    icon: "scan",
  },
] as const;

export const THREAT_TIMELINE = [
  { year: "2024", event: "NIST finalizes PQC standards", status: "complete" },
  { year: "2025", event: "Early adopters begin migration", status: "active" },
  { year: "2026", event: "Government mandate deadlines begin", status: "upcoming" },
  { year: "2028", event: "Quantum advantage in cryptanalysis", status: "upcoming" },
  { year: "2030+", event: "RSA-2048 considered broken", status: "critical" },
] as const;

export const THREAT_INFO = {
  heading: "The Quantum Threat",
  subheading: "Harvest Now, Decrypt Later",
  description:
    "Nation-state actors are harvesting encrypted data today, storing it until quantum computers can break the encryption. Your most sensitive communications—financial records, state secrets, intellectual property—are being collected right now for future decryption.",
  warning: "Every day without PQC migration is another day of exposure.",
};

export const ALGORITHMS = [
  {
    name: "CRYSTALS-Kyber",
    type: "Key Encapsulation (KEM)",
    description: "Lattice-based key exchange mechanism. Selected as the primary NIST standard for general encryption.",
    securityLevel: 95,
    standard: "FIPS 203",
  },
  {
    name: "CRYSTALS-Dilithium",
    type: "Digital Signature",
    description: "Lattice-based signature scheme offering strong security guarantees with compact signatures.",
    securityLevel: 90,
    standard: "FIPS 204",
  },
  {
    name: "SPHINCS+",
    type: "Hash-Based Signature",
    description: "Stateless hash-based signature scheme. Conservative security based solely on hash function security.",
    securityLevel: 99,
    standard: "FIPS 205",
  },
  {
    name: "FALCON",
    type: "Digital Signature",
    description: "Compact lattice-based signatures using NTRU lattices. Smallest signature sizes among PQC candidates.",
    securityLevel: 88,
    standard: "Round 4",
  },
] as const;

export const STATS = [
  { value: 256, suffix: "-bit", label: "Security Level" },
  { value: 1568, suffix: "-byte", label: "Kyber Public Keys" },
  { value: 3, suffix: "", label: "NIST Standards" },
  { value: 0.5, suffix: "ms", prefix: "<", label: "Key Generation" },
] as const;

export const CTA = {
  heading: "Ready for the Post-Quantum Future?",
  subheading: "Don't wait for quantum computers to break your encryption. Start your PQC migration today.",
  buttonLabel: "Begin Assessment",
};
