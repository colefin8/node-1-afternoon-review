import React from "react";
import ListItem from "./ListItem";
import axios from "axios";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: []
    };
  }

  componentDidMount = () => {
    //TODO axios.get request goes here
    axios
      .get("/api/list")
      .then(response => {
        this.setState({ list: response.data });
      })
      .catch(error => console.log("get request error: " + error));
  };

  handleEdit = (index, text) => {
    axios
      .put(`/api/list/${index}`, { text })
      .then(response => {
        this.setState({ list: response.data });
      })
      .catch(error => console.log("put error: " + error));
  };

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    let text = e.target.children[0].value;
    //TODO axios.post request goes here
    axios
      .post("/api/list", { text })
      .then(response => {
        this.setState({ list: response.data, input: "" });
      })
      .catch(error => console.log("post error: " + error));
  };

  handleDelete = index => {
    //TODO axios.delete request goes here
    axios
      .delete(`/api/list/${index}`)
      .then(response => {
        this.setState({ list: response.data, input: "" });
      })
      .catch(error => console.log("delete error: " + error));
  };

  render() {
    const array = this.state.list.map((element, index) => (
      <ListItem
        key={element + index}
        index={index}
        element={element}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />
    ));
    console.log(this.state.list);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
          />
        </form>
        <ul style={{ listStyle: "none" }}>{array}</ul>
      </div>
    );
  }
}

export default List;
