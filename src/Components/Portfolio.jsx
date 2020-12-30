import React from "react";
import PortfolioCard from "./PortfolioCard";
import Typography from "@material-ui/core/Typography";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <Typography
          style={{
            color: "#d25b43",
            textAlign: "right",
            margin: "2%",
          }}
          variant="h4"
        >
          Portfolio
        </Typography>
        {/* <div className="portfolio"> */}
        <PortfolioCard></PortfolioCard>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
