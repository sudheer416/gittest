import GifState from "../../Context/GifState";

const GifSearch = () => (
  <GifState.Consumer>
    {(value) => {
      const { gifstate } = value;
      console.log(gifstate);
      return <div>{gifstate ? <h1>hello</h1> : console.log("dee")}</div>;
    }}
  </GifState.Consumer>
);

export default GifSearch;
