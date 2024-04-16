import { z } from 'zod';
import { createRestaurantDtoBody } from '../Validators/create-restro.validators';
export declare const createRestaurant: (body: z.infer<typeof createRestaurantDtoBody>) => Promise<any>;
export declare const getAll: () => Promise<({
    reviews: {
        id: number;
        rating: number;
        comment: string;
        date: Date;
        user_id: number;
        restaurant_id: number;
    }[];
    Contacts: {
        id: number;
        number: number;
        restaurant_id: number;
    }[];
} & {
    id: number;
    name: string;
    description: string;
    address: string;
})[]>;
export declare const findrestaurantById: (id: Number) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
}>;
export declare const updateRestaurantById: (id: number, restaurant: any) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
}>;
export declare const deleteById: (id: Number) => Promise<{
    id: number;
    name: string;
    description: string;
    address: string;
}>;
//# sourceMappingURL=restro.service.d.ts.map