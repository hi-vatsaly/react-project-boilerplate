import React, { Fragment } from "react";

export default function Label(props) {
  return (
    <Fragment>
      <label htmlFor={props.for ? props.for : ""} className={props.className ? `primary-label ${props.className}`: "primary-label"}>
        {props.title ? props.title : ""}
      </label>
      <sup className={props.required === true ? "asterisk" : "d-none"}>*</sup>
    </Fragment>
  );
}
