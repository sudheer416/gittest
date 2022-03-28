import { Component } from "react";
import "./index.css";

class Getgifs extends Component {
  state = {
    input: "",
    trending: false,
  };
  changeInput = (e) => {
    this.setState({ input: e.target.value });
    // this.getGifs(upatedUrl);

    this.getGifs();
  };

  componentDidMount() {
    this.getGifs(this.state.fetchUrl);
    this.setState({ trending: true });
  }

  getGifs = async () => {
    const option = {
      method: "GET",
    };
    const { trending, input } = this.state;
    if (trending) {
      console.log("fetching");
      const url =
        "https://api.giphy.com/v1/gifs/search?api_key=8hDWDM9OJJbuSR9UCNjz6fVyGRcAv4HM&limit=20&offset=10&q=";
      const upUrl = url + input;
      console.log(upUrl);
      const response = await fetch(upUrl, option);
      const data = await response.json();
      if (response.ok) {
        this.setState({ gifList: data.data });
        //     const setlist = data.data.map((gif) => {
        //       return gif.image;
        //     });
        //
      }
    } else {
      const url =
        "https://api.giphy.com/v1/gifs/trending?api_key=8hDWDM9OJJbuSR9UCNjz6fVyGRcAv4HM&limit=20&offset=10";
      const upUrl = url + input;
      console.log(upUrl);
      const response = await fetch(upUrl, option);
      const data = await response.json();
      if (response.ok) {
        this.setState({ gifList: data.data });
        // const setlist = data.data.map((gif) => {
        //   return gif.image;
        // });
      }
    }
  };

  renderGifs = (setgilist) => {
    return (
      <div className="gif-list">
        {setgilist.map((gif) => {
          return <img className="img" src={gif.fixed_height.url} />;
        })}
      </div>
    );
  };

  render() {
    const { gifList } = this.state;
    // const list=gifList
    // console.log(list,typeof list)
    let setgilist = [];
    for (const key in gifList) {
      if (gifList.hasOwnProperty(key)) {
        const element = gifList[key];

        setgilist.push(element.images);
      }
    }
    console.log(setgilist);

    return (
      <div className="gif_div">
        <input
          type="search"
          value={this.state.input}
          onChange={this.changeInput}
        />
        {this.renderGifs(setgilist)}
      </div>
    );
  }
}

export default Getgifs;
