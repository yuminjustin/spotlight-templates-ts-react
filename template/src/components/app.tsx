import * as React from "react";
import * as style from '../assets/css/style.css';
class Test extends React.Component {
  state = {
    text: "Hello world! Let's react!"
  };
  render() {
    return (
      <div className={style.hw}>
        <p className={style.hw_p}>{this.state.text}</p>
        <img src="./static/image/white.png" />
      </div>
    );
  }
}

export default Test;
