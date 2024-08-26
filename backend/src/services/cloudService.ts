import runQuery from "../db/dal";
import { ResultSetHeader } from "mysql2";

type serverData = {
    id: number;
    isActive: boolean;
    server_name: string;
    provider_id: number;
    ipAddress: string;
    dateTimeCreated: string;
}

export async function getServers(): Promise<serverData[]> {
    let q = `
        SELECT 
            server.id, 
            server.isActive, 
            server.server_name, 
            provider.name AS company_name, 
            server.ipAddress, 
            server.dateTimeCreated 
        FROM server JOIN  provider  ON 
            server.provider_id = provider.id;
    `;    // let q = `SELECT park.id, park.isOccupied, park.isFree, address.city, address.street, address.num FROM park JOIN address ON park.address_id = address.id;`;

    const servers = await runQuery(q);
    return servers;
}

export async function toggleActive(id: number, newValue: boolean) {
    let q = `UPDATE server SET isActive= ${newValue} WHERE id=${id};`;
    const res = (await runQuery(q)) as ResultSetHeader | any;
    console.log(res);
    if (res.changedRows === 0){
        console.log("Warning: no change to a server");        
    }    
}
export async function getServerStatus(id: number): Promise<boolean> {
    const q = `SELECT isActive FROM server WHERE id=${id};`;
    const res = await runQuery(q) as serverData[];

    if (res.length === 0) {
        throw new Error(`No server found with id ${id}`);
    }

    return res[0].isActive;   
}
//test getServers
// getServers().then((data)=>{
//     console.log(data);})

//test toggleActive
// toggleActive(1, true).then((data)=>{
//     console.log(data);})

//test getServerStatus
// getServerStatus(1).then((data)=>{
//     console.log(data);})
    