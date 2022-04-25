import React, { Component } from 'react'
import './style.css';
import './fontawesome/css/all.css'
import axios from 'axios';

export class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            title: '',
            body: ''
        }
    }

    changeHandeler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandeler = s => {
        s.preventDefault();
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { id, title, body } = this.state;
        return (
            <div className='container p-4'>
                <form onSubmit={this.submitHandeler}>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>
                            <i className="fa-solid fa-user"></i>
                        </span>
                        <input type='text' className='form-control' name='id' value={id} placeholder='Id' onChange={this.changeHandeler}></input>
                    </div>

                    <div className='input-group mb-3'>
                        <span className='input-group-text'>
                            <i className="fa-brands fa-adversal"></i>
                        </span>
                        <input type='text' className='form-control' name='title' value={title} placeholder='Title' onChange={this.changeHandeler}></input>
                    </div>

                    <div className='input-group mb-3'>
                        <span className='input-group-text'>
                            <i className="fa-solid fa-comment-dots"></i>
                        </span>
                        <input type='text' className='form-control' name='body' value={body} placeholder='Name' onChange={this.changeHandeler}></input>
                    </div>
                    <button className='btn btn-success' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm