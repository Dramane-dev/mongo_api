import React from 'react'
import axios from 'axios';

class DisplayUsers extends React.Component  {
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
            <>
            <div className="usersList">
                <h1>All users : </h1>
                { this.state.users.map((user, index) => (
                    <article key={index}>
                        <p><strong>Name :</strong> {user.name}</p>
                        <p><strong>Age :</strong> {user.age}</p>
                        <p><strong>Favorite Movies :</strong> {user.movies}</p>
                    </article>
                ))}
            </div>
            </>
        );
    }
    
}

export default DisplayUsers
