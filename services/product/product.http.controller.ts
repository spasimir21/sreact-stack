import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/ProductDto';
import { UseZodGuard } from 'nestjs-zod';

@Controller()
class ProductHTTPController {
  constructor(@Inject(ProductService) private readonly productService: ProductService) {}

  @UseZodGuard('body', ProductDto)
  @Post('/')
  async createProduct(@Body() product: ProductDto) {
    console.log(product);
    return 'OK';
  }

  @Get('/products')
  async products() {
    return await this.productService.getProducts();
  }
}

export { ProductHTTPController };
