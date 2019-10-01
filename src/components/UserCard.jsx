import React from 'react';
import FollowerCard from './FollowerCard';
import styled from 'styled-components';

export default class UserCard extends React.Component {
    render() {
        const UserCard = styled.div`
            box-shadow: inset 0 0 10px grey;
            padding: 20px;
            margin: 20px 0;
        `;

        return (
            <>
            <h2>User Details ({this.props.userData.name})</h2>
            <UserCard>
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