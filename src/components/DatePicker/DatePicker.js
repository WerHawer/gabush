import React from "react";

const DatePicker = ({ value, onChange }) => (
  <div className="datePickerWrapper">
    <input type="text" id="dataPicker" style={{ display: "none" }} />
  </div>
);
export default DatePicker;
