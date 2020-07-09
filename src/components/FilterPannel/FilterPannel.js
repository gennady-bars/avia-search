import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import styles from "./FilterPannel.module.css";
import { searchSorted, searchFiltered } from "../../redux/actions/searchAction";

const FilterPannel = ({ searchSorted, searchFiltered }) => {
  const hash = Math.random();
  const [sorted, setSorted] = useState("");
  const [noTransfer, setNoTransfer] = useState(false);
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const onRadioChange = (e) => {
    setSorted(e.target.value);
  };

  useEffect(() => {
    if (sorted) {
      searchSorted(sorted);
    }
  }, [sorted, searchSorted]);

  useEffect(() => {
    searchFiltered({ noTransfer, from: Number(from), to: Number(to) });
  }, [noTransfer, from, to, searchFiltered]);

  return (
    <div className={styles.FilterPannel}>
      <div>
        <h3>Сортировать</h3>
        <label htmlFor={`up-${hash}`}>
          <input
            onChange={onRadioChange}
            checked={sorted === "up"}
            type="radio"
            // name="sort"
            id={`up-${hash}`}
            value={"up"}
          />
          - по возрастанию цены
        </label>{" "}
        <br />
        <label htmlFor={`down-${hash}`}>
          <input
            onChange={onRadioChange}
            checked={sorted === "down"}
            type="radio"
            // name="sort"
            id={`down-${hash}`}
            value={"down"}
          />
          - по убыванию цены
        </label>{" "}
        <br />
        <label htmlFor={`time-${hash}`}>
          <input
            onChange={onRadioChange}
            checked={sorted === "time"}
            type="radio"
            // name="sort"
            id={`time-${hash}`}
            value={"time"}
          />
          - по времени в пути
        </label>{" "}
        <br />
      </div>

      <div>
        <h3>Фильтровать</h3>
        <label htmlFor={`transfer-${hash}`}>
          <input
            onChange={(e) => setNoTransfer(e.target.checked)}
            type="checkbox"
            name="transfer"
            id={`transfer-${hash}`}
          />
          - без пересадок
        </label>

        <h3>Цена</h3>
        <label htmlFor={`from-${hash}`}>
          От <input type="number" onChange={(e) => setFrom(e.target.value)} value={from} name="price-from" id={`from-${hash}`} />
        </label>
        <br />
        <label htmlFor={`till-${hash}`}>
          До <input type="number" onChange={(e) => setTo(e.target.value)} value={to} name="price-till" id={`till-${hash}`} />
        </label>
        <br />
      </div>
    </div>
  );
};

export default connect(null, { searchSorted, searchFiltered })(FilterPannel);
