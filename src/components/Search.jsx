import React from 'react';
import styled from 'styled-components';

export default class Search extends React.Component {
    render() {
        const Search = styled.div`
            box-shadow: inset 0 0 10px grey;
            padding: 20px;
            margin: 20px 0;
            position: relative;

            input {
                width: 100%;
                font-size: 1.5rem;
                text-align: center;
            }
        `;

        return (
            <>  
                <h2>Search</h2>
                <Search>
                    <input
                        value={this.props.currentUser}
                        onChange={e => this.props.setUser(e.target.value)}
                    ></input>
                </Search>
            </>
        );
    }
}