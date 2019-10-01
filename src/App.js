import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

import './css/reset.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      followerList: [],
    };
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
    const App = styled.div`
      max-width: 800px;
      margin: 20px auto;
      box-shadow: 0 0 10px grey;
      padding: 20px;

      h2 {
        font-size: 2rem;
      }

      .key {
        display: inline-block;
        width: 20%;
        text-align: right;
        color: grey;
    }

    .value {
        display: inline-block;
        width: 70%;
        padding-left: 20px;
    }
    `;

    return (
      <App>
        <UserCard userData={this.state.userData} />
        <FollowerCard followerList={this.state.followerList} />
      </App>
    );
  }
}