import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(entry) {
    console.log(entry);

    const response = await axios.get(
      `https://pixabay.com/api/?key=29247103-26b0f9d5bf8b5aa2371184978&q=${entry}&image_type=photo`
    );

    this.setState({ images: response.data.hits });
    console.log(this.state.images);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
