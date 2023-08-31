import React from 'react';
import './about.css';

const Aboutus = ()=>{
    return(
        <div className='about-sections'>
            <div className='about-section'>
             <h1>Who We Are?</h1>
             <p>Bookshelf is the worlds biggest book collection site, provides the free digital books to the users of the bookshelf</p>
            </div>
            <div className='Review'>
                <h1>Review Guidelines</h1>
                <p>Bookshelf has some of the best book reviews anywhere. Our members are passionate, knowledgeable readers, and their contributions to the site are what make it such a vibrant and fun place. These guidelines are presented to help make sure Bookshelf’s reviews remain the best and most authentic in the world.</p>
            </div>
            <div className='bookshelf-contact'>
                <h1>Contact Details</h1>
                <li>Bookshelf Private Limited Company</li>
                <br/>
                <li>Mumbai-India</li>
                <br/>
                <li>care@bookshelf.in</li>
                <br/>
                <li>www.bookshelf.in</li>
            </div>
        </div>
)
}

export default Aboutus;