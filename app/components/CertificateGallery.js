"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import certificates from "../data/certificates.json";
import styles from "./CertificateGallery.module.css";

const categories = ["All", "Security", "Development", "Competitions"];
const collectionUrl = "/certificates/all-certificates.pdf";
const pageSize = 6;
const featuredIds = [
  "jr-penetration-tester",
  "july-hackathon-2026",
  "meta-hacker-cup-2025",
];
const featuredCertificates = featuredIds
  .map((id) => certificates.find((certificate) => certificate.id === id))
  .filter(Boolean);
const archivedCertificates = certificates.filter(
  (certificate) => !featuredIds.includes(certificate.id),
);

function Arrow({ diagonal = false, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function CertificateCard({ certificate, onOpen }) {
  return (
              <article className={styles.card}>
                <div className={styles.thumbnail}>
                  <Image
                    src={certificate.image}
                    alt={`${certificate.title} certificate from ${certificate.issuer}`}
                    fill
                    sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1000px) calc((100vw - 80px) / 2), 390px"
                    loading="lazy"
                  />
                  <span className={styles.imageLabel}>
                    {certificate.type || certificate.category}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.issuer}>{certificate.issuer}</p>
                  <h3>{certificate.title}</h3>
                  <p className={styles.date}>
                    {certificate.date || certificate.year}
                  </p>
                  <div className={styles.cardFooter}>
                    <button
                      type="button"
                      onClick={(event) => onOpen(certificate, event)}
                      aria-label={`View credential: ${certificate.title}`}
                    >
                      View credential
                      <Arrow diagonal />
                    </button>
                    <div className={styles.sourceLinks}>
                      {[
                        certificate.pdfPage,
                        ...(certificate.additionalPdfPages || []),
                      ].map((page) => (
                        <a
                          key={page}
                          href={`${collectionUrl}#page=${page}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${certificate.title}: original PDF, page ${page}`}
                        >
                          PDF <span>p.{page}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
  );
}

export default function CertificateGallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [selected, setSelected] = useState(null);
  const [activeVersion, setActiveVersion] = useState(0);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);
  const searchRef = useRef(null);

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return archivedCertificates.filter((certificate) => {
      const matchesCategory =
        category === "All" || certificate.category === category;
      const searchText = [
        certificate.title,
        certificate.issuer,
        certificate.category,
        certificate.date,
        certificate.year,
      ]
        .join(" ")
        .toLowerCase();
      return matchesCategory && (!search || searchText.includes(search));
    });
  }, [query, category]);

  const visible = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visible.length;
  const selectedVersions = selected
    ? [
        { page: selected.pdfPage, image: selected.image },
        ...(selected.additionalPdfPages || []).map((page, index) => ({
          page,
          image: selected.additionalImages?.[index],
        })),
      ]
    : [];
  const currentVersion = selectedVersions[activeVersion] || selectedVersions[0];

  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [selected]);

  function openCertificate(certificate, event) {
    triggerRef.current = event.currentTarget;
    setActiveVersion(0);
    setSelected(certificate);
  }

  function closeCertificate() {
    dialogRef.current?.close();
  }

  function clearFilters() {
    setQuery("");
    setCategory("All");
    setVisibleCount(pageSize);
    searchRef.current?.focus();
  }

  return (
    <section
      className={styles.section}
      id="credentials"
      aria-labelledby="credentials-heading"
    >
      <div className="container">
        <div className={styles.headingRow}>
          <div className={styles.headingCopy}>
            <p className={styles.eyebrow}>04 / CREDENTIALS</p>
            <h2 id="credentials-heading">
              Training & credentials.
            </h2>
            <p className={styles.intro}>
              Selected records from security training, national hackathons,
              and competitive programming.
            </p>
          </div>

        </div>

        <div className={styles.grid} id="selected-credentials">
          {featuredCertificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onOpen={openCertificate}
            />
          ))}
        </div>

        <details className={styles.archive} id="credential-archive">
          <summary>
            <span>View full credential collection</span>
            <span className={styles.archiveCount}>
              {archivedCertificates.length} more records <Arrow />
            </span>
          </summary>
          <div className={styles.archiveContent}>
            <div className={styles.archiveIntro}>
              <p>Additional courses, challenge completions, and participation records.
                Download the complete PDF for every original document.</p>
          <a className={styles.download} href={collectionUrl} download>
            <span className={styles.downloadIcon}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" />
              </svg>
            </span>
            <span>
              Download collection<small>PDF · 13.4 MB</small>
            </span>
            <Arrow diagonal />
          </a>
            </div>
        <div className={styles.toolbar}>
          <div
            className={styles.filters}
            role="group"
            aria-label="Filter archived credentials by category"
          >
            {categories.map((item) => {
              const count =
                item === "All"
                  ? archivedCertificates.length
                  : archivedCertificates.filter(
                      (certificate) => certificate.category === item,
                    ).length;
              return (
                <button
                  type="button"
                  key={item}
                  className={styles.filter}
                  aria-pressed={category === item}
                  onClick={() => {
                    setCategory(item);
                    setVisibleCount(pageSize);
                  }}
                >
                  {item}
                  <span>{count}</span>
                </button>
              );
            })}
          </div>
          <div className={styles.search}>
            <label htmlFor="credential-search" className={styles.srOnly}>
              Search archived credentials by title, issuer, or year
            </label>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
            <input
              id="credential-search"
              type="search"
              placeholder="Search the archive…"
              value={query}
              ref={searchRef}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisibleCount(pageSize);
              }}
              autoComplete="off"
            />
          </div>
        </div>

        <div className={styles.resultsRow}>
          <p role="status" aria-live="polite" aria-atomic="true">
            Showing <span>{visible.length}</span> of{" "}
            <span>{filtered.length}</span>{" "}
            {filtered.length === 1 ? "credential" : "credentials"}
            {category !== "All" ? ` in ${category.toLowerCase()}` : ""}
          </p>
          {(query || category !== "All") && (
            <button type="button" onClick={clearFilters}>
              Reset filters <span aria-hidden="true">↺</span>
            </button>
          )}
        </div>

        {visible.length ? (
          <div className={styles.grid}>
            {visible.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onOpen={openCertificate}
              />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span className={styles.emptyMark} aria-hidden="true">
              [ 0 ]
            </span>
            <h3>No matching credentials.</h3>
            <p>
              Try another title, issuer, or year, or explore the full
              collection.
            </p>
            <button type="button" onClick={clearFilters}>
              Clear search & filters
              <Arrow />
            </button>
          </div>
        )}

        {remaining > 0 && (
          <div className={styles.moreRow}>
            <span>
              {String(visible.length).padStart(2, "0")} /{" "}
              {String(filtered.length).padStart(2, "0")} EXPLORED
            </span>
            <button
              type="button"
              className={styles.showMore}
              onClick={() => setVisibleCount((count) => count + pageSize)}
            >
              Show {Math.min(pageSize, remaining)} more
              <span aria-hidden="true">+</span>
            </button>
          </div>
        )}


          </div>
        </details>

        <noscript>
          <p className={styles.noScript}>
            Download the complete PDF collection to explore every credential.
          </p>
        </noscript>
      </div>

      <dialog
        className={styles.dialog}
        ref={dialogRef}
        aria-labelledby="credential-dialog-title"
        aria-describedby="credential-dialog-description"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeCertificate();
        }}
      >
        {selected && (
          <div className={styles.dialogContent}>
            <div className={styles.dialogTopbar}>
              <span>
                {selected.category} / {selected.type || "Credential"}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={closeCertificate}
                aria-label="Close credential preview"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m6 6 12 12M6 18 18 6" />
                </svg>
              </button>
            </div>
            {selectedVersions.length > 1 && (
              <div className={styles.versionBar}>
                <span>Document versions</span>
                <div role="group" aria-label="Choose certificate version">
                  {selectedVersions.map((version, index) => (
                    <button
                      key={version.page}
                      type="button"
                      aria-pressed={index === activeVersion}
                      onClick={() => setActiveVersion(index)}
                    >
                      Page {version.page}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className={styles.dialogImage}>
              {currentVersion.image ? (
                <Image
                  src={currentVersion.image}
                  alt={`${selected.title} certificate issued to Tijul Kabir by ${selected.issuer}, source PDF page ${currentVersion.page}`}
                  width={1200}
                  height={850}
                  sizes="(max-width: 800px) 92vw, 900px"
                />
              ) : (
                <a
                  href={`${collectionUrl}#page=${currentVersion.page}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open original PDF, page {currentVersion.page}
                </a>
              )}
            </div>
            <div className={styles.dialogDetails}>
              <p className={styles.issuer}>
                {selected.issuer} <span>·</span>{" "}
                {selected.date || selected.year}
              </p>
              <h3 id="credential-dialog-title">{selected.title}</h3>
              <p
                id="credential-dialog-description"
                className={styles.description}
              >
                {selected.description}
              </p>
              {selected.sourceNotes && (
                <div className={styles.sourceNote}>
                  <strong>About this source</strong>
                  <p>{selected.sourceNotes}</p>
                </div>
              )}
              <div className={styles.dialogLinks}>
                {selectedVersions.map((version) => (
                  <a
                    key={version.page}
                    href={`${collectionUrl}#page=${version.page}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View original PDF <span>Page {version.page}</span>
                    <Arrow diagonal />
                  </a>
                ))}
                {selected.verificationUrl && (
                  <a
                    href={selected.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify credential
                    <Arrow diagonal />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
