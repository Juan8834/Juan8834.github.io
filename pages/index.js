import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* ===== Hero Section ===== */}
      <section className="section-dark">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              alignItems: "center",
              gap: "4rem"
            }}
          >
            {/* Text */}
            <div>
              <h1
                style={{
                  color: "#ffcc00",
                  fontSize: "3.2rem",
                  marginBottom: "1rem"
                }}
              >
                Hi, I’m Juan Peralta
              </h1>

              <p
                style={{
                  color: "#ddd",
                  fontSize: "1.3rem",
                  lineHeight: "1.7",
                  marginBottom: "2rem"
                }}
              >
                Full-Stack Developer specializing in modern, secure web applications using
                React, Next.js, and cloud-backed architectures.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/projects" className="btn-primary">
                  View Projects
                </a>
                <a href="/contact" className="btn-dark">
                  Contact Me
                </a>
              </div>
            </div>

            {/* Image */}
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/me.jpg"
                alt="Juan Peralta"
                className="profile-pic"
                style={{
                  maxWidth: "260px",
                  width: "100%",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Highlight Section ===== */}
      <section className="section-light">
        <div className="container">
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              background: "#ffffff",
              borderRadius: "24px",
              padding: "3rem 2.5rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              textAlign: "center"
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>
              Building secure, scalable, and user-focused applications
            </h2>

            <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "2rem" }}>
              With a background in loss prevention and security, I bring a unique analytical
              perspective to software engineering — combining technical skill with real-world
              risk awareness and problem-solving.
            </p>

            <a href="/about" className="btn-primary">
              Learn More About Me
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
