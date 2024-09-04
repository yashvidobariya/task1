import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    function cut(str, n) {
        return str.length > n ? str.slice(0, n - 1) + '...' : str;
    }

    return (
        <>
    <Header />
    <div className="row">
     <div className="bg-div">
     </div>
     <p>Kirtan's Blogs</p>
     <h1> Your Source for Fresh Perspectives</h1>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <div className="grid-container">
              {posts.map((post, index) => (
                    <div className="grid-item" key={post.id}>
                        <div className="card-container">
                        <img 
              src={
                index % 2 === 1
                  ? "/image/blog1.jpg" 
                  : index % 6 === 4 || index % 6 === 5
                  ? "/image/blog2.jpg"
                  : index % 3 === 0
                  ? "/image/blog.jpg"
                  : "/image/blog3.jpg"
              } 
              alt={`Post ${post.id}`} 
            />
                            <div className="card-header">
                                <h5>{post.title}</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{cut(post.body, 100)}</p>
                                <Link to={`/read/${post.id}`} className='post-link'>Read more</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
    <Footer />
</>

    );
};

export default Home;
