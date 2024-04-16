"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createuserDto = exports.createUserDtoBody = void 0;
const zod_1 = require("zod");
exports.createUserDtoBody = zod_1.z.object({
    email: zod_1.z.string({
        required_error: 'email is required',
    }),
    password: zod_1.z.string({
        required_error: 'password is required',
    }),
    isAdmin: zod_1.z.boolean().optional().default(false),
    name: zod_1.z.string({
        required_error: 'name is required',
    })
});
exports.createuserDto = zod_1.z.object({
    body: exports.createUserDtoBody
});
//# sourceMappingURL=create-user.Validators.js.map