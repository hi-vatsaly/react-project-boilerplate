import React, { Fragment } from "react";

const DashboardLayout = (props) => {
  return (
    <Fragment>
      <div>Remove this line from Dashboard Layout</div>
      <div className="main-content">{props.children}</div>
    </Fragment>
  );
};

export default DashboardLayout;
