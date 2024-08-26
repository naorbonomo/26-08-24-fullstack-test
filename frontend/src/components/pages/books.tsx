import { BookType } from '../../types/bookType';

type Props = {
    books: BookType[];
};

function Books({ books }: Props) {
    return (
        <div>
            <h1>List of Books</h1>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Genre</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>
                                {book.imageUrl && <img src={book.imageUrl} alt={book.book_name} style={{ width: '50px', height: '50px' }} />}
                            </td>
                            <td>{book.book_name}</td>
                            <td>{book.author_name}</td>
                            <td>{book.genre}</td>
                            <td>${book.price}</td>
                            <td>{book.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Books;