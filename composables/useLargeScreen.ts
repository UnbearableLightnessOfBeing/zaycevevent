import { Ref } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

export const largeScreen: Ref<boolean> = breakpoints.greaterOrEqual('xl');