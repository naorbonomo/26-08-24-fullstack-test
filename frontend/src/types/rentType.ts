export type RentType = {
    id: number;
    bookId: number;
    memberId: number;
    rentalDate: string;
    returnDate: string | null;
}