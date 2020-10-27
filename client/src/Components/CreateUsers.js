import React from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button, Col } from "react-bootstrap";


class CreateUsers extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            movies: []
        }
    }


    handleChange = event => {
        this.setState({ name: event.target.value });
        this.setState({ age: event.target.value });
        this.setState({ movies: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name,
          age: this.state.age,
          movies: this.state.movies
        };

        axios.post(`http://localhost:3030/user`, { user })
            .then(res => {
                const users = res.config.data;
                console.log(res.config.data)
                this.setState({ users });
            });
    }

    render() {
        return (
            <div className="usersList">
                <h1>Froms : </h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name : </Form.Label>
                        <Form.Control type="text" placeholder="Enter username" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAge">
                        <Form.Label>Age : </Form.Label>
                        <Form.Control type="text" placeholder="Enter age" onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMovies">
                        <Form.Label>Movies : </Form.Label>
                        <Form.Control type="text" placeholder="Enter your favorite movies" onChange={this.handleChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> 
            </div>
        );
    }
    
}

export default CreateUsers;

