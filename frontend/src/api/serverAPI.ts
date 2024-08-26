import axios from "axios";
import { serverType } from "../types/serverType";


const BASE_URL = "http://localhost:4000/api/servers";

export async function getServers(): Promise<serverType[] | void> {
    try {
        const res = await axios.get(BASE_URL);
        return res.data as serverType[];  // remember Type !
    } catch (error) {
        console.log(error);
        alert("Some error occurred. Please retry later.");
    }
}

export async function toggleActive(id: number, newValue: boolean): Promise<void> {
    try {
        const res = await axios.patch(BASE_URL + `/${id}`, { newValue });
        if (res.status !== 200) {
            console.log(res);
            throw new Error("Update returned with an incorrect status.");
        }
    } catch (error) {
        console.log(error);
        alert("Some error occurred. Please retry later.");
    }
}
//func to get server status
export async function getServerStatus(id: number): Promise<boolean | void> {
    try {
        const res = await axios.post(BASE_URL + `/status/${id}`);
        return res.data.status as boolean;
    } catch (error) {
        console.log(error);
        alert("Some error occurred. Please retry later.");
    }
}