// @ts-ignore
import _CONFIG from '../config/frontend.yml';

interface FrontendConfig {
  baseDomain: string;
}

const FRONTEND_CONFIG = _CONFIG as FrontendConfig;

export { FRONTEND_CONFIG, FrontendConfig };
