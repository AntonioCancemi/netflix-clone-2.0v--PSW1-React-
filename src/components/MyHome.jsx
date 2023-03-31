import { Component } from "react";
import MyGallery from "./MyGallery";

class Home extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <MyGallery query="Avengers" />
        <MyGallery query="harry potter" />
        <MyGallery query="Spider-man" />
      </>
    );
  }
}
export default Home;
