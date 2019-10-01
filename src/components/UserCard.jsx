import React from 'react';
import FollowerCard from './FollowerCard';

export default class UserCard extends React.Component {
    render() {
        return (
            <div>
                <h2>User Card</h2>
                {
                    Object.keys(this.props.userData).map(key => {
                        return (
                            <div>
                                {key}: {this.props.userData[key]}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}