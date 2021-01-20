import React from "react";
import Card from "react-bootstrap/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebOutlinedIcon from "@material-ui/icons/WebOutlined";
import DnsOutlinedIcon from "@material-ui/icons/DnsOutlined";
import Topbar from "./Topbar";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <div data-aos="fade-up" className="about">
      <div className="about-text">
        <Typography style={{ color: "#d25b43" }} variant="h4">
          About
        </Typography>
        <Typography style={{ color: "white", width: "100%" }} variant="body1">
          Hi! My name is Charlie, and I'm a junior full-stack software developer
          based in Manchester, UK. <br></br>
          <br></br>I started my coding journey in August 2020, and having been
          driven by a thirst for a new challenge in my life after being active
          in the Audio Engineering world for 5 years, I decided to join the
          Northcoders intensive 14 week coding bootcamp.<br></br>
          <br></br> In my relatively short time coding I've established the
          fundamentals of JavaScript, OOP and functional programming, whilst
          expanding into backend & frontend frameworks such as Postgress and
          React.<br></br>
          <br></br>Examples of my work are on this site, and please don't
          hesitate to get in touch!
        </Typography>
      </div>

      <div className="tools">
        <Typography style={{ color: "#d25b43" }} variant="h5">
          Tools
        </Typography>

        <Card style={{ margin: "10px", background: "#E77E71" }}>
          <Card.Body>
            <div className="tools-container">
              <i class="devicon-express-original "></i>
              <i class="devicon-bootstrap-plain "></i>
              <i class="devicon-react-original-wordmark "></i>
              <i class="devicon-postgresql-plain-wordmark"></i>
              <i class="devicon-javascript-plain"></i>
              <i class="devicon-css3-plain-wordmark"></i>
              <i class="devicon-nodejs-plain-wordmark"></i>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="experience">
        <Typography style={{ color: "#d25b43" }} variant="h5">
          Experience
        </Typography>
        <Card style={{ margin: "10px", background: "#E77E71" }}>
          <Card.Body>
            <div className="experience-info">
              <GroupOutlinedIcon />
              Remote peer-programming through Slack and Zoom
            </div>
            <div className="experience-info">
              <GitHubIcon />
              Version control with GitHub
            </div>
            <div className="experience-info">
              <WebOutlinedIcon />
              Frontend design with React, HTML5 and CSS
            </div>
            <div className="experience-info">
              <DnsOutlinedIcon />
              Backend design with Express, PostgresSQL and Knexx
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
