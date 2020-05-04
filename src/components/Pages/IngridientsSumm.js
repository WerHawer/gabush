import React from "react";
import DatesIngr from "../IngrSumm/DatesIngr";
import HeaderIngr from "../IngrSumm/HeaderIngr";
import Ingridients from "../IngrSumm/Ingridients";

const IngridientsSumm = ({ date, ingridients }) => (
  <>
    <DatesIngr date={date} />
    <HeaderIngr />
    <Ingridients ingridients={ingridients} />
  </>
);

export default IngridientsSumm;
