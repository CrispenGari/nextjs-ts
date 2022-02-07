export const __port__: any = process.env.PORT || 3001;
export const __maxAge__: number = 1000 * 60 * 60 * 24 * 7; // 7 days
export const __secure__: boolean = false;
export const __cookieName__: string = "user";
export const __cookieSecret__: string = "this_should_be_hidden";

//
export const __maxVerificationAge__: number = 60 * 60; // 1 hour

// Prefixes
export const __reset__password__prefix: string = "reset-password:";
export const __confirm__email__prefix: string = "confirm-email:";
