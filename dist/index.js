"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import todoRouter from './routes/todo.route'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const user_route_1 = __importDefault(require("./routes/user.route"));
const restro_route_1 = __importDefault(require("./routes/restro.route"));
const cors_1 = __importDefault(require("cors"));
const error_middleware_1 = require("./middleware/error.middleware");
const reviews_route_1 = __importDefault(require("./routes/reviews.route"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//app.use('/todos', todoRouter)
app.use('/users', user_route_1.default);
app.use('/restaurant', restro_route_1.default);
app.use(error_middleware_1.genericErrorHandler);
app.listen(PORT, () => {
    console.log('Running on port', PORT);
});
exports.default = reviews_route_1.default;
//# sourceMappingURL=index.js.map