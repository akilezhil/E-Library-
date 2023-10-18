import React, { useEffect, useState } from 'react'

function Sample() {
    const [searchterm, setSearchTerm] = useState([""])
    const [books, setBooks] = useState([])
    useEffect(() => {
        getBooks()
    }, [])
    async function getBooks() {
        const data = await fetch(`https://openlibrary.org/search.json?title=${searchterm}`)
        console.log(data);
        const json = await data.json()
        // console.log(json);
        setBooks(json?.docs)
        console.log(books);
    }
    return (
        <div className='border-4 border-cyan-700 w-full h-full
    flex justify-center items-center'>
            <input onChange={(e)=>setSearchTerm(e.target.value)} type="text" className='border border-red-500' />
            <div>
                {
                    console.log(books)
                }
                {
                    books.slice(0,5).map((list) => (
                        <div>
                            <h1>
                                {list.title}
                            </h1>
                            <img 
                             src={`https://covers.openlibrary.org/b/id/${list.cover_i}-L.jpg`}  alt="" />
                            

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sample