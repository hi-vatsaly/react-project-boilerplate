import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/index";
import Label from "../../components/label";
import Button from "../../components/button";
import DeleteIcon from "@material-ui/icons/Delete";

class HomePage extends Component {
  handleLogout = async () => {
    await this.props.logoutUser();
  };

  render() {
    return (
      <div className="container-fluid p-5">
        This is Home page after Login
        <Button
          title="Logout"
          className="ml-3 mb-3"
          click={this.handleLogout}
        />
        <div className="w-100 border-bottom"></div>
        <div className="row">
          {/* Labels */}
          <div className="col-sm-3 mt-3">
            <Label title="Regular Label" />
            <br />
            <Label title="Light Label" className="light" />
            <br />
            <Label title="Extra Small Label" className="ex-small" />
            <br />
            <Label title="Small Label" className="small" />
            <br />
            <Label title="Large Small Label" className="large" />
            <br />
            <Label title="Big Label" className="big" />
            <br />
            <Label title="Grey Label" className="grey" />
            <br />
            <Label title="Dark Grey Label" className="dark-grey" />
            <br />
            <Label title="Error Label" className="error" />
            <br />
            <Label title="Text-Shadow Label" className="text-shadow" />
            <br />
            <Label
              title="Required Label"
              className="text-shadow"
              required={true}
            />
            <br />
            <Label title="Thin Label" className="thin-font" required={true} />
            <br />
            <Label
              title="Semi Bold Label"
              className="semi-bold-font"
              required={true}
            />
            <br />
            <Label title="Bold Label" className="bold-font" required={true} />
          </div>

          {/* Buttons */}
          <div className="col-sm-3 mt-3">
            <Button title="Normal Button" /> <br />
            <Button title="Normal Disabled Button" disabled={true} /> <br />
            <Button title="Grey Button" className="grey" />
            <br />
            <Button
              title="Grey Disabled Button"
              className="grey"
              disabled={true}
            />
            <br />
            <Button title="Block Button" className="btn-block" /> <br />
            <Button title="Red Button" className="red" /> <br />
            <Button
              title="Left Icon Button"
              className="red"
              startIcon={<DeleteIcon />}
            />
            <br />
            <Button
              title="Left Icon Button"
              className="red"
              endIcon={<DeleteIcon />}
            />
            <br />
            <Button className="only-icon" startIcon={<DeleteIcon />} />
            <br />
            <Button title="Normal Button" variant="outlined" /> <br />
            <Button
              title="Normal Button"
              variant="outlined"
              disabled={true}
            />{" "}
            <br />
            <Button
              title="Normal Button"
              variant="outlined"
              className="grey"
            />{" "}
            <br />
            <Button
              title="Normal Button"
              variant="outlined"
              className="red"
            />{" "}
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
