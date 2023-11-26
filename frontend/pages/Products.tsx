import { useSSRRequest } from '@frontend/api/useSSRRequest';
import { useRequest } from '@libs/client/requestr';
import { requests } from '@frontend/api/requests';
import { SSRLink } from '@libs/client/ssr';
import { id } from '@libs/shared/utils';
import React from 'react';

function Products() {
  const { result: products } = useSSRRequest('products', requests.product.getAll, {
    initialParams: null as any
  });

  const createProductRequest = useRequest(requests.product.create);

  return (
    <div>
      {products ? (
        products.map(p => (
          <p key={p.id} className='text-lg'>
            {p.name} - {p.description}
          </p>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <br />
      <button
        onClick={() =>
          createProductRequest.send({
            id: id(),
            name: 'Product',
            description: 'Description'
          })
        }
      >
        Cukni
      </button>
      <br />
      <SSRLink to='/'>Home</SSRLink>
    </div>
  );
}

export default Products;
export { Products };
