import { z } from "zod";
import { createUserDtoBody } from "../Validators/create-user.Validators";
export declare const create: (User: z.infer<typeof createUserDtoBody>) => Promise<{
    id: number;
    name: string;
    email: string;
    password: string;
    isadmin: boolean;
}>;
export declare function login(email: string, password: string): Promise<{
    success: boolean;
    accessToken: string;
    refreshToken: string;
}>;
export declare function get(string: (params?: ({
    errorMap?: z.ZodErrorMap | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
    description?: string | undefined;
} & {
    coerce?: true | undefined;
}) | undefined) => z.ZodString): void;
//# sourceMappingURL=user.service.d.ts.map