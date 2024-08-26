import express, { Request, Response, NextFunction } from "express";
import { getBooks, updateBookQuantity } from "../services/rentalService";

export const rentalRouters = express.Router();

// Route to get all books
rentalRouters.get("/books", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await getBooks();
        res.status(200).json(books);
    } catch (error) {
        next(error);  // TODO: add catchAll
    }
});

// Route to update book quantity
rentalRouters.patch("/books/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id;
        const newQuantity = req.body.newQuantity;

        if (newQuantity === undefined) {
            res.status(400).send("newQuantity is missing");
            return;
        }

        await updateBookQuantity(id, newQuantity);
        res.status(200).send("Updated");
    } catch (error) {
        next(error);  // TODO: add catchAll
    }
});