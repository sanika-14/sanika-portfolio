import React from "react";
import "../styles/Projects.css";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Image Colorization using CNN": {
        title: "Image Colorization using CNN",
        desc:
          " Developed a deep learning solution to automatically colorize grayscale images using Convolutional Neural Networks (CNN). Leveraged advanced architectures inspired by Siggraph17 and ECCV16 papers.",
        techStack: "Python, TensorFlow, Keras, OpenCV, Lab Color Space",
        link: "https://github.com/sanika-14/Image-Colorization-using-CNN",
        image: "/assets/colorization.jpg"
      },
      "Twitter Sentiment Analysis": {
        title: "Twitter Sentiment Analysis",
        desc:
          "An AI-powered posture detection and correction trainer that provides real-time feedback on exercise form using advanced pose analysis.",
        techStack: "Python, Tweepy, TextBlob, Pandas, Matplotlib, Seaborn",
        link: "https://github.com/sanika-14/Twitter-Sentiment-Analysis",
        image: "/assets/twitter.jpg"
      },
      "Oil Spill Detection": {
        title: "Oil Spill Detection",
        desc:
          "Developed an advanced deep learning-based image segmentation system for detecting oil spills in satellite imagery, leveraging U-Net, ResNet, and DeepLab v3 architectures.",
        techStack: "Python, TensorFlow, Keras, OpenCV, U-Net, ResNet, DeepLab v3",
        link: "https://github.com/sanika-14/Oil-Spil-Detection",
        image: "/assets/spill.jpg"
      },
      "Chess with Pygame and STOCKFISH AI": {
        title: "Chess with Pygame and STOCKFISH AI",
        desc: 
          " Built a Python-based chess game featuring AI and multiplayer functionalities. Integrated Stockfish AI for robust move predictions.",
        techStack: "Python, Pygame, Stockfish AI, NumPy, Pandas",
        link: "https://github.com/sanika-14/Python-Chess-AI",
        image: "/assets/aichess.jpg"
      },
      "Superstore Sales Dashboard ": {
        title: "Superstore Sales Dashboard ",
        desc:
          "Designed a Power BI dashboard to analyze and visualize sales data for a superstore. Focused on deriving actionable insights",
        techStack: "Power BI, SQL, Excel",
        link: "https://app.fabric.microsoft.com/links/jMxCN0qdvT?ctid=58cf0878-8e3c-4ef8-b07b-4910aec8f052&pbi_source=linkShare",
        image: "/assets/analytics.jpg"
      },
      "COVID-19 SQL Exploration": {
        title: "COVID-19 SQL Exploration",
        desc:
          "Conducted an extensive analysis of global COVID-19 data using SQL to identify trends and assess intervention strategies.",
        techStack: "SQL, MySQL Workbench",
        link: "https://github.com/sanika-14/COVID-19-SQL-Exploration",
        image: "/assets/sql.jpg"
      }
    };

    const projects = {
      "Image Colorization using CNN": {
        desc: [
          "Developed a deep learning-based application for converting grayscale images to full-color images using the CNN architecture.",
          "Leveraged pre-trained models to predict chrominance values while preserving luminance integrity.",
          "Designed intuitive input/output interfaces for users to upload grayscale images and view colorized results.",
          "Engineered the pipeline to process images efficiently using the Lab color space and TensorFlow/Keras frameworks.",
          "Orchestrated advanced visualization of results to demonstrate model accuracy and output fidelity."
        ],
        techStack: "Python, TensorFlow, Keras, OpenCV, Lab Color Space",
        link: "https://github.com/sanika-14/Image-Colorization-using-CNN",
        
      },
      "Twitter Sentiment Analysis": {
        desc: [
              "Built a full-stack sentiment analysis application using Python, Tweepy, and TextBlob to classify tweets in real-time.",
              "Engineered a pipeline for real-time tweet fetching, preprocessing, and noise removal, including cleaning hashtags, mentions, and URLs.",
              "Developed advanced sentiment analysis features to categorize tweets as positive, neutral, or negative using sentiment polarity scores.",
              "Implemented dynamic data visualizations such as bar graphs and pie charts using Matplotlib and Seaborn for sentiment trend analysis.",
              "Integrated secure access to the Twitter API for fetching data, ensuring compliance with rate limits and user privacy.",
              "Delivered a scalable solution for analyzing public opinions on trending topics, marketing campaigns, and events."
        ],
        techStack: "Python, Tweepy, TextBlob, Pandas, Matplotlib, Seaborn",
        link: "https://github.com/sanika-14/Twitter-Sentiment-Analysis",

      },
      "Oil Spill Detection": { 
       desc: [
        "Developed a deep learning-based image segmentation solution for detecting oil spills in satellite imagery.",
        "Engineered a pipeline incorporating U-Net, ResNet, and DeepLab v3 architectures for high-precision segmentation.",
        "Preprocessed large satellite datasets, including resizing, augmentation, and normalization for robust model training.",
        "Integrated U-Net for detailed spatial segmentation, ResNet for feature extraction, and DeepLab v3 for multi-scale context aggregation.",
        "Implemented evaluation metrics such as IoU (Intersection over Union) and F1-score to assess model performance.",
        "Designed an intuitive user interface to visualize detection results with overlays for easy interpretation by users.",
        "Delivered a scalable and efficient solution for real-world applications in environmental monitoring and disaster management."
        
      ],
      techStack: "Python, TensorFlow, Keras, OpenCV, U-Net, ResNet, DeepLab v3",
      link: "https://github.com/sanika-14/Oil-Spil-Detection"
      },
      "Chess with Pygame and STOCKFISH AI": {
        desc: [ 
          "Built a full-featured chess application using Python with options for both Player vs Player and Player vs AI modes.",
          "Integrated Stockfish AI for real-time move suggestions and in-depth game analysis.",
          "Designed and developed a user-friendly GUI using Pygame for smooth gameplay transitions.",
          "Engineered features such as real-time move validation, game mode switching, and board setup.",
          "Enabled users to save and load game states, enhancing replayability and user experience."
        ],
        techStack: "Python, Pygame, Stockfish AI, NumPy, Pandas",
        link: "https://github.com/sanika-14/Python-Chess-AI"
      },
      "Superstore Sales Dashboard  ": {
        desc: [
          "Designed an interactive and insightful dashboard using Power BI to visualize sales trends and performance metrics.",
          "Developed advanced data cleaning and preprocessing workflows to handle inconsistencies in raw data.",
          "Implemented features like trend analysis, forecasting, and KPI tracking to support data-driven decisions.",
          "Orchestrated integration of multiple data sources to ensure seamless data synchronization and update cycles.",
          "Delivered compelling visualizations such as heatmaps, bar charts, and line graphs to represent insights effectively."
        ],
        techStack: "Power BI, SQL, Excel",
        link: "https://app.fabric.microsoft.com/links/jMxCN0qdvT?ctid=58cf0878-8e3c-4ef8-b07b-4910aec8f052&pbi_source=linkShare"
      },
      "COVID-19 SQL Exploration": {
        desc: [
          "Developed a SQL-based analytics system to explore global COVID-19 datasets and extract actionable insights.",
          "Engineered complex queries to perform trend analysis on infection rates, recoveries, deaths, and vaccination statistics.",
          "Implemented features like regional comparisons and risk factor identification to support data-driven health interventions",
          "Delivered visual reports through MySQL Workbench for assessing the effectiveness of public health measures."
            ],
            techStack: "SQL, MySQL Workbench",
            link: "https://github.com/sanika-14/COVID-19-SQL-Exploration"
          },

          
   
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel controls indicators interval={null}>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <a href={spotlightProjects[key]["link"]} target="_blank" rel="noopener noreferrer">
                    <h3>{spotlightProjects[key]["title"]}</h3>
                  </a>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <ExternalLinks
                      githubLink={spotlightProjects[key]["link"]}
                    ></ExternalLinks>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <h1 className="more-details">More Details</h1>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div style={{ textAlign: "center" }}>
                      <ExternalLinks
                        githubLink={projects[key]["link"]}
                        openLink={projects[key]["open"]}
                      ></ExternalLinks>
                    </div>
                  </div>

                  <a href={projects[key]["link"]} target="_blank" rel="noopener noreferrer">
                    <div className="card-title">{key}</div>
                  </a>
                  <ul className="job-description">
                    {projects[key]["desc"].map((descItem, i) => (
                      <FadeInSection key={i} delay={`${i + 1}00ms`}>
                        <li>{descItem}</li>
                      </FadeInSection>
                    ))}
                  </ul>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;