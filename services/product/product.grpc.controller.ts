import { Controller, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { GrpcMethod } from '@nestjs/microservices';
import { from } from 'rxjs';

@Controller()
class ProductGRPCController {
  constructor(@Inject(ProductService) private readonly productService: ProductService) {}

  @GrpcMethod('ProductService', 'GetProducts')
  async getProducts() {
    const products = await this.productService.getProducts();
    return from(products);
  }
}

export { ProductGRPCController };
