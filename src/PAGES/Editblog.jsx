import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../index';
import Header from '../component/Header';

function Editblog() {
    const { blogId } = useParams();
    const [msg, setMsg] = useState('');
    const [post, setPost] = useState({ title: '', body: '' });
    const [loading, setLoading] = useState(true);
const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
            .then(response => response.json())
            .then(json => {
                setPost(json);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
                setMsg('Failed to fetch post');
                setLoading(false);
            });
    }, [blogId]);
    
    const handleUpdate = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => {
                alert('The blog has been successfully updated');
                navigate("/bloglist");
                setLoading(false);
              
            })
            .catch(error => {
                console.error('Error updating post:', error);
                setMsg('Failed to update post');
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
                    <h1>Edit Blog</h1>
                    <div className='form-container'>
                        <form onSubmit={handleUpdate}>
                            <label htmlFor='title'>Blog title</label>
                            <input
                                type='text'
                                id='title'
                                onChange={(e) => setPost({ ...post, title: e.target.value })}
                                value={post.title}
                                className='form-control'
                                placeholder='Write title'
                                title='Title'
                            /><br /><br />
                            <label htmlFor='description'>Description</label>
                            <input
                                type='text'
                                id='description'
                                onChange={(e) => setPost({ ...post, body: e.target.value })}
                                value={post.body}
                                className='form-control'
                                placeholder='Write description'
                                title='Description'
                            /><br /><br />
                            <div className='save'>
                            <button type='submit'>Update Blog</button>
                            </div>
                            
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}

export default Editblog;
