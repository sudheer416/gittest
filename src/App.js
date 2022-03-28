import AddPostSection from "./Components/AddPostSection";
import GifState from "./Context/GifState";
import Getgifs from "./Components/Getgifs";
import Search from "./Components/Search";
import GifSearch from "./Components/GifSearch";
import "./App.css";

import GifSearch from "./Components/GifSearch";

function App() {
  const gifstate = false;

  return (
    <GifState.Provider value={{ gifstate }}>
      <AddPostSection />
      <GifSearch />
      <Search />
    </GifState.Provider>
  );
}

export default App;
