"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateRestaurantById = exports.findrestaurantById = exports.getAll = exports.createRestaurant = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const prisma_1 = __importDefault(require("../libs/prisma"));
const createRestaurant = async (body) => {
    const { address, description, name } = body;
    let createdRestro;
    // ts-ignore
    await prisma_1.default.$transaction(async (tx) => {
        createdRestro = await tx.restaurant.create({
            data: {
                address,
                description,
                name,
            },
        });
        // API design pattern issues
        // await Promise.all(contactNumbers.map(contact => {
        //   return tx.contact.create({
        //     data: {
        //       restaurantId: createdRestro.id,
        //       number: contact
        //     }
        //   })
        // }))
    });
    return createdRestro;
};
exports.createRestaurant = createRestaurant;
const getAll = async () => {
    return await prisma_1.default.restaurant.findMany({
        include: {
            Contacts: true,
            reviews: true,
        }
    });
};
exports.getAll = getAll;
const findrestaurantById = async (id) => {
    try {
        return await prisma_1.default.restaurant.findUniqueOrThrow({
            where: { id: Number(id) },
        });
    }
    catch (err) {
        if (err.code === 'P2025') {
            throw boom_1.default.notFound('restaurant not found');
        }
        else {
            throw err;
        }
    }
};
exports.findrestaurantById = findrestaurantById;
const updateRestaurantById = async (id, restaurant) => {
    const { address, description, name } = restaurant;
    try {
        return await prisma_1.default.restaurant.update({
            where: { id: Number(id) },
            data: {
                address,
                description,
                name,
            },
        });
    }
    catch (err) {
        if (err.code === 'P2025') {
            throw boom_1.default.notFound('restaurant not found');
        }
        else {
            throw err;
        }
    }
};
exports.updateRestaurantById = updateRestaurantById;
const deleteById = async (id) => {
    try {
        return await prisma_1.default.restaurant.delete({
            where: {
                id: Number(id),
            },
        });
    }
    catch (err) {
        if (err.code === 'P2025') {
            throw boom_1.default.notFound('restaurant not found');
        }
        else {
            throw err;
        }
    }
};
exports.deleteById = deleteById;
//# sourceMappingURL=restro.service.js.map