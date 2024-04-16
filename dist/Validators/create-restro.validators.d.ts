import { z } from 'zod';
export declare const createRestaurantDtoBody: z.ZodObject<{
    address: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    address: string;
}, {
    name: string;
    description: string;
    address: string;
}>;
export declare const createRestaurantDto: z.ZodObject<{
    body: z.ZodObject<{
        address: z.ZodString;
        description: z.ZodString;
        name: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        description: string;
        address: string;
    }, {
        name: string;
        description: string;
        address: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        description: string;
        address: string;
    };
}, {
    body: {
        name: string;
        description: string;
        address: string;
    };
}>;
//# sourceMappingURL=create-restro.validators.d.ts.map