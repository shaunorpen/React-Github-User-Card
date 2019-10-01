import React from 'react';
import styled from 'styled-components';

export default class FollowerCard extends React.Component {
    render() {
        const FollowerCard = styled.div`
            box-shadow: inset 0 0 10px grey;
            padding: 20px;
            margin: 20px 0;
            position: relative;
            min-height: 120px;

            .image-container {
                width: 15%;
                position: absolute;
                top: 20px;
                right: 20px;

                img {
                    width: 100%;
                    border-radius: 50%;
                }
            }
        `;

        return (
            <div>
                <h2>Follower Details ({this.props.followerList.length})</h2>
                {
                    this.props.followerList.map(follower => {
                        return (
                            <FollowerCard>
                                <div className='image-container'>
                                    <img src={follower.avatar_url} alt={follower.login} />
                                </div>
                                {
                                    Object.keys(follower).filter(key => !key.includes('url')).map(key => {
                                        return <div><span className='key'>{key}: </span>
                                        <span className='value'>{follower[key]}</span></div>
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