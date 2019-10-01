import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class FollowerCard extends React.Component {
    render() {
        const FollowerCard = styled.div`
            box-shadow: inset 0 0 10px grey;
            padding: 20px;
            margin: 20px 0;
        `;

        return (
            <div>
                <h2>Follower Details ({this.props.followerList.length})</h2>
                {
                    this.props.followerList.map(follower => {
                        return (
                            <FollowerCard>
                                {
                                    Object.keys(follower).map(key => {
                                        return <div><span className='key'>{key}: </span><span className='value'>{follower[key]}</span></div>
                                    })
                                }
                            </FollowerCard>
                        );
                    })
                }
            </div>
        );
    }
}