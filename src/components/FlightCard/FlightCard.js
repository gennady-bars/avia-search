import React from "react";

import styles from "./FlightCard.module.css";

const FlightCard = ({ item }) => {

  const { amount, currencyCode } = item.flight.price.total;
  const { duration, segments } = item.flight.legs[0];
  const flightHours = Math.floor(+duration / 60);
  const flightMinutes = ("0" + (+duration % 60)).slice(-2);
  const { departureDate, arrivalDate } = segments[0];
  const departureHour = ("0" + new Date(departureDate).getHours()).slice(-2);
  const departureMinutes = ("0" + new Date(departureDate).getMinutes()).slice(-2);
  
  const options = {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  };
  const localeDeparture = new Date(departureDate).toLocaleString("ru", options)
  const localeArrival = new Date(+new Date(arrivalDate) + +duration * 60 * 1000).toLocaleString("ru", options)


  const arrivalHour = ("0" + new Date(arrivalDate).getHours()).slice(-2);
  const arrivalMinutes = ("0" + new Date(arrivalDate).getMinutes()).slice(-2);

  return (
    <div className={styles.FlightCard}>
      <div className={styles.cardHeader}>
        <div>
          <span>
            {amount} {currencyCode}
          </span>{" "}
          <br />
          <small>Стоимость для одного взрослого пассажира</small>
        </div>
      </div>

      <div className={styles.cardBody}>
        <p>Москва, Домодедово (DME) &#8594; Лондом, Станстед (STN)</p>
        <hr />
        <div className={styles.time}>
          <span>{`${departureHour}:${departureMinutes}`} <small>{localeDeparture}</small></span>
          <span>&#9716; {`${flightHours} ч ${flightMinutes} мин`}</span>
          <span><small>{localeArrival}</small> {`${arrivalHour}:${arrivalMinutes}`}</span>
        </div>

        <p>Рейс выполняет: {item.flight.carrier.airlineCode}</p>
      </div>

      <div className={styles.cardButton}>
        <span>ВЫБРАТЬ</span>
      </div>
    </div>
  );
};

export default FlightCard;
