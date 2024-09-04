import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index';
import Header from '../component/Header';

function Addpost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();

        const blog = {
            title: title,
            body: description,
            userId: 1
        };

        setLoading(true);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setLoading(false);
                setMsg('The blog has been successfully added');
            })
            .catch(error => {
                console.error('Error adding post:', error);
                setLoading(false);
            });
    };

    return (
        <div>
            <Header />
            {loading ? (

                <div>Loading...</div>
            ) : (
                <>
                    {msg ? <div className='alert'><p>{msg}</p></div> : ''}
                    <h1>ADD NEW BLOGS</h1>
                    <div className='form-container'>
                        <form onSubmit={handlesubmit}>
                            <label>Blog title</label>
                            <input type='text' onChange={(e) => setTitle(e.target.value)} className='form-control' placeholder='write title' title='title' /><br /><br />
                            <label>Description</label>
                            <input type='text' onChange={(e) => setDescription(e.target.value)} className='form-control' placeholder='write description' name='description' id="description" title='description' /><br /><br />
                            <div className='save'><button>Save blog</button></div>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}

export default Addpost;
