import { eq } from "drizzle-orm";
import db from "../drizzle/db";

import { TIBook, TSBook, bookTable } from "../drizzle/schema";

//function to add book
//export const addBookService = async (book: TIBook) => {
    //await db.insert(bookTable).values(book).execute();
    //return "Book added successfully "
//}

//function to get all books
export const booksService = async ():Promise<TSBook[] | null>=> {
    return await db.query.bookTable.findMany();    
}

//function to get book by id
export const getBookByIdService = async (id:number):Promise<TSBook | undefined> => {
    return await db.query.bookTable.findFirst({
       where: eq(bookTable.book_id, id)
    })
}

// function to insert book and return the inserted book
export const insertBookService = async (book: TIBook) => {
    const result = await db.insert(bookTable).values(book)
        .returning({ book_id: bookTable.book_id, title: bookTable.title, author: bookTable.author, year: bookTable.year})
        .execute();

    if (result) {
       
        const createdBook = result[0];
        return createdBook;
    } else {
        throw new Error("insertion failed");
    }
}

//function to update book
export const updateBookService = async(id:number,book:TIBook) => {
    await db.update(bookTable).set(book).where(eq(bookTable.book_id,id));
    return "Book updated "
}

//function to delete book

export const deleteBookService = async(id:number) => {
    await db.delete(bookTable).where(eq(bookTable.book_id,id));
    return "Book deleted "
}



