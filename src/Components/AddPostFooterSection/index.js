import "./index.css";
const AddPostFooterSection = () => (
  <>
    <div className="footer">
      <button>
        <i class="lock icon"></i>
        <select>
          <option>Only me</option>
        </select>
      </button>
      <button className="btn-post">Post</button>
    </div>
  </>
);

export default AddPostFooterSection;
