import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ncipad from "./Images/nc-ipad.png";
import ncipad2 from "./Images/ncipad2.png";
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
        <div class="nc-img">
          <div className="nc-header">
            <Typography
              style={{
                color: "white",
                textAlign: "center",
                margin: "2%",
              }}
              variant="p"
            >
              A Reddit style discussion board built for both web and mobile with
              a feature rich user experience. Fully responsive design built with
              React, Bootstrap and Material UI with full consideration of the
              React lifecycle and best-practice state management.
            </Typography>
          </div>

          <div className="nc-img-container">
            <div className="nc-ipad-img">
              <img src={ncipad} alt="nc news ipad"></img>
              <img src={ncipad2} alt="nc news ipad"></img>
            </div>

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
      </div>
    </div>
  );
};

export default PortfolioCard;
