import { ProductClientModule } from '@services/product/product.client';
import { SSRController } from './ssr.controller';
import { Inject, Module } from '@nestjs/common';
import { SSRConfigProvider } from './config';
import { PageService } from './page.service';
import { SSRService } from './ssr.service';

@Module({
  imports: [ProductClientModule],
  controllers: [SSRController],
  providers: [SSRConfigProvider, PageService, SSRService]
})
class SSRModule {
  constructor(@Inject(PageService) private readonly pageService: PageService) {}

  async onModuleInit() {
    await this.pageService.loadPages();
  }
}

export { SSRModule };
