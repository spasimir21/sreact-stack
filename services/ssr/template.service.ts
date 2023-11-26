import { IndexTemplate, parseIndexTemplate, layoutToTemplate } from '@libs/server/ssr';
import { Inject, Injectable } from '@nestjs/common';
import { SSRConfig } from './config';
import { LAYOUTS } from './layouts';
import * as fs from 'fs/promises';

type Templates<T extends string> = Record<T | 'root', IndexTemplate>;

@Injectable()
class TemplateService {
  public readonly templates = {} as Templates<keyof typeof LAYOUTS>;
  private _indexSource: string = '';

  get indexSource(): string {
    return this._indexSource;
  }

  constructor(@Inject(SSRConfig) private readonly ssrConfig: SSRConfig) {}

  async loadTemplates() {
    this._indexSource = (await fs.readFile(this.ssrConfig.indexHtmlDist)).toString();

    this.templates.root = parseIndexTemplate(this._indexSource);

    for (const layoutName in LAYOUTS)
      (this.templates as any)[layoutName] = layoutToTemplate(this.templates.root, (LAYOUTS as any)[layoutName]);
  }
}

export { TemplateService };
