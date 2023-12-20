import { Inject, Injectable } from '@nestjs/common';
import { parseIndexHtml } from '@libs/shared/ssr';
import { createPages } from './pages';
import { SSRConfig } from './config';
import * as fs from 'fs/promises';

@Injectable()
class PageService {
  public readonly pages = {} as ReturnType<typeof createPages>;
  private _indexSource: string = '';

  get indexSource(): string {
    return this._indexSource;
  }

  constructor(@Inject(SSRConfig) private readonly ssrConfig: SSRConfig) {}

  async loadPages() {
    this._indexSource = (await fs.readFile(this.ssrConfig.indexHtmlDist)).toString();

    const indexPage = parseIndexHtml(this._indexSource);

    const pages = createPages(indexPage);

    Object.assign(this.pages, pages);
  }
}

export { PageService };
