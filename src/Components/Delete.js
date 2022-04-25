import React, { Component } from 'react'
import axios from 'axios';

export class Delete extends Component {
    submithandeler = s => {
        const data = {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident",
            body: "quia et suscipit"
        }
        console.log(data);
        s.preventDefault();
        axios.delete('https://jsonplaceholder.typicode.com/posts/1', data)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })

    }
    render() {
        return (
            <div>
                <button type='submit' className='btn btn-danger mb-5 mt-2' onSubmit={this.submithandeler}>Delete</button>
            </div>
        )
    }
}

export default Delete