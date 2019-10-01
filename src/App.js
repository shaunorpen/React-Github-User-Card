import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/shaunorpen')
      .then(res => {
        this.setState({
          userData: res.data,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <UserCard userData={this.state.userData} />
      </div>
    );
  }
}