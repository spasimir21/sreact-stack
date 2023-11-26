import { ProductClientModule } from '@services/product/product.client';
import { TemplateService } from './template.service';
import { SSRController } from './ssr.controller';
import { Inject, Module } from '@nestjs/common';
import { SSRConfigProvider } from './config';
import { SSRService } from './ssr.service';

@Module({
  imports: [ProductClientModule],
  controllers: [SSRController],
  providers: [SSRConfigProvider, TemplateService, SSRService]
})
class SSRModule {
  constructor(@Inject(TemplateService) private readonly templateService: TemplateService) {}

  async onModuleInit() {
    await this.templateService.loadTemplates();
  }
}

export { SSRModule };
