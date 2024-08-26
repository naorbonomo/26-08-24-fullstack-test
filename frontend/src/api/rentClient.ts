import axios from "axios";
import { BookType } from "../types/bookType";

const BASE_URL = "http://localhost:4000/books";

export async function fetchAllBooks(): Promise<BookType[] | void> {
    try {
        const res = await axios.get(BASE_URL);
        return res.data as BookType[];  // remember Type !
    } catch (error) {
        console.log(error);
        alert("Some error occurred. Please retry later.");
    }
}

export async function updateBookQuantity(id: number, newQuantity: number): Promise<void> {
    try {
        const res = await axios.patch(BASE_URL + `/${id}`, { newQuantity });
        if (res.status !== 200) {
            console.log(res);
            throw new Error("Update returned with an incorrect status.");
        }
    } catch (error) {
        console.log(error);
        alert("Some error occurred. Please retry later.");
    }
}
