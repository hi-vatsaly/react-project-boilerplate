import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonComponent(props) {
  return (
    <Button
      variant={props.variant ? props.variant : "contained"}
      color={props.color ? props.color : "primary"}
      className={
        (props.variant === "outlined" ? `primary-button-outlined ${props.className ? props.className : ""}` : `primary-button ${props.className ? props.className : ""}`)
      }
      disabled={props.disabled === true ? true : false}
      onClick={props.click}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
    >
      {props.title}
    </Button>
  );
}
