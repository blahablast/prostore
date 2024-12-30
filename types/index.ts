import { z } from 'zod'
import { insertProductSchema } from '@/lib/validators'

// Infer the type from the schema
type ProductBase = z.infer<typeof insertProductSchema>

export type Product = ProductBase & {
  id: string
  rating: string
  createdAt: Date
}
