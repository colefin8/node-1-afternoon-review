import React from "react";
import axios from "axios";

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.element,
      canEdit: false
    };
  }

  toggleEdit = () => {
    this.setState({ canEdit: !this.state.canEdit });
  };

  saveEdit = () => {
    this.props.handleEdit(this.props.index, this.state.text);
    this.toggleEdit();
  };

  render() {
    return (
      <div
        onDoubleClick={this.props.handleDelete}
        style={{ 
          backgroundColor: "skyblue",
           margin: "5px 0" }}
      >
        {this.state.canEdit ? (
          <div>
            <input
              value={this.state.text}
              onChange={e => {
                this.setState({ text: e.target.value });
              }}
            />
            <button onClick={this.saveEdit}>Save</button>
          </div>
        ) : (
          <div>
            <li>{this.props.element}</li>
            <button onClick={this.toggleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default ListItem;
