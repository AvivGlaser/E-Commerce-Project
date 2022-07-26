import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-body">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
        />
      </div>
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/aviv-glaser-226656202/"
              target="_blank"
              rel="noopener noreferrer"
              children={<LinkedInIcon />}
            />
            <a
              href="https://github.com/AvivGlaser"
              target="_blank"
              rel="noopener noreferrer"
              children={<GitHubIcon />}
            />
            <a
              href="https://www.facebook.com/avivwcw/"
              target="_blank"
              rel="noopener noreferrer"
              children={<FacebookIcon />}
            />
          </div>
          <p> All Rights Reserved © || Aviv Glaser 2022</p>
        </footer>
      </div>
    </div>
  );
}
