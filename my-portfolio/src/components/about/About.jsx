import ME from "../../assets/me_aayush.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_contents">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            {/* <article className="about_card">
              <FiUser className="about_icon" />
              <h5>Clients</h5>
              <small>50+ WorldWide</small>
            </article> */}

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I have a strong curiosity and creative mindset that drives me to
            find innovative solutions and question the way things are done.
            Passionate React developer skilled at creating polished and
            effective web solutions. I am deeply committed to keeping up with
            the latest advancements in the ever-changing React ecosystem and
            continuously improving my skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
