import React, { useEffect, useState } from "react";
import OrderListElement from "./OrderListElement";
import Input from "../UI/Input";
import flatpickr from "flatpickr";
import ConfirmDatePlugin from "flatpickr/dist/plugins/confirmDate/confirmDate";

const OrderList = ({
  menu,
  order,
  isEdit,
  onChange,
  onDelClick,
  onDateChange,
}) => {
  const allPrice = menu.reduce((acc, el) => acc + el.price * el.mount, 0);

  const [isTimegtted, setIsTimegtted] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setTimer(
      flatpickr("#dataPicker", {
        enableTime: true,
        time_24hr: true,
        dateFormat: "d.m H:i",
        plugins: [
          new ConfirmDatePlugin({
            confirmText: "ИЗМЕНИТЬ",
            theme: "light",
          }),
        ],
        onChange: (selectedDates, dateStr, instance) => {
          onDateChange(dateStr, selectedDates);
        },
      })
    );
  }, []);

  useEffect(() => {
    if (timer && isEdit) {
      timer.setDate(order.selectedDates);
    }
  }, [order]);

  return (
    <div className="orderList">
      {order && (
        <div className="orderList__order-info">
          <p className="order-info__time">
            {isEdit ? (
              <Input id="dataPicker" customClass="orderEdit-input ta-center" />
            ) : (
              `${order.date}`
            )}
          </p>
          <p className="order-info__name">
            {isEdit ? (
              <Input
                value={order.name}
                onChange={(e) => onChange(e, "name")}
                customClass="orderEdit-input ta-center"
              />
            ) : (
              `${order.name}`
            )}
          </p>
          <p className="order-info__room">
            Зал:{" "}
            {isEdit ? (
              <Input
                value={order.room}
                onChange={(e) => onChange(e, "room")}
                customClass="orderEdit-input"
              />
            ) : (
              `${order.room}`
            )}
          </p>{" "}
          <p className="order-info__guests">
            Гостей:
            {isEdit ? (
              <Input
                value={order.guests}
                onChange={(e) => onChange(e, "guests")}
                customClass="orderEdit-input"
              />
            ) : (
              Number(`${order.guests}`)
            )}
          </p>
        </div>
      )}

      <ul className="orderList-dishes-list">
        {menu.length > 0 ? (
          menu.map((el, index) => (
            <OrderListElement
              el={el}
              key={el.id}
              index={index}
              onClick={onDelClick}
            />
          ))
        ) : (
          <h2>Ни одно блюдо ещё не выбрано</h2>
        )}
      </ul>

      <p className="order-info__price">Всего: {allPrice}грн.</p>
    </div>
  );
};

export default OrderList;
