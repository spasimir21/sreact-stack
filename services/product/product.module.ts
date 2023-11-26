import { ProductHTTPController } from './product.http.controller';
import { ProductGRPCController } from './product.grpc.controller';
import { ProductService } from './product.service';
import { ProductConfigProvider } from './config';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ProductHTTPController, ProductGRPCController],
  providers: [ProductConfigProvider, ProductService]
})
class ProductModule {}

export { ProductModule };
