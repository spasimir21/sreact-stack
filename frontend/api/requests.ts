import { ProductDto } from '@services/product/dto/ProductDto';
import { Service } from './services';
import {
  combine,
  endpoint,
  endpoints,
  errorCode,
  fetchInit,
  get,
  jsonBody,
  jsonResponse,
  path,
  post,
  service
} from '@libs/client/requestr';

const product = endpoints(
  {
    request: service(Service.Product)
  },
  {
    getAll: endpoint<void, ProductDto[]>({
      request: combine(get, path('/products')),
      response: jsonResponse
    }),
    create: endpoint<ProductDto, void>({
      request: combine(post, path('/'), jsonBody)
    })
  }
);

const requests = endpoints(
  {
    request: fetchInit,
    response: errorCode
  },
  { product }
);

export { requests };
