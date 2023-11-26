import { ClientGrpc, ClientsModule, Transport } from '@nestjs/microservices';
import { ProductDto } from './dto/ProductDto';
import { Observable } from 'rxjs';

const PRODUCT_CLIENT = Symbol('$ProductClient');

interface ProductClient {
  getProducts(options: {}): Observable<ProductDto>;
}

const ProductClientModule = ClientsModule.register([
  {
    name: PRODUCT_CLIENT,
    transport: Transport.GRPC,
    options: {
      package: 'product',
      protoPath: './proto/product.proto',
      url: `app-product:${process.env.SERVICE_PORT}`
    }
  }
]);

const getProductClient = (client: ClientGrpc) => client.getService<ProductClient>('ProductService');

export { PRODUCT_CLIENT, ProductClientModule, ProductClient, getProductClient };
