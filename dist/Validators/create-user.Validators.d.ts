import { z } from 'zod';
export declare const createUserDtoBody: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    isAdmin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    isAdmin: boolean;
    name: string;
}, {
    email: string;
    password: string;
    name: string;
    isAdmin?: boolean | undefined;
}>;
export declare const createuserDto: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
        isAdmin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        email: string;
        password: string;
        isAdmin: boolean;
        name: string;
    }, {
        email: string;
        password: string;
        name: string;
        isAdmin?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        email: string;
        password: string;
        isAdmin: boolean;
        name: string;
    };
}, {
    body: {
        email: string;
        password: string;
        name: string;
        isAdmin?: boolean | undefined;
    };
}>;
//# sourceMappingURL=create-user.Validators.d.ts.map