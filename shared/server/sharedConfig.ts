import { ConfigProvider, ConfigSymbol } from '@libs/server/config';

const SHARED_CONFIG = ConfigSymbol('server.shared');

const SharedConfigProvider = ConfigProvider('./config/server.shared.yml', SHARED_CONFIG);

export { SharedConfigProvider, SHARED_CONFIG };
