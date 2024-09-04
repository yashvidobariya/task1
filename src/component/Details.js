import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';

const Details = () => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
                setLoading(false);
            });
    }, [id]);

    return (
        <>
            <Header />
            {loading ? (

                <div>Loading...</div>
            ) : (
                <>
                    <h1>Details</h1>
                    <div className="card">
                        <div className="card-header"><h5>{post.title}</h5></div>
                        <div className="card-body">
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                    <Link to='/' className='read'><button>Back</button></Link>
                </>
            )}
        </>
    );
};

export default Details;
