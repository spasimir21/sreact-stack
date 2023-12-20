import { SSRLink } from '@libs/shared/ssr';
import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br />
      <SSRLink to='/products'>Products</SSRLink>
      <br />
      <script>
        <h1>Tejko</h1>
      </script>
    </div>
  );
}

export default Home;
export { Home };
