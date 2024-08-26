import runQuery from "../db/dal";
import { ResultSetHeader } from "mysql2";


type BookData = {
    id: number;
    book_name: string;
    author_name: string;
    price: number;
    genre: string;
    quantity: number;
    imageUrl?: string;
}

type MemberData = {
    id: number;
    name: string;
    email: string;
}

type RentalData = {
    id: number;
    book_id: number;
    member_id: number;
    rental_date: string;
    return_date: string | null;
}

export async function getBooks(): Promise<BookData[]> {
    let q = `SELECT id, book_name, author_name, price, genre, quantity, imageUrl FROM books;`;
    const books = await runQuery(q);
    return books;
}

export async function updateBookQuantity(id: number, newQuantity: number) {
    let q = `UPDATE books SET quantity = ${newQuantity} WHERE id = ${id};`;
    const res = (await runQuery(q)) as ResultSetHeader | any;
    if (res.affectedRows === 0) {
        console.log("Warning: tried to update non-existent book");
    }
}


// updateBookQuantity(1, 50).then(() => { console.log("Done"); });

// const printBooks = async () => {
//     try {
//         const books = await getBooks();
//         console.log(books);
//     } catch (error) {
//         console.error("Error fetching books:", error);
//     }
// };

// printBooks();

// updateOccupied(100, false).then(()=>{console.log("Done");
// })