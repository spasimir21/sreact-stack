import { useSSRRequest } from '@frontend/api/useSSRRequest';
import { Login } from '@frontend/components/Login';
import { useRequest } from '@libs/client/requestr';
import { requests } from '@frontend/api/requests';
import { _void, id } from '@libs/shared/utils';
import { SSRLink } from '@libs/shared/ssr';
import React from 'react';

function Products() {
  const { result: products } = useSSRRequest('products', requests.product.getAll, {
    initialParams: _void
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
      <br />
      <Login count={products?.length ?? -1} />
    </div>
  );
}

export default Products;
export { Products };
