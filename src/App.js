import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      followerList: [],
    };
  }

  setFollowerList = followerList => {
    this.setState({
      followerList: followerList,
    })
  }

  componentDidMount() {
    const userData = axios.get('https://api.github.com/users/shaunorpen');
    const followerList = axios.get('https://api.github.com/users/shaunorpen/followers');
    Promise.all([userData, followerList])
      .then(res => {
        this.setState({
          userData: res[0].data,
          followerList: res[1].data,
        })
      });
  }

  render() {
    return (
      <div className="App">
        <UserCard userData={this.state.userData} />
        <FollowerCard followerList={this.state.followerList} />
      </div>
    );
  }
}