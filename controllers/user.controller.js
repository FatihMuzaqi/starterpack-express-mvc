import { getUserService } from "../services/user-service.js";

export const getUsers = async (req, res) => {
    try {
        const users = await getUserService();
        res.render('welcome', {
            title: 'Welcome',
            users: users,
            layout: 'layouts/main'
        });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error: error.message });
    }
}