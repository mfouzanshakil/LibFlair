import { Component } from "react";
import MyNavBar from "./UserNavBar";
import "./Styling.css";

class MyLoans extends Component {
  state = {
    accession1: "1",
    title1: "abc",
    edition1: "12th",
    due_date1: "12",
    due_month1: "June",
    due_year1: "2022",
    accession2: "2",
    title2: "def",
    edition2: "10th",
    due_date2: "12",
    due_month2: "Sept",
    due_year2: "2022",
    accession3: "3",
    title3: "ghi",
    edition3: "2nd",
    due_date3: "12",
    due_month3: "Dec",
    due_year3: "2022",
  };
  render() {
    return (
      <div>
        <MyNavBar />
        <div style={{ backgroundColor: "#9398bb", height: "530px" }}>
          <br />
          <br />
          <div id="tableLoans">
            <table class="table" style={{ border: "1px solid black" }}>
              <thead>
                <tr>
                  <th scope="col">Accession #</th>
                  <th scope="col">Title</th>
                  <th scope="col">Edition</th>
                  <th scope="col">Due Until</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{this.state.accession1}</th>
                  <td>{this.state.title1}</td>
                  <td>{this.state.edition1}</td>
                  <td>
                    {this.state.due_date1}-{this.state.due_month1}-
                    {this.state.due_year1}
                  </td>
                </tr>
                <tr>
                  <th scope="row">{this.state.accession2}</th>
                  <td>{this.state.title2}</td>
                  <td>{this.state.edition2}</td>
                  <td>
                    {this.state.due_date2}-{this.state.due_month2}-
                    {this.state.due_year2}
                  </td>
                </tr>
                <tr>
                  <th scope="row">{this.state.accession3}</th>
                  <td>{this.state.title3}</td>
                  <td>{this.state.edition3}</td>
                  <td>
                    {this.state.due_date3}-{this.state.due_month3}-
                    {this.state.due_year3}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default MyLoans;
