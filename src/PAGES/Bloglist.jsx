import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';

function Bloglist() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setLoading(false);
            });
    }, []);

    function cut(str, n) {
        return str.length > n ? str.slice(0, n - 1) + '..' : str;
    }

    const handleDelete = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        })
            .then(() => {
                setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
                alert("Blog Deleted Successfully!");
            })
            .catch(error => console.error('Error deleting post:', error));
    };

    return (
        <div>
            <Header />
            <h1>Blog List</h1>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Index</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{cut(post.title, 20)}</td>
                                <td>{cut(post.body, 50)}</td>
                                <td>
                                    <div className='save'>
                                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                                        <Link to={`/Editblog/${post.id}`} className='save'>
                                            <button>Edit</button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Bloglist;
