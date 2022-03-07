import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    // backgroundImage: "url(./banner.jpg)",
    backgroundImage: "url(./currency-basket.webp)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  bannerContent: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Currency Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            Keep track of information about currencies
          </Typography>
          <Carousel />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
