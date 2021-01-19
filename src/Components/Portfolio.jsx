import React from "react";
import PortfolioCard from "./PortfolioCard";
import Typography from "@material-ui/core/Typography";
import book from "./Images/book.png";
import bookshelf from "./Images/bookshelf.png";
import logo from "./Images/logo.png";
import messages2 from "./Images/messages2.png";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

const Portfolio = () => {
  const classes = useStyles();
  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <div className="treat-container">
          <Typography
            style={{
              color: "#d25b43",
              textAlign: "center",
              margin: "2%",
            }}
            variant="h4"
          >
            Treat Your Shelf
          </Typography>
          <div className="treat-container-header">
            <Typography
              style={{
                color: "white",
                textAlign: "center",
                margin: "2%",
              }}
              variant="p"
            >
              Treat Your Shelf is a book swapping app designed to encourage
              reading and facilitate sharing amongst people from all walks of
              life without ever needing to pay a penny.
            </Typography>
            <div className="treat-git-btn">
              <a
                href="https://github.com/chboothby/treat-yo-shelf-BE"
                className="btn"
              >
                View GitHub - Backend
              </a>
              <a
                href="https://github.com/JC-co/treat-yo-shelf-fe"
                className="btn"
              >
                View GitHub - Frontend
              </a>
              <div className={classes.root}>
                <Accordion>
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
                    <Typography className={classes.heading}>
                      More Info
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{ background: "#2d3447", color: "white" }}
                  >
                    <Typography>
                      Treat Your Shelf is a book swapping app designed to
                      encourage reading and facilitate sharing amongst local
                      communities. <br></br>
                      <br></br>Users can add their unused books to a virtual
                      bookshelf through an ISBN barcode scanner, view available
                      books in their area, then arrange a swap through an
                      in-built messenger. <br></br>A key element of the project
                      was using
                      {""}
                      <span> agile practices;</span> Kanban boards for planning,
                      daily stand-ups, ‘mobbing’ on issues as a team and
                      <span> pair-programming.</span> We implemented
                      technologies not covered on the course, such as{" "}
                      <span>React Hooks & Contexts</span>, React Webcam Barcode
                      Scanner, Geocode,
                      <span> Firebase Authentication & Firestore.</span>{" "}
                      Firebase Authentication & Firestore. We designed a restful
                      API with Express and Postgress.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>

          <div class="treat-img">
            <img src={logo} alt="book"></img>
            <img src={bookshelf} alt="bookshelf"></img>
            <img src={book} alt="bookshelf"></img>
            <img src={messages2} alt="bookshelf"></img>
          </div>
        </div>
        <div className="separator"></div>
        <PortfolioCard></PortfolioCard>
      </div>
    </section>
  );
};

export default Portfolio;
