import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ncipad from "./Images/nc-ipad.png";
import ncmob from "./Images/nc-mobile.png";
const useStyles = makeStyles((theme) => ({
  root: {
    // width: "90%",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),

    fontSize: "12px",
    textDecoration: "none",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textAlign: "center",
  },
}));

const PortfolioCard = () => {
  const classes = useStyles();
  return (
    <div className="nc-container">
      <Typography
        style={{
          color: "#d25b43",
          textAlign: "center",
          margin: "2%",
        }}
        variant="h4"
      >
        NC News
      </Typography>
      <div>
        <div className="treat-container-header">
          <div className={classes.root}>
            {/* <Accordion>
              <AccordionSummary
                style={{
                  background: "#2d3447",
                  color: "white",
                  textAlign: "center",
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>More Info</Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{ background: "#2d3447", color: "white" }}
              >
                <Typography>
                  Treat Your Shelf is a book swapping app designed to encourage
                  reading and facilitate sharing amongst local communities.{" "}
                  <br></br>
                  <br></br>Users can add their unused books to a virtual
                  bookshelf through an ISBN barcode scanner, view available
                  books in their area, then arrange a swap through an in-built
                  messenger. <br></br>A key element of the project was using
                  {""}
                  <span> agile practices;</span> Kanban boards for planning,
                  daily stand-ups, ‘mobbing’ on issues as a team and
                  <span> pair-programming.</span> We implemented technologies
                  not covered on the course, such as{" "}
                  <span>React Hooks & Contexts</span>, React Webcam Barcode
                  Scanner, Geocode,
                  <span> Firebase Authentication & Firestore.</span> Firebase
                  Authentication & Firestore. We designed a restful API with
                  Express and Postgress.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
          </div>
        </div>
        <div class="nc-img">
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              margin: "2%",
            }}
            variant="p"
          >
            A Reddit style discussion board built for both web and mobile with a
            feature rich user experience. Fully responsive design built with
            React, Bootstrap and Material UI with full consideration of the
            React lifecycle and best-practice state management.
          </Typography>
          <div className="nc-img-container">
            <img src={ncipad} alt="nc news ipad"></img>
            <div className="nc-btn">
              <a href="https://github.com/clsfoy/nc-news" className="btn-nc">
                View GitHub - Frontend
              </a>
              <a href="https://github.com/clsfoy/be-nc-news" className="btn-nc">
                View GitHub - Backend
              </a>
              <a href="https://charlie-nc-news.netlify.app/" className="btn-nc">
                View on the web
              </a>
              <a
                href="https://is-this-reddit.herokuapp.com/api/"
                className="btn-nc"
              >
                API
              </a>
            </div>
          </div>
        </div>
        {/* <div className="portfolio-card">
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
                    mobile with a feature rich user experience. Fully responsive
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
        </div> */}
        {/* <div className="portfolio-card">
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
        </div> */}
      </div>
    </div>
  );
};

export default PortfolioCard;
