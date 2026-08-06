export default function Footer() {
  return (
    <footer className="footer on-dark" role="contentinfo">
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/Acc_Song_SvcMrk_White_Solid_RGB.svg"
            alt="Accenture Song"
            style={{ height: 16, width: "auto", opacity: 0.7 }}
          />
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.6 }}>
            Created by the D&amp;DP News and Trends Team
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.40)", margin: 0, lineHeight: 1.7 }}>
            Original U.S. regional research conducted independently by Accenture Song&apos;s Design &amp; Digital
            Products practice and used to inform Accenture&apos;s annual{" "}
            <a
              href="https://www.accenture.com/us-en/insights/song/accenture-life-trends"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.55)", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              Life Trends
            </a>{" "}
            report.
          </p>
        </div>
      </div>
    </footer>
  );
}
