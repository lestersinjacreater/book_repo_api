import { pgTable, integer, text,  timestamp, serial,  } from "drizzle-orm/pg-core";


// books table 1
export const bookTable = pgTable('bookTable', {
    book_id: serial('book_id').primaryKey(),
    title: text('title').notNull(),
    author: text('author').notNull(),
    year: integer('year').notNull(),
    
});

export type TIBook = typeof bookTable.$inferInsert;
export type TSBookSelect = typeof bookTable.$inferSelect;
