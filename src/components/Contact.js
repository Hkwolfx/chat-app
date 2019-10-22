import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
    };
  }
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.image} alt={this.props.image} />
        <div>
          <p className="name">{this.props.character}</p>
          <div className="status">
            <p className="status-text">
              <span
                className={
                  this.state.online ? "status-online" : "status-offline"
                }
                onClick={event => {
                  const newVal = !this.state.online;
                  this.setState({ online: newVal });
                }}
              />
              {this.state.online ? "online" : "offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
