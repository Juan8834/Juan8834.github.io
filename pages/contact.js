import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />

      {/* ===== Header Section ===== */}
      <section className="section-dark">
        <div className="container text-center">
          <h1 style={{ color: "#ffcc00", fontSize: "3rem", marginBottom: "1rem" }}>
            Let’s Connect
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto", color: "#ccc" }}>
            If you like my work or want to collaborate, feel free to reach out.
            I’m always open to new opportunities and conversations.
          </p>
        </div>
      </section>

      {/* ===== Contact Card Section ===== */}
      <section className="section-light">
        <div className="container">
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              background: "#ffffff",
              borderRadius: "20px",
              padding: "3rem 2rem",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
            }}
          >
            <h2 style={{ marginBottom: "1rem" }}>Get in Touch</h2>
            <p style={{ marginBottom: "2.5rem", color: "#555" }}>
              The fastest way to reach me is through LinkedIn or email.
              You can also check out my GitHub to see what I’m currently building.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap"
              }}
            >
              <a
                href="https://www.linkedin.com/in/juan-peralta-55456123a"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Juan8834"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                GitHub
              </a>

              <a
                href="mailto:jperalta8834@gmail.com"
                className="btn-dark"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
