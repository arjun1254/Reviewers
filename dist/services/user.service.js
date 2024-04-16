"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.login = exports.create = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const create = async (User) => {
    const { email, password, name, isAdmin: isadmin } = User;
    return await prisma.user.create({
        data: {
            email,
            password: await bcrypt_1.default.hash(User.password, 10),
            isadmin,
            name
        }
    });
};
exports.create = create;
async function login(email, password) {
    const user = await prisma.user.findFirstOrThrow({ where: { email } });
    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch) {
        // Password does not match
        // If you want to throw a http error, you can. This is throw internal server error
        throw Error('Password not correct');
    }
    // Generate a token
    // Generate a token
    const accessToken = jwt.sign({ userId: user.id, isAdmin: user.isadmin }, process.env.ACCESS_TOKEN_KEY = "HGVYGJBHKIHBKIB", {
        expiresIn: '1d',
    });
    const refreshToken = jwt.sign({ userId: user.id, isAdmin: user.isadmin }, process.env.REFRESH_TOKEN_KEY, {
        expiresIn: '7d',
    });
    // Return the token to the client
    return { success: true, accessToken, refreshToken };
}
exports.login = login;
function get(string) {
    throw new Error("Function not implemented.");
}
exports.get = get;
// export const login = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//       const { email, password }: { email: string; password: string } =
//           req.body
//       const { token } = await UserService.login(email, password)
//       res.json(token)
//   } catch (error) {
//       next(error)
//   }
// }
// export const signup = async (req: Request, res: Response) => {
//   const { email, password} = req.body
//   const result = await prisma.user.create({
//       data: {
//           email,
//           password: await bcrypt.hash(password as string, 10),
//       },
//   })
//   res.json(result)
// }
//# sourceMappingURL=user.service.js.map