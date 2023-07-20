import { pgTable, serial, text, varchar, timestamp, uniqueIndex } from 'drizzle-orm/pg-core'


export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: varchar("email", { length: 256 }).notNull(),
  createdAt:timestamp("createdAt").defaultNow().notNull()
},

  (users) => {
    return {
    uniqueIdx:uniqueIndex("unique_idx").on(users.email)
  }
}
)