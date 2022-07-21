import { Component } from "react";
import MyNavBar from "./UserNavBar";
import "./Styling.css";

class Profile extends Component {
  state = {
    Photo: "https://img.icons8.com/bubbles/100/000000/user.png",
    FirstName: "Fouzan",
    LastName: "Shakil",
    LibFlairID: "12345",
    Institute: "COMSATS",
    DOB_date: "11",
    DOB_month: "Dec",
    DOB_year: "2000",
    Email: "fa19-bce-085@cuilahore.edu.pk",
    Phone: "03093245659",
  };
  render() {
    return (
      <div>
        <MyNavBar />
        <div id="bodyProfile">
          <div classNameName="page-content page-container" id="page-content">
            <div className="padding">
              <div className="row container d-flex justify-content-center">
                <div className="col-xl-8 col-md-12">
                  <div className="card user-card-full">
                    <div
                      className="row m-l-0 m-r-0"
                      style={{ height: "400px" }}
                    >
                      <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                          <div className="m-b-25">
                            <br />
                            <br />
                            <img
                              src={this.state.Photo}
                              className="img-radius"
                              alt="User-Profile-Image"
                            />
                          </div>
                          <h6 className="f-w-600">
                            {this.state.FirstName} {this.state.LastName}
                          </h6>
                          <p>LibFlair # {this.state.LibFlairID}</p>
                          <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="card-block">
                          <br />
                          <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                            Information
                          </h6>
                          <br />
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Institute</p>
                              <h6 className="text-muted f-w-400">
                                {this.state.Institute}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">DOB</p>
                              <h6 className="text-muted f-w-400">
                                {this.state.DOB_date}-{this.state.DOB_month}-
                                {this.state.DOB_year}
                              </h6>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <br />
                              <p className="m-b-10 f-w-600">Email</p>
                              <h6 className="text-muted f-w-400">
                                {this.state.Email}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <br />
                              <p className="m-b-10 f-w-600">Phone</p>
                              <h6 className="text-muted f-w-400">
                                {this.state.Phone}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
