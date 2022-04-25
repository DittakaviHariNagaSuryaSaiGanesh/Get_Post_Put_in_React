import React, { Component } from 'react';
import './style.css';
import './fontawesome/css/all.css'
import axios from 'axios';

export class PutTest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userid: '',
            title: '',
            body: ''
        }
    }

    changeHandeler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandeler = s => {
        s.preventDefault();
        console.log(this.state);
        axios.put('https://jsonplaceholder.typicode.com/posts/1', this.state)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { userid, title, body } = this.state;
        return (
            <div className='container mt-5'>
                <form onSubmit={this.submitHandeler}>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <input type='text' className='form-control' placeholder='UserId' name='userid' value={userid} onChange={this.changeHandeler}></input>
                    </div>

                    <div className='input-group mb-3'>
                        <span className='input-group-text '>
                            <i className="fa-brands fa-adversal"></i>
                        </span>
                        <input type='text' className='form-control' placeholder='title' name='title' value={title} onChange={this.changeHandeler}></input>
                    </div>

                    <div className='input-group mb-3'>
                        <span className='input-group-text '>
                            <i className="fa-solid fa-comment-dots"></i>
                        </span>
                        <input type='text' className='form-control' placeholder='body' name='body' value={body} onChange={this.changeHandeler}></input>
                    </div>
                    <button type='submit' className='btn btn-success mb-5'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PutTest