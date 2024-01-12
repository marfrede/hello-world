import type { ParamMatcher } from '@sveltejs/kit';

/** match only digits */
export const match: ParamMatcher = (param: string): boolean => {
	// name of function must be `match`
	return /^\d+$/.test(param);
};
