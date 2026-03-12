import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />

      {/* ===== Header Section ===== */}
      <section className="section-dark">
        <div className="container text-center">
          <h1 style={{ color: "#ffcc00", fontSize: "3rem", marginBottom: "1rem" }}>
            My Story
          </h1>
          <p style={{ maxWidth: "700px", margin: "0 auto", color: "#ccc" }}>
            From loss prevention to full-stack development — a journey driven by curiosity,
            problem-solving, and a passion for building secure, meaningful applications.
          </p>
        </div>
      </section>

      {/* ===== About Card ===== */}
      <section className="section-light">
        <div className="container">
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              background: "#ffffff",
              borderRadius: "24px",
              padding: "3rem 2.5rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
            }}
          >
            {/* Profile */}
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <img
                src="/images/me.jpg"
                alt="Juan Peralta"
                className="profile-pic"
                style={{ marginBottom: "1.5rem" }}
              />

              <h2 style={{ marginBottom: "0.5rem" }}>Hi, I’m Juan 👋</h2>
              <p style={{ color: "#666" }}>
                Full-Stack Developer · MERN · Next.js · Firebase · Open to Opportunities
              </p>
            </div>

            {/* Story */}
            <div style={{ lineHeight: "1.8", color: "#444" }}>
              <p>
                With over <strong>15 years of experience in loss prevention and security</strong>,
                I developed a strong analytical mindset, sharp attention to detail, and a deep
                appreciation for risk assessment and problem-solving.
              </p>

              <p>
                After years of working demanding retail schedules and advancing into management,
                I realized I wanted a new challenge — one that offered long-term growth, creativity,
                and a healthier work-life balance. That search led me to <strong>coding</strong>.
              </p>

              <p>
                I recently completed <strong>MIT xPRO’s Full Stack Development Program (MERN)</strong>,
                where I built production-style applications using Next.js, Firebase, databases,
                authentication, and cloud deployments.
              </p>

              <p>
                Today, I combine my investigative background with software engineering to build
                applications that are <strong>secure, scalable, and user-focused</strong>.
              </p>
            </div>

            {/* Tech Stack */}
            <div style={{ marginTop: "3rem" }}>
              <h3 style={{ marginBottom: "1rem" }}>🛠️ Tech Stack</h3>
              <p style={{ color: "#555", lineHeight: "1.7" }}>
                <strong>Languages & Frameworks:</strong> JavaScript (ES6+), React, Next.js, Node.js,
                Express<br />
                <strong>Databases & Cloud:</strong> Firebase, MongoDB, SQL, AWS IAM<br />
                <strong>Tools:</strong> Docker, GitHub Actions, CI/CD, REST APIs, Authentication
                (NextAuth.js)
              </p>
            </div>

            {/* Closing */}
            <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
              <p style={{ color: "#444" }}>
                I’m excited to collaborate, contribute, and grow as a software engineer.
              </p>
              <p>
                Check out my GitHub{" "}
                <a
                  href="https://github.com/Juan8834"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ffcc00", fontWeight: "600" }}
                >
                  @Juan8834
                </a>{" "}
                — let’s build something great.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
