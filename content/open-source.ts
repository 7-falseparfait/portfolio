import type { Contribution, LedgerItem } from "./types";

export const contributions: Contribution[] = [
  {
    slug: "ride-the-lightning",
    project: "Ride The Lightning",
    repository: "https://github.com/Ride-The-Lightning/RTL",
    language: "TypeScript",
    about:
      "A full-function browser app for operating LND, Core Lightning and Eclair nodes.",
    focus:
      "Server-side LND controllers — alias resolution, request concurrency and settings security.",
    pullRequests: [
      {
        number: 1683,
        url: "https://github.com/Ride-The-Lightning/RTL/pull/1683",
        title: "Allowlist settings payload fields and pin credential paths",
        state: "merged",
        mergedAt: "September 2026",
        stats: "+2,053 / −191 · 7 files · 53 comments",
        summary:
          "updateApplicationSettings merged the request body's per-node authentication and settings into the runtime config without allowlisting. An authenticated caller could supply macaroonPath, runePath, lnApiPassword, configPath or lnServerUrl and re-point credential reads and credentialed outbound requests at attacker-controlled values — a confused-deputy vector into host file reads and internal HTTP targets. The endpoint now allowlists accepted node fields and re-pins server URLs and credential paths to server-held values for existing nodes.",
      },
      {
        number: 1668,
        url: "https://github.com/Ride-The-Lightning/RTL/pull/1668",
        title: "Fix options race in getPeers / postPeer alias resolution",
        state: "merged",
        mergedAt: "August 2026",
        stats: "+184 / −34 · 3 files · 22 comments",
        summary:
          "Follow-up to #1651. Threads an explicit requestOptions parameter through getAliasForPeers in lnd/peers.ts instead of mutating and reading module-level options. getPeers and postPeer now take the snapshot synchronously, immediately after their own url and form assignments and before the first request call — everything up to that point runs in a single tick, so a concurrent request to a different node cannot reassign the shared options object first. This closes the race window rather than narrowing it.",
      },
      {
        number: 1651,
        url: "https://github.com/Ride-The-Lightning/RTL/pull/1651",
        title:
          "Bound remaining unbounded alias-resolution fan-outs in graph.ts and channels.ts",
        state: "merged",
        mergedAt: "August 2026",
        stats: "+188 / −116 · 5 files · 27 comments",
        summary:
          "Extends the runWithConcurrencyLimit pattern across the remaining unbounded Promise.all(map(...)) alias-resolution fan-outs in the LND graph and channels controllers: getQueryRoutes, getAliasesForPubkeys, getAllChannels, getPendingChannels and getClosedChannels. Because the limiter resolves per-task failures into the results array instead of rejecting the batch, both call sites now guard against {error} entries and fall back to 'Unknown' rather than leaking the error object into the response.",
      },
    ],
  },
  {
    slug: "frostsnap",
    project: "Frostsnap",
    repository: "https://github.com/frostsnap/frostsnap",
    language: "Rust",
    about:
      "Firmware and software for a FROST threshold-multisig Bitcoin security system.",
    focus:
      "Descriptor handling in the Rust backup tooling, plus PSBT input and address validation in the companion app.",
    pullRequests: [
      {
        number: 520,
        url: "https://github.com/frostsnap/frostsnap/pull/520",
        title: "Add descriptor checksum generation",
        state: "merged",
        mergedAt: "August 2026",
        stats: "+51 / −8 · 3 files",
        summary:
          "Adds BIP380 descriptor checksum generation to frost_backup descriptor reconstruction via the miniscript crate. generate_descriptor now appends the checksum, with a test asserting generated descriptors carry a valid one. Generated descriptors continue to match the address derivation in frostsnap_core.",
      },
      {
        number: 599,
        url: "https://github.com/frostsnap/frostsnap/pull/599",
        title: "Make validate_amount network-independent",
        state: "in-review",
        summary:
          "Separates amount validation from the active network so the check no longer depends on which chain the device is currently configured for.",
      },
      {
        number: 587,
        url: "https://github.com/frostsnap/frostsnap/pull/587",
        title: "Support Base64 and Hex encoded PSBTs",
        state: "in-review",
        summary:
          "Accepts PSBTs pasted in either Base64 or hex encoding, fixing #569, where only one form was recognised.",
      },
      {
        number: 549,
        url: "https://github.com/frostsnap/frostsnap/pull/549",
        title: "Disable address lookup on invalid or wrong-network input",
        state: "in-review",
        summary:
          "Guards the lookup action so it cannot be triggered with a malformed address or one belonging to a different network.",
      },
      {
        number: 530,
        url: "https://github.com/frostsnap/frostsnap/pull/530",
        title: "Add security check explainer text and Learn More dialog",
        state: "in-review",
        summary:
          "Surfaces why a security check is being performed at signing time, with a longer explanation behind a dialog.",
      },
    ],
  },
  {
    slug: "floresta",
    project: "Floresta",
    repository: "https://github.com/getfloresta/Floresta",
    language: "Rust",
    about: "A lightweight, embeddable Bitcoin client built for sovereignty.",
    focus: "Dependency hygiene across the hashing layer of the workspace.",
    pullRequests: [
      {
        number: 1290,
        url: "https://github.com/getfloresta/Floresta/pull/1290",
        title: "Replace sha2 and sha3 with bitcoin_hashes",
        state: "merged",
        mergedAt: "September 2026",
        stats: "+78 / −128 · 8 files · 13 comments",
        summary:
          "Keeps all hashing inside the rust-bitcoin dependency family. Removes sha2 from the workspace root, floresta-chain and floresta-common, where it was declared but never used correctly — SHA-256 was already going through bitcoin_hashes. Utreexo leaf hash computation in floresta-chain moves to bitcoin_hashes::sha512_256, computing internally as sha512_256 and converting to sha256::Hash to match existing return types. In floresta-wire, sha3 is replaced by bitcoin_hashes 0.20 for the Tor V3 onion address checksum; 0.20 is already in the tree via rustreexo, so no new crate is introduced. bitcoin_hashes 0.14, pinned by bitcoin 0.32.8, does not ship sha3_256.",
      },
    ],
  },
  {
    slug: "ghostkey",
    project: "ghostKey",
    repository: "https://github.com/Jolah1/ghostKey",
    language: "TypeScript",
    about: "An inheritance layer for Bitcoin.",
    focus: "Copy architecture — the vocab layer, in English and Nigerian Pidgin.",
    pullRequests: [
      {
        number: 272,
        url: "https://github.com/Jolah1/ghostKey/pull/272",
        title: "Complete copy migration into the vocab layer",
        state: "merged",
        mergedAt: "July 2026",
        stats: "+1,145 / −501 · 8 files · 19 comments",
        summary:
          "Migrates the remaining inline UI strings into the vocab layer across the claim flow, drill walkthrough, guardian flow, manual claim and error surfaces, with matching English and Pidgin entries for every new key. claimErrors was refactored to accept a ClaimErrorsCopy parameter, and ClaimPage, InheritPortal and PracticeClaimCard now consume the vocab layer instead of inline strings. Pidgin copy was reviewed by a native speaker for tone and naturalness.",
      },
    ],
  },
];

export const bitcoinLearning: LedgerItem[] = [
  {
    label: "Learn Bitcoin from the Command Line",
    detail: "Graduate, August cohort · BTrust Pathways",
    href: "https://pathways.btrust.tech/graduates#learn-bitcoin-from-the-command-line",
  },
  {
    label: "Rust for Bitcoin Program",
    detail: "thebuidl-grid · week 1 merged, week 2 submitted",
    href: "https://github.com/thebuidl-grid/rust-for-bitcoin-program/pull/12",
  },
  {
    label: "Bitcoin Dojo solutions",
    detail: "Rust exercises, self-paced",
    href: "https://github.com/7-falseparfait/my-bitcoin-dojo-solutions",
  },
  {
    label: "btc-decoder",
    detail: "A Bitcoin transaction decoder written in Rust",
    href: "https://github.com/7-falseparfait/btc-decoder",
  },
  {
    label: "BitDevs Kaduna",
    detail: "Meetup content contribution for the Kaduna Bitcoin community",
    href: "https://github.com/bitdevsKaduna/bitdevskaduna.org/pull/5",
  },
];

export const openSourceStats = {
  merged: 6,
  inReview: 4,
  languages: ["TypeScript", "Rust"],
} as const;
