import {Hono} from "hono"
import { deleteBook, getBookById, getBookByAuthor,getAllBooksByTitle,getAllBooksByYear,getAllBooksByAuthor, getBookByYear, insertBook, listAllBooks, updateBook, getBookByTitle  } from "./book.controller";
import { createBookValidator } from "../validators/books.validator";
import { zValidator } from "@hono/zod-validator";

export const bookRouter = new Hono();

//get all books
bookRouter.get('/books', listAllBooks)

//get book by id
bookRouter.get('/book/:id', getBookById)

//insert book
bookRouter.post('/books', zValidator('json',createBookValidator,(result,c)=>{
    if(!result.success) return c.text( result.error.message ,400)}), insertBook)

//update book
bookRouter.put('/books/:id', updateBook)

//delete book
bookRouter.delete('/books/:id', deleteBook)

//get book by title
bookRouter.get('/book/title/:title', getBookByTitle)

//get book by author
bookRouter.get('/book/author/:author', getBookByAuthor)

//get book by year
bookRouter.get('/book/year/:year', getBookByYear)

//get all books by title
bookRouter.get('/books/title/:title', getAllBooksByTitle)

//get all books by author
bookRouter.get('/books/author/:author', getAllBooksByAuthor)

//get all books by year
bookRouter.get('/books/year/:year', getAllBooksByYear)



