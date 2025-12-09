import axios from "axios";

export const getusers = () => axios.get("api/users");
export const createUser = (data) => axios.post("api/users", data);
export const updateUser = (id, data) => axios.put(`/api/users/${id}`, data);
export const deleteUser = (id) => axios.pus(`api/users/${id}`);


