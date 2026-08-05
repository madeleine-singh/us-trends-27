export default function Footer() {
  return (
    <footer className="footer on-dark" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/Acc_Song_SvcMrk_White_Solid_RGB.svg"
              alt="Accenture Song"
              style={{ height: 16, width: "auto", opacity: 0.7 }}
            />
            <span className="footer-brand-sub">Design &amp; Digital Products</span>
          </div>
          <p className="footer-copy">© 2026 Accenture. All rights reserved.</p>
        </div>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 16, lineHeight: 1.7 }}>
          Authored by D&amp;DP News &amp; Trends team: Audrey Cheng, Melanie Kim, Madeleine Singh, Sophia Ng, Alexandria Jackson, &amp; Savannah Robinson
        </p>
        <p className="footer-disclaimer">
          Developed by Accenture Song&apos;s Design &amp; Digital Products practice from original US regional
          research. These trends are independent of Accenture&apos;s annual Life Trends report.
        </p>
      </div>
    </footer>
  );
}
