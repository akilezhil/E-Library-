import React, { useEffect, useState } from 'react'
// import { AiOutlineSearch } from 'react-icons/ai';
import './Book.css'
function Book() {
    const [searchterm, setSearchTerm] = useState([""])
    const [books, setBooks] = useState([])
    useEffect(() => {
        getBooks()
    }, [searchterm])
    async function getBooks() {
        const data = await fetch(`https://openlibrary.org/search.json?title=${searchterm}`)
        const json = await data.json()
        // console.log(json);
        setBooks(json?.docs)
    }
    return (
        <div>
            <div className='fel'>
                {/* <AiOutlineSearch className='ai' /> */}
                <h1> Search your</h1>
                <input className="inp" onChange={(e) => setSearchTerm(e.target.value)}placeholder='   Enter your book name' type="text" ></input> 
                <h2>here</h2>            
            </div>
            <div className='store'>
                {
                    console.log(books)
                }
                {
                    books?.slice(0, 16).map((list) => (
                        <div className='data1'>
                            <img src={`https://covers.openlibrary.org/b/id/${list.cover_i}-L.jpg`} alt="" />
                            <h1>
                                {list.title}
                            </h1>
                            
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Book

