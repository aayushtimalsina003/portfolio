import React from "react";
import "./experience.css";
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience experience-1">
          <h3>UI/UX Design</h3>
          <div className="experience_content">
            <article className="experience_details">
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolore, eligendi! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Dolore, eligendi!
              </p>

              <button className="btn btn-primary">Live Projects</button>
            </article>
          </div>
        </div>

        <div className="experience experience-2">
          <h3>Product Design</h3>
          <div className="experience_content">
            <article className="experience_details">
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolore, eligendi! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Dolore, eligendi!
              </p>
              <button className="btn btn-primary">Live Projects</button>
            </article>
          </div>
        </div>

        <div className="experience experience-3">
          <h3>Frontend Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolore, eligendi! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Dolore, eligendi!
              </p>
              <button className="btn btn-primary">Live Projects</button>
            </article>
          </div>
        </div>

        <div className="experience experience-4">
          <h3>Website Design</h3>
          <div className="experience_content">
            <article className="experience_details">
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolore, eligendi! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Dolore, eligendi!
              </p>
              <button className="btn btn-primary">Live Projects</button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
