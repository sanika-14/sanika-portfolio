import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
<p>
  I'm a <b>B.E</b> student specializing in <b>Artificial Intelligence and Data Science</b> at 
  <a href="\https://engg.dypvp.edu.in/"> Dr. D.Y Patil Institute of Technology, Pimpri</a>, with a strong foundation in Mchine Learning and Deep Learning . I’m passionate about creating innovative solutions and expanding my tech knowledge.
</p>


    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also enjoy dancing, playing chess, and watching anime.
      </p>
    );

    const tech_stack = [
      "Python",
      "Pytorch",
      "Data Science",
      "Tensorflow",
      "MySQL",
      "Data Analytics",
      "Machine Learning",
      "Deep Learning",
      "AI",
      "MySQL",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Power BI",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection key={i} delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Sanika Kulkarni" src="\assets\prof.jpg" />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
