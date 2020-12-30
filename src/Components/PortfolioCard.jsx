import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // maxWidth: 500,
    color: "#d25b43",
    background: "#2d3447",
  },
  media: {
    height: 140,
  },
});
const PortfolioCard = () => {
  const classes = useStyles();
  return (
    <>
      <div id="nc-news" className="card-container">
        <div className="portfolio-card">
          <Card className={classes.root}>
            <CardActionArea>
              <h2>NC News - Frontend</h2>
              <CardContent>
                <div className="card-header">
                  <Typography
                    style={{ color: "white" }}
                    gutterBottom
                    variant="subtitle"
                  >
                    A Reddit style discussion board built for both web and
                    mobile with a feature rich user experience. ully responsive
                    design built with React, Bootstrap and Material UI with full
                    consideration of the React lifecycle and best-practice state
                    management.
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <div className="card-links">
                <a href="https://charlie-nc-news.netlify.app/" className="btn">
                  View on the web
                </a>
                <p className="btn">GitHub</p>
              </div>
            </CardActions>
          </Card>
        </div>
        <div className="portfolio-card">
          <Card className={classes.root}>
            <CardActionArea>
              <h2>NC News - Backend</h2>
              <CardContent>
                <div className="card-header">
                  <Typography
                    style={{ color: "white" }}
                    gutterBottom
                    variant="subtitle"
                  >
                    Set of thoroughly tested API endpoints that communicate with
                    a relational database. This backend was built with
                    Postgress, Express & Knexx with error handling, querying and
                    sorting functionality. The project is hosted on Heroku and I
                    invite you to have a look at the code on GitHub.
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <div className="card-links">
                <a
                  href="https://is-this-reddit.herokuapp.com/api/"
                  className="btn"
                >
                  API
                </a>
                <p className="btn">GitHub</p>
              </div>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
