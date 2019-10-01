import React from 'react';
import FollowerCard from './FollowerCard';
import styled from 'styled-components';

export default class UserCard extends React.Component {
    render() {
        const UserCard = styled.div`
            box-shadow: inset 0 0 10px grey;
            padding: 20px;
            margin: 20px 0;
            position: relative;

            .image-container {
                width: 15%;
                position: absolute;
                top: 20px;
                right: 20px;

                img {
                    width: 100%;
                }
            }
        `;

        return (
            <>
            <h2>User Details ({this.props.userData.name})</h2>
            <UserCard>
                <div className='image-container'>
                    <img src={this.props.userData.avatar_url} />
                </div>
                {
                    Object.keys(this.props.userData).map(key => {
                        return (
                            <div>
                                <span className='key'>{key}: </span><span className='value'>{this.props.userData[key]}</span>
                            </div>
                        );
                    })
                }
            </UserCard>
            </>
        );
    }
}