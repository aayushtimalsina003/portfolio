import React from "react";
import "./portfolio.css";
import YTClone from "../../assets/portfolio/youtube_clone.png";
import movie from "../../assets/portfolio/movie.png";
import Prescripto from "../../assets/portfolio/Prescripto.png";

const data = [
  {
    id: 1,
    Image: Prescripto,
    title: "Doctor Appointment System",
    github: "https://github.com/Aayush-Timalsina/Doctor-appointment-system",
    demo: "https://myprescripto01.netlify.app/",
  },
  {
    id: 2,
    Image: YTClone,
    title: "Youtube Clone",
    github: "https://github.com/Aayush-Timalsina/youtube-app",
    demo: "https://p-youtube-clone.netlify.app",
  },
  {
    id: 3,
    Image: movie,
    title: "Movie App",
    github: "git@github.com:Prashant8Khatiwada/movie.git",
    demo: "https://web-movie-app.netlify.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, Image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={Image} alt="" />{" "}
              </div>
              <h3>{title}</h3>

              <div className="portfolio_item-cta">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Github
                  </a>
                )}
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
