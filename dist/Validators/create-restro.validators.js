"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestaurantDto = exports.createRestaurantDtoBody = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const zod_1 = require("zod");
exports.createRestaurantDtoBody = zod_1.z.object({
    address: zod_1.z.string({
        required_error: 'address is required',
    }),
    description: zod_1.z.string({
        required_error: 'description is required',
    }),
    name: zod_1.z.string({
        required_error: 'name is required',
    })
}).strict();
exports.createRestaurantDto = zod_1.z.object({
    body: exports.createRestaurantDtoBody
});
//# sourceMappingURL=create-restro.validators.js.map