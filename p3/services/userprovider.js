import { ENDPOINT } from '../config.js';

export default class UserProvider {
    static fetchUsers = async () => {
        try {
            const response = await fetch(`${ENDPOINT}`);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error('Error fetching users', error);
        }
    }
    static fetchUser = async (id) => {
        try {
            const response = await fetch(`${ENDPOINT}/${id}`);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error('Error fetching user', error);
        }
    }
}