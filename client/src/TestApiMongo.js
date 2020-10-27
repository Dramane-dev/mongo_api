import React, { Component } from 'react'
import axios from 'axios';

class TestApiMongo extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3030/users`)
            .then(res => {
                const users = res.data.result;
                console.log(users)
                this.setState({ users });
            });
    }
    render() {
        return (
            <div className="usersList">
                <h1>List Of Users : </h1>
                { this.state.users.map((user, index) => (
                    <article key={index}>
                        <p>Name : {user.name}</p>
                        <p>Age : {user.age}</p>
                        <p>Favorite Movies : {user.movie}</p>
                    </article>
                ))}
            </div>
        );
    }
    
}

export default TestApiMongo
