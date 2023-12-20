import { HybridComponent, html, linksHydrator } from '@libs/shared/react-hybrid-components';
import { markComponentHasConstantInitialRender } from '@libs/shared/ssr';
import { useState } from 'react';

const Login = HybridComponent({
  container: () => <div className='fixed top-0 left-0 grid place-items-center w-screen h-screen z-[1]'></div>,
  html: html`
    <div class="flex flex-col gap-10 items-center">
      <h1 rhc-target="count"></h1>
      <h2>Username:</h2>
      <div rhc-target="username"></div>
      <h2>Password:</h2>
      <div rhc-target="password"></div>
      <div class="text-red-500" rhc-target="error"></div>
      <div rhc-target="login"></div>
      <a href="/">Register</a>
    </div>
  `,
  slots: ({ count }: { count: number }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submit = () => {
      if (password.length < 5) {
        setError('Password is too short!');
        return;
      }

      console.log(username, password);
    };

    return {
      count: <>Count: {count}</>,
      username: (
        <input type='text' placeholder='Username' value={username} onInput={(e: any) => setUsername(e.target.value)} />
      ),
      password: (
        <input
          type='password'
          placeholder='Password'
          value={password}
          onInput={(e: any) => setPassword(e.target.value)}
        />
      ),
      error: <>{error}</>,
      login: <button onClick={submit}>Login</button>
    };
  },
  hydrators: [linksHydrator]
});

markComponentHasConstantInitialRender(Login);

export { Login };
