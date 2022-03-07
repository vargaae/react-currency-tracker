import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { TrendingCurrencies } from "../../config/api";
import { CurrencyState } from "../../CurrencyContext";
import AliceCarousel from "react-alice-carousel";

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    texTransform: "uppercase",
    color: "white",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    background: "rgba(0, 0, 100, 0.6)",
    borderRadius: "1rem"
  },
}));

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const classes = useStyles();

  const { currency, symbol } = CurrencyState();

  const fetchTrendingCurrencies = async () => {
    const { data } = await axios.get(TrendingCurrencies(currency));

    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCurrencies();
  }, [currency]);

  const responsive = {
    0: { items: 2 },
    512: { items: 4 },
  };

  const items = trending.map((currency) => {
    let profit = currency.price_change_percentage_24h >= 0;

    return (
      <Link className={classes.carouselItem} to={`/coins/${currency.id}`}>
        <img
          src={currency?.image}
          alt={currency.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {currency?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {currency?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(currency?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={1500}
        animationType="fadeout"
        infinite
      />
    </div>
  );
};

export default Carousel;
