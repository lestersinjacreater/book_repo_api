import { Context } from "hono";
import { booksService,getAllBooksByTitleService, deleteBookService,getAllBooksByYearService,getAllBooksByAuthorService ,getBookByYearService, getBookByIdService, insertBookService, updateBookService,getBookByTitleService,getBookByAuthorService } from "./book.service";


//list of all books
export const listAllBooks = async (c: Context) => {
    try {
        const books = await booksService();
        if (books === null) return c.text("No books found");
        return c.json(books, 200);
    } catch (error: any) {
        return c.text("Error while fetching books", 400);
    }
}

//get book by id
export const getBookById = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id)) return c.text("Invalid ID", 400);
        //search for book
        const book = await getBookByIdService(id);   
        if (book === undefined) return c.text("Book not found ", 404);
        return c.json(book, 200);
    } catch (error: any) {
        return c.text(error?.message, 400);
    }
}

//insert book
export const insertBook = async (c: Context) => {
    try {
        const book = await c.req.json();
        const createdBook = await insertBookService(book);
        if (createdBook === undefined) {
            return c.text("Error while inserting book", 400);
        }
        return c.json(createdBook, 201);
    } catch (error: any) {
        return c.text(error?.message, 400);
    }
}

//update book
export const updateBook = async (c: Context) => {
    const id = Number(c.req.param("id"));
    const book = await c.req.json();
    try {
        if (isNaN(id)) return c.text("Invalid ID", 400);
        //search for book
        const existingBook = await getBookByIdService(id);
        if (existingBook === undefined) return c.text("Book not found", 404);
        //update book
        const updatedBook = await updateBookService(id, book);
        return c.json({ msg: updatedBook}, 200);
    } catch (error: any) {
        return c.text(error?.message, 400);
    }
}

//delete book
export const deleteBook = async (c: Context) => {
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id)) return c.text("Invalid ID", 400);
        //search for book
        const existingBook = await getBookByIdService(id);
        if (existingBook === undefined) return c.text("Book not found", 404);
        //delete book
        const deletedBook = await deleteBookService(id);
        return c.json({ msg: deletedBook }, 200);
    } catch (error: any) {
        return c.text(error?.message, 400);
    }
}

//get all books by title
export const getAllBooksByTitle = async (c: Context) => {
    const title = c.req.param("title");
    try {
        if (!title) return c.text("Invalid title", 400);
        //search for book
        const books = await getAllBooksByTitleService(title);
        if (books === null) return c.text("Books not found", 404);
        return c.json(books, 200);
    } catch (error: any) {
        return c.text(error?.message, 400);
    }
}


//get book by title
export const getBookByTitle = async (c: Context) => {
    const title = c.req.param("title");
    try {
        if (!title) return c.text("Invalid title", 400);
        //search for book
        const book = await getBookByTitleService(title);
        if (book === undefined) return c.text("Book not found", 404);
        return c.json(book, 200);
    } catch (error: any) {
        return c.text(error?.message, 400);
    }
}

//get all books by author
export const getAllBooksByAuthor = async (c: Context) => {
    const author = c.req.param("author");
    try {
        if (!author) return c.text("Invalid author", 400);
        //search for book
        const books = await getAllBooksByAuthorService(author);
        if (books === null) return c.text("Books not found", 404);
        return c.json(books, 200);
    } catch (error: any) {
        return c.text(error?.message, 400);
    }
}



//get book by author
export const getBookByAuthor = async (c: Context) => {
    const author = c.req.param("author");
    try {
        if (!author) return c.text("Invalid author", 400);
        //search for book
        const book = await getBookByAuthorService(author);
        if (book === undefined) return c.text("Book not found", 404);
        return c.json(book, 200);
    } catch (error: any) {
        return c.text(error?.message, 400);
    }
}
//get all books by year
export const getAllBooksByYear = async (c: Context) => {
    const year = Number(c.req.param("year"));
    try {
        if (isNaN(year)) return c.text("Invalid year", 400);
        //search for book
        const books = await getAllBooksByYearService(year);
        if (books === null) return c.text("Books not found", 404);
        return c.json(books, 200);
    } catch (error: any) {
        return c.text(error?.message, 400);
    }
}


//get book by year
export const getBookByYear = async (c: Context) => {
    const year = Number(c.req.param("year"));
    try {
        if (isNaN(year)) return c.text("Invalid year", 400);
        //search for book
        const book = await getBookByYearService(year);
        if (book === undefined) return c.text("Book not found", 404);
        return c.json(book, 200);
    } catch (error: any) {
        return c.text(error?.message, 400);
    }
}

