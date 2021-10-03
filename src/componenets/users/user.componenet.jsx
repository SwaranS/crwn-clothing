import React from "react";
import PropTypes from "prop-types";

import MenuItem from "../menu-items/menu-items.componenet";

class Users extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    {console.log(this.props.match.params.userId)}
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
            
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(items)
      return (
        
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.email} {item.first_name}
            </li>
          ))}
        </ul>
      );
    }}
}

export default Users;
