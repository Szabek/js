import React from "react";

class Alert extends React.Component {
    render() {
        return  <div className="alert alert-danger" role="alert">
                    {this.props.description}
                </div>;
    }
}

export default Alert;
