import type { Config } from 'drizzle-kit'


export default {
  schema: "./schemas/user.ts",
  out: "./drizzle"
} satisfies Config