import { markComponentHasConstantInitialRender } from '@libs/shared/ssr';

function Header() {
  return (
    <>
      <h1 className='text-center'>Hello, world!</h1>
    </>
  );
}

markComponentHasConstantInitialRender(Header);

export { Header };
