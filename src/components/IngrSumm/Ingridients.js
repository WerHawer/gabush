import React from "react";
import IngridientsEl from "./IngridientsEl";

const Ingridients = ({ ingridients }) => {
  const ingrKeys = Object.keys(ingridients).sort((a, b) =>
    a.localeCompare(b, "ru")
  );

  return (
    <>
      <ul className="menu-info__list ingr__list">
        {ingrKeys.length > 0 ? (
          ingrKeys.map((el) => (
            <IngridientsEl key={el} el={el} ingridients={ingridients} />
          ))
        ) : (
          <li>No active orders</li>
        )}
      </ul>
    </>
  );
};

export default Ingridients;
