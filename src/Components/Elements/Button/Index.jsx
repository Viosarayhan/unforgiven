import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({
  children = "Lorem",
  href,
  to,
  onClick,
  classname = "bg-black",
  type = "button",
  ...rest
}) => {
  // Memilih tipe elemen yang akan digunakan berdasarkan props yang diberikan
  const Component = to ? Link : href ? "a" : "button";

  // Menentukan commonProps yang akan digunakan untuk button, anchor, atau link
  const commonProps = {
    className: `h-10 px-6 font-semibold rounded-full font-sans ${classname}`,
    onClick,
    ...rest,
  };

  // Menambahkan atribut khusus sesuai tipe elemen
  if (Component === "button") {
    commonProps.type = type;
  }

  if (Component === "a") {
    commonProps.href = href;
  }

  if (Component === Link) {
    commonProps.to = to;
  }

  return <Component {...commonProps}>{children}</Component>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  classname: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;
