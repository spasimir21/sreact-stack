import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string()
});

class ProductDto extends createZodDto(ProductSchema) {}

export { ProductDto };
