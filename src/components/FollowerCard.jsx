import React from 'react';
import axios from 'axios';

export default class FollowerCard extends React.Component {
    render() {
        return (
            <div>
                <h2>Follower Details</h2>
                {
                    this.props.followerList.map(follower => {
                        return (
                            <div>
                                {
                                    Object.keys(follower).map(key => {
                                        return <div>{key}: {follower[key]}</div>
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}