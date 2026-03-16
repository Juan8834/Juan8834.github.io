import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Financial Dashboard",
      description:
        "Manage and track finances with secure authentication using NextAuth.js, search invoices by multiple fields, responsive design for desktop and mobile.",
      imgSrc: "/images/financial-dashboard.jpg",
      liveUrl: "https://nextjs-dashboard-pi-seven.vercel.app",
      featured: true
    },
    {
      title: "Fraud Detection Dashboard",
      description:
        "Full-stack fraud detection dashboard built with Vite + React for frontend, Express + Node for backend, and PostgreSQL via Neon. View and analyze transactions in real time.",
      imgSrc: "/images/fraud-dashboard.jpg",
      liveUrl: "https://fraud-detection-frontend-lqc6.vercel.app",
      featured: true
    },
    {
      title: "Pokémon List",
      description:
        "Explore Pokémon data from the official API with search, pagination, and detailed stats. Fully responsive and interactive.",
      imgSrc: "/images/pokemon-app.jpg",
      liveUrl: "https://Pokemon-list-seven-omega.vercel.app",
      featured: false
    },
    {
      title: "Pac-Man Game",
      description:
        "Grid-based Pac-Man game using HTML, CSS, and JavaScript. Navigate the maze, eat dots, and enjoy smooth animations.",
      imgSrc: "/images/pacman-app.jpg",
      liveUrl: "https://juan8834.github.io/pacman-game/",
      featured: false
    },
    {
      title: "Tic-Tac-Toe Game",
      description:
        "React-based Tic-Tac-Toe with animated Xs and Os, responsive design, and confetti celebration on wins.",
      imgSrc: "/images/tic-tac-toe.jpg",
      liveUrl: "https://Juan8834.github.io/Juans-tic-tac-toe-demo",
      featured: false
    }
  ];

  // Featured projects first
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div>
      <Navbar />

      {/* ===== Header Section ===== */}
      <section className="section-dark">
        <div className="container text-center">
          <h1 style={{ color: "#ffcc00", fontSize: "3rem", marginBottom: "1rem" }}>
            Projects
          </h1>
          <p style={{ maxWidth: "700px", margin: "0 auto", color: "#ccc" }}>
            A selection of full-stack and front-end projects showcasing modern
            UI design, real-world data handling, and production deployments.
          </p>
        </div>
      </section>

      {/* ===== Featured Projects ===== */}
      <section className="section-light">
        <div className="container">
          <h2 style={{ marginBottom: "2rem" }}>Featured Projects</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem"
            }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Other Projects ===== */}
      <section className="section-dark">
        <div className="container">
          <h2 style={{ marginBottom: "2rem", color: "#ffcc00" }}>
            Other Projects
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem"
            }}
          >
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
