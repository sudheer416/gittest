import "./index.css";

const AddPostSectionHeader = () => (
  <>
    <div className="add-post-header">
      <div>
        <button className="btn">
          <i class="pencil alternate icon"></i>
          Compose Post
        </button>
        <button>
          <i class="images icon"></i>
          Photo/Video Album
        </button>
        <button>
          <i class="video icon"></i>Live Video
        </button>
      </div>
      <button>
        <img
          className="cancel-img"
          src="https://cdn1.iconfinder.com/data/icons/simple-basic-ui-outlined/28/X-512.png"
          alt="cancel"
        />
      </button>
    </div>
  </>
);

export default AddPostSectionHeader;
