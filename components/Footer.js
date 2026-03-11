export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Juan Peralta. All rights reserved.</p>

      <div className="footer-buttons">
        <a 
          className="footer-btn"
          href="https://github.com/juan8834"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a 
          className="footer-btn"
          href="https://www.linkedin.com/in/juan-peralta-55456123a"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a 
          className="footer-btn"
          href="mailto:jperalta8834@gmail.com"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
