import { Controller, Get, Header, Inject } from '@nestjs/common';
import { renderSSR } from '@libs/shared/ssr';
import { PageService } from './page.service';
import { SSRService } from './ssr.service';

@Controller()
class SSRController {
  constructor(
    @Inject(PageService) private readonly pageService: PageService,
    @Inject(SSRService) private readonly ssrService: SSRService
  ) {}

  @Get('/products')
  @Header('Content-Type', 'text/html')
  async products() {
    const data = await this.ssrService.getProductsSSRData();

    return renderSSR({
      page: this.pageService.pages.products,
      data,
      title: `Products`
    });
  }

  @Get('/*')
  @Header('Content-Type', 'text/html')
  fallbackHandler() {
    return this.pageService.indexSource;
  }
}

export { SSRController };
