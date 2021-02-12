import { type } from "os";
import React, { InputHTMLAttributes } from "react";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password";
  name: string;
  label: string;
  labelPosition?: "top" | "left";
}

const divStyle = {
  display: "flex",
  margin: "4px",
};

const inputStyle = {
  height: "23px",
  lineHeight: "18px",
  padding: "2px",
  fontSize: "16px",
};

const Field: React.FC<FieldProps> = ({
  type,
  name,
  label,
  labelPosition = "top",
  ...rest
}) => {
  const flexDirection = labelPosition === "top" ? "column" : "row";

  return (
    <div style={{ ...divStyle, flexDirection }}>
      <label htmlFor={name}>{label}</label>
      <input id={name} style={inputStyle} type={type} {...rest} />
    </div>
  );
};

export default Field;
