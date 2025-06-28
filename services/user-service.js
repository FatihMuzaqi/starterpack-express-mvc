import Users from "../models/user-model.js";

export const getUserService = async () => {
    try {
        const users = await Users.findAll();
        return users;
    } catch (error) {
        throw new Error("Error retrieving users: " + error.message);
    }
}