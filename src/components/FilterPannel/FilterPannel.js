import React from "react";

import styles from "./FilterPannel.module.css";

const FilterPannel = (props) => {
  const hash = Math.random();
  return (
    <div className={styles.FilterPannel}>
      <div>
        <h2>Сортировать</h2>
        <label htmlFor={`up-${hash}`}>
          <input type="radio" name="sort" id={`up-${hash}`} />- по возрастанию
          цены
        </label>{" "}
        <br />
        <label htmlFor={`down-${hash}`}>
          <input type="radio" name="sort" id={`down-${hash}`} />- по убыванию
          цены
        </label>{" "}
        <br />
        <label htmlFor={`time-${hash}`}>
          <input type="radio" name="sort" id={`time-${hash}`} />- по времени в
          пути
        </label>{" "}
        <br />
      </div>

      <div>
        <h2>Фильтровать</h2>
        <label htmlFor={`transfer-${hash}`}>
          <input type="checkbox" name="sort" id={`transfer-${hash}`} />- без
          пересадок
        </label>

        <h2>Цена</h2>
        <label htmlFor={`from-${hash}`}>
          От <input type="text" name="sort" id={`from-${hash}`} />
        </label>
        <br />
        <label htmlFor={`till-${hash}`}>
          До <input type="text" name="sort" id={`till-${hash}`} />
        </label>
        <br />
      </div>
    </div>
  );
};

export default FilterPannel;
