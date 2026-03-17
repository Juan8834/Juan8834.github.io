import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Financial Dashboard",
      description:
        "Developed a full-stack financial dashboard using Next.js and NextAuth.js, enabling secure user authentication and dynamic invoice management. Implemented advanced search functionality across multiple fields and designed a fully responsive UI for seamless use across devices.",
      imgSrc: "/images/financial-dashboard.jpg",
      liveUrl: "https://nextjs-dashboard-pi-seven.vercel.app",
      githubUrl: "https://github.com/Juan8834/nextjs-dashboard", 
      featured: true
    },
    {
      title: "Fraud Detection Dashboard",
      description:
        "Built a full-stack fraud detection dashboard using React (Vite), Node.js, and PostgreSQL (Neon). Designed APIs to handle real-time transaction data and developed an interactive UI to analyze and identify potentially fraudulent activity.",
      imgSrc: "/images/fraud-dashboard.jpg",
      liveUrl: "https://fraud-detection-frontend-lqc6.vercel.app",
      githubUrl: "https://github.com/Juan8834/fraud-detection-frontend", 
      featured: true
    },
    {
      title: "Pokémon List",
      description:
        "Created a responsive React application that integrates with a public API to display and search Pokémon data. Implemented pagination, dynamic data rendering, and interactive UI components for an improved user experience.",
      imgSrc: "/images/pokemon-app.jpg",
      liveUrl: "https://Pokemon-list-seven-omega.vercel.app",
      githubUrl: "https://github.com/Juan8834/Pokemon-List", 
      featured: false
    },
    {
      title: "Pac-Man Game",
      description:
        "Developed a grid-based Pac-Man game using JavaScript, HTML, and CSS. Implemented game logic, collision detection, and smooth animations to recreate classic arcade gameplay.",
      imgSrc: "/images/pacman-app.jpg",
      liveUrl: "https://juan8834.github.io/pacman-game/",
      githubUrl: "https://github.com/Juan8834/pacman-game", 
      featured: false
    },
    {
      title: "Tic-Tac-Toe Game",
      description:
        "Built an interactive Tic-Tac-Toe game using React with animated components and responsive design. Added win detection logic and enhanced user experience with visual feedback and celebration effects.",
      imgSrc: "/images/tic-tac-toe.jpg",
      liveUrl: "https://Juan8834.github.io/Juans-tic-tac-toe-demo",
      githubUrl: "https://github.com/Juan8834/Juans-tic-tac-toe-demo", 
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
