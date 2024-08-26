import React, { useEffect, useState } from "react";
import { getServers, toggleActive } from "../api/serverAPI";
import { serverType } from "../types/serverType";
import "./serverCard.css";
const ServerCard = () => {
    const [servers, setServers] = useState<serverType[]>([]);

    useEffect(() => {
        async function fetchServers() {
            const data = await getServers();
            if (data) {
                setServers(data);
            }
        }
        fetchServers();
    }, []);

    const handleToggle = async (id: number, currentStatus: boolean) => {
        const newStatus = !currentStatus;
        await toggleActive(id, newStatus);
        setServers(servers.map(server => server.id === id ? { ...server, isActive: newStatus } : server));
    };



    return (
        <div className="server-card-container">
            <h1>Server Cards</h1>
            <div className="server-list">
                {servers.map(server => (
                    <div key={server.id} className="server-card">
                        <p><strong>Server name: </strong>{server.server_name}</p>
                        <p><strong>Provider:</strong> {server.company_name}</p>
                        <p><strong>Status:</strong> {server.isActive ? "Active" : "Inactive"}</p>
                        <button onClick={() => handleToggle(server.id, server.isActive)}>
                            {server.isActive ? "Deactivate" : "Activate"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServerCard;