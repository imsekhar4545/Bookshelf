import React from 'react';
import './home.css';
import bookpg from './book.jpg';
import videoSource from './books.mp4';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='Content'>
        <div className='SubContent'>
          <h1>Book-Shelf</h1>
          <p>A best place to explore the best books</p>
          <button type='button' className='btn-outline-dark'>
            <Link to='/login'>Get started</Link>
          </button>
          <img src={bookpg} alt='profile' />
        </div>
      </div>
    </div>
  );
};

export default Home;