export type BookType = {
    id: number;
    book_name: string;
    author_name: string;
    price: number;
    genre: string;
    quantity: number;
    imageUrl?: string; //OPTIONAL
};