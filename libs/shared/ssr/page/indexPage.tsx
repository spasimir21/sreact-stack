import { parse as parseHTML, HTMLElement } from 'node-html-parser';
import { LayoutContent } from '../LayoutContent';
import { SSRPage } from './page';

function parseIndexHtml(indexSource: string): SSRPage {
  const indexHtml = parseHTML(indexSource);

  const head = indexHtml.querySelector('head')!;
  head.insertAdjacentHTML('afterbegin', '$SSR_HEAD$');

  const title = indexHtml.querySelector('title') ?? head.appendChild(new HTMLElement('title', {}));
  title.set_content('$SSR_TITLE$');

  const root = indexHtml.querySelector('#root')!;
  root.set_content('$SSR_ROOT$');

  const html = indexHtml.toString();

  const stringParts = html.split(/\$SSR_(?:HEAD|TITLE|ROOT)\$/);

  return {
    layoutElements: [],
    hybridHtml: [
      stringParts[0],
      context => context.headElements,
      stringParts[1],
      context => context.title,
      stringParts[2] + '<!--$-->',
      <LayoutContent />,
      '<!--/$-->' + stringParts[3]
    ]
  };
}

export { parseIndexHtml };
