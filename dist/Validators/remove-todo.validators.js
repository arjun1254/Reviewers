"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removetodoDto = void 0;
const zod_1 = require("zod");
exports.removetodoDto = zod_1.z.object({
    query: zod_1.z.object({
        id: zod_1.z.number({
            required_error: 'id is required',
        })
    })
});
//# sourceMappingURL=remove-todo.validators.js.map