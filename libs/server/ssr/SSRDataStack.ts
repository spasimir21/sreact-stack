import { Stack } from '@libs/shared/utils';

const GLOBAL_SSR_DATA_STACK = new Stack<any>();

// @ts-ignore
process.$SSR_DATA_STACK = GLOBAL_SSR_DATA_STACK;

export { GLOBAL_SSR_DATA_STACK };
