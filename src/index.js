import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";
import HemisphereDisplay from "./HemisphereDisplay";

// const App = () => {
//   return (
//     <div className="ui comments">
//       <UserCard>
//         <div>Hello my name is Gentrit and i live in kosovo</div>
//       </UserCard>
//       <UserCard>
//         <SingleComment name="Gent" date="Today" text="Yeah" />
//       </UserCard>
//       <UserCard>
//         <SingleComment
//           name="tatam"
//           date="Yesterday"
//           text="Its an amazing day"
//         />
//       </UserCard>
//     </div>
//   );
// };

class App extends React.Component {
  state = { latitude: null, errorMessage: "" }; // intilizing latitude and errorMsg as null

  componentDidMount() {
    console.log("compomentDidMount");
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude }); // updating our current location latitude with setState
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("compomentDidUpdate");
  }

  render() {
    console.log(this.state);
    if (!this.state.latitude) {
      return <div>{this.state.errorMessage}</div>;
    }
    if (this.state.latitude) {
      return (
        <div>
          <HemisphereDisplay latitude={this.state.latitude} />
        </div>
      );
    } else {
      return <div>Loading....</div>;
    }
  }
}
export {};

ReactDOM.render(<App />, document.querySelector("#root"));
