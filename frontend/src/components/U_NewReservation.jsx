import MyNavBar from "./UserNavBar";
import "./Styling.css";
import MyCard from "./MyCardFFC";

const NewReservation = () => {
  return (
    <div>
      <MyNavBar />
      <div style={{backgroundColor: "#9398bb", width:"100%"}}>
        <div className="row" style={{padding: "20px 20px 20px 20px", width:"100%"}}>
          <div className="col-4"><MyCard/></div>
          <div className="col-4"><MyCard/></div>
          <div className="col-4"><MyCard/></div>
        </div>
      </div>
    </div>
  );
};

export default NewReservation;
