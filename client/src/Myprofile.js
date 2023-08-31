import React,{useContext,useState,useEffect} from 'react'
import {store} from './App';
import { Redirect } from 'react-router';
import axios from 'axios';
import './myprofile.css';
import govt from './books/govt.jpg';
import greatbook from './books/greatbook.jpg';
import ias from './books/ias.jpeg';
import wings from './books/wings.jpg';
import geography from './books/geography.jpg';

const Myprofile = () => {
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('https://bookshelf-server-ve0m.onrender.com/myprofile',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    },[])
    if(!token){
        return <Redirect to='/login' />
    }
    return (
        <div>
            {
                data &&
            <div className='main-content'>
                <div className='welcome-section'>
                    <h1 className='heading'>Book - Shelf</h1>
                    <p>Bookshelf is the world's largest site for readers and book recommendations</p>
                    <h3 class="card-title">Welcome : {data.username}</h3>
                    <button class="btn btn-primary" onClick={() => setToken(null)}>Logout</button>
                </div>
                <div className='form-books'>
                    <div className='collection'>
                        <h1>Bookshelf - Collection</h1>
                        <div className='collection-name'>
                            <img src={govt} alt='govt'/>
                            <div className='book-info'>
                            <li className='book-name'>BookName : Indian Government</li>
                            <br/>
                            <li>Author : Ashok Mittal</li>
                            <br/>
                            <li>Price : 499</li>
                            <br/>
                            <li>URL : <a href='https://www.india.gov.in/'>The Indian Government</a></li>
                            </div>
                        </div>
                        <div className='collection-name'>
                            <img src={greatbook} alt='govt'/>
                            <div className='book-info'>
                            <li className='book-name'>BookName : Great Novels</li>
                            <br/>
                            <li>Author : Aarvee Hedge</li>
                            <br/>
                            <li>Price : 599</li>
                            <br/>
                            <li>URL : <a href='https://www.theguardian.com/books/2015/aug/17/the-100-best-novels-written-in-english-the-full-list'>The Great Novels</a></li>
                            </div>
                        </div>
                        <div className='collection-name'>
                            <img src={ias} alt='govt'/>
                            <div className='book-info'>
                            <li className='book-name'>BookName : UPSC BOOKS</li>
                            <br/>
                            <li>Author : Nitish Roy</li>
                            <br/>
                            <li>Price : 699</li>
                            <br/>
                            <li>URL : <a href='https://byjus.com/free-ias-prep/upsc-books/'>The Achiever IAS</a></li>
                            </div>
                        </div>
                        <div className='collection-name'>
                            <img src={wings} alt='govt'/>
                            <div className='book-info'>
                            <li className='book-name'>BookName : Indian Government</li>
                            <br/>
                            <li>Author : Dr.APJ</li>
                            <br/>
                            <li>Price : 799</li>
                            <br/>
                            <li>URL : <a href='https://en.wikipedia.org/wiki/Wings_of_Fire_(autobiography)'>Wings of Fire</a></li>
                            </div>
                        </div>
                        <div className='collection-names'>
                            <img src={geography} alt='govt'/>
                            <div className='book-info'>
                            <li className='book-name'>BookName : Indian Geography</li>
                            <br/>
                            <li>Author : Pranav Dhanavade</li>
                            <br/>
                            <li>Price : 899</li>
                            <br/>
                            <li>URL : <a href='https://en.wikipedia.org/wiki/Geography_of_India'>The Indian Geography</a></li>
                            </div>
                            <div className='thanks-note'>
                                <p>For Any Query Please Contact at : care@bookshelf.in</p>
                                <h2>THANK YOU & VISIT AGAIN</h2>
                            </div>
                        </div>
                        

                    </div>
                </div>
                
            </div>
            
        }
        </div>
    )
}

export default Myprofile;
