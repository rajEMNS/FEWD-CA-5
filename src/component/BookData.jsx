
import React from 'react'
import { useState ,useEffect } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
// import './App.css'

function BookData() {
  const [data, setData] = useState([])
  const [search,setSearch] = useState('')
  useEffect(() => {
    fetch('https://reactnd-books-api.udacity.com/books',{
      headers:{
        'Authorization': 'whatever-you-want'
      }
    })
    .then((res)=> res.json())
    .then((data)=> {
      setData(data.books)
      console.log(data)
    })
  },[])

  function Search(e){
    setSearch(e.target.value)
    
    }  
   

  // Response
  return (
    <>
    <div className="App">
      <h1 id='title'>Kalvium Books</h1>
      <div className='searchBar'>
        <input type="text" placeholder="Search books" id='searchBar' onChange={(e)=>Search(e)} onKeyDown={(e)=>Escape(e)}/>
      </div>
        <div className='registerBtn'>
        <Link to='/register'> <button id='registerBtn' placeholder='Register' >Register</button></Link>
          <button id='infoBtn'>i</button>  
      </div>
    </div>
    <div className='bookData' >
      
      {data
        .filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
        .map((item,index)=>( 
          <div key={index}>
            <img src={item.imageLinks.smallThumbnail} alt="" id='bookImg'/>
            <p id='bookTitle'>{item.title}</p>
            <div id='bookInfo'>
            <span id='bookRating'>{item.averageRating}</span>
            <p id='star'>⭐</p>
            <p id='bookPrice'>free</p>
            </div>
          </div>))}
    </div>
    </>
  )
}

export default BookData
