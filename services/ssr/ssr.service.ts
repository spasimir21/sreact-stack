import { PRODUCT_CLIENT, ProductClient, getProductClient } from '@services/product/product.client';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { streamToArray } from '@libs/shared/utils/streamToArray';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
class SSRService implements OnModuleInit {
  private productClient: ProductClient = null as any;

  constructor(@Inject(PRODUCT_CLIENT) private readonly grpcClient: ClientGrpc) {}

  onModuleInit() {
    this.productClient = getProductClient(this.grpcClient);
  }

  async getProductsSSRData() {
    const products$ = this.productClient.getProducts({});
    return { products: await streamToArray(products$) };
  }
}

export { SSRService };
