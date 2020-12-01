import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/index";

const LoginPage = (props) => {
  const handleLogin = () => {
    props.loginUser({
      userData: {
        _id: "xxxxxxx",
        firstName: "Jane",
        lastName: "Doe",
      },
    });
  };
  return (
    <div>
      This is Login Page
      <hr />
      <button type="button" className="btn btn-success" onClick={handleLogin} >
        Login Here
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  commonReducers: state.commonReducers,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
