import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
//Redux
import { connect } from "react-redux";
import { handleSingIn } from "../actions/singActions";

class SingIn extends Component {
  state = {
    loading: false
  };
  userRef = React.createRef();
  passwordRef = React.createRef();
  componentWillUnmount() {
    this.setState({
      loading: false
    });
  }
  swalFire = title => {
    return Swal.fire({
      type: "error",
      title: "Oops...",
      text: title
    });
  };

  alertFail = success => {
    console.log(this.props.succes);
    if (success === 401) {
      return this.swalFire("Usuario o clave invalida!");
    } else if (success === 404) {
      return this.swalFire("problemas de coneccion con el servidor");
    }
  };

  singInSubmit = async e => {
    console.log(this.props.succes);

    e.preventDefault();
    this.setState({
      loading: true
    });
    console.log("paso");

    const username = this.userRef.current.value;
    const password = this.passwordRef.current.value;
    const data = {
      username,
      password
    };
    await this.props.handleSingIn(data);
    this.alertFail(this.props.succes);
  };

  render() {
    let loadin = null;
    if (this.state.loading)
      loadin = (
        <div className="text-center">
          <div class="spinner-grow" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );

    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft"
            data-wow-delay="0.3s"
          >
            <h1 className="h1-responsive font-weight-bold mt-sm-5">SingIn</h1>
            <h2>{this.props.succes}</h2>
            <hr className="hr-light" />
            <h6 className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              repellendus quasi fuga nesciunt dolorum nulla magnam veniam
              sapiente, fugiat! Commodi sequi non animi ea dolor molestiae iste.
            </h6>
            <Link to="/SingUp">
              {" "}
              <button className="btn btn-outline-white">Registrate</button>
            </Link>
          </div>

          <div
            className="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight"
            data-wow-delay="0.3s"
          >
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.singInSubmit}>
                  <div className="md-form mt-md-4">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      autoComplete="username email"
                      ref={this.userRef}
                    />
                    <label htlmfor="exampleInputEmail1">Email address</label>
                  </div>
                  <div className="md-form mt-md-4">
                    <input
                      type="password"
                      className="mt-md-5 form-control"
                      id="exampleInputPassword1"
                      autoComplete="current-password"
                      ref={this.passwordRef}
                    />
                    <label htlmfor="exampleInputPassword1">Password</label>
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htlmfor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              </div>
              {loadin}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    succes: state.userData.user.success
  };
};
export default connect(
  mapStateToProps,
  { handleSingIn }
)(SingIn);
