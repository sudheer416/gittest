import "./index.css";
import AddPostSectionHeader from "../AddPostSectionHeader";
import PostComposeSection from "../PostComposeSection";
import AddPostFooterSection from "../AddPostFooterSection";
import GifState from "../../Context/GifState";
import Getgifs from "../Getgifs/index";
const AddPostSection = () => (
  <GifState.Consumer>
    {(value) => {
      const { gifstate } = value;
      console.log(gifstate);
      return (
        <div>
          <div className="add-post-section-card">
            <AddPostSectionHeader />
            <PostComposeSection />
            <AddPostFooterSection />
            {gifstate ? <Getgifs /> : console.log("dee")}
          </div>
        </div>
      );
    }}
  </GifState.Consumer>
);

export default AddPostSection;
