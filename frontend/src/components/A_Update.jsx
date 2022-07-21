import MyNavBar from "./AdminNavbar";
import "./Styling.css";

const Update = () => {
  return (
    <div>
      <div id="greyBackgroundColor">
        <MyNavBar />
        <center>
          <div style={{ width: "400px" }}>
            <form>
              <h3 style={{ marginTop: "80px", color: "#150e56" }}>
                Update existing record:
              </h3>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ISBN"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Date of publication"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Edition"
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-secondary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Update;
