import React, { useEffect, useState } from 'react';
import Books from './components/pages/books';
import { fetchAllBooks } from './api/rentClient';
import { BookType } from './types/bookType';

function App() {
    const [books, setBooks] = useState<BookType[]>([]);

    useEffect(() => {
        // get all books from BE
        fetchAllBooks()
            .then((data) => {
                if (data) {
                    setBooks(data);  // update only if available
                } else {
                    setBooks([]);  // fallback
                }
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    }, []);

    return (
        <div>
            <h1>Welcome to the Library</h1>
            <Books books={books} />
        </div>
    );
}

export default App;
