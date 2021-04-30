import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import Error from "./Error";
class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderBody() {
    if (this.state.errorMessage && !this.state.lat) {
      return <Error errorMessage={this.state.errorMessage} />;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    } else
      return (
        <div>
          <Loader message="Please accept Location request" />
        </div>
      );
  }

  render() {
    return <div>{this.renderBody()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
