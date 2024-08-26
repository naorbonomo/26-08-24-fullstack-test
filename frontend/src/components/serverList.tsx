import React, { useEffect, useState } from "react";
import { getServers } from "../api/serverAPI";
import { serverType } from "../types/serverType";
import "./serverList.css";

const ServerList = () => {
  const [servers, setServers] = useState<serverType[]>([]);
  const [showActive, setShowActive] = useState<boolean>(true);
  const [sortByDate, setSortByDate] = useState<boolean>(false);

  useEffect(() => {
    async function fetchServers() {
      const data = await getServers();
      if (data) {
        setServers(data);
        console.log(data);
      }
    }
    fetchServers();
  }, [servers]); //update list when status changes

  const filteredAndSortedServers = servers // this took way too long to figure out  !
    .filter(server => showActive ? server.isActive : true)
    .sort((a, b) => {
      if (sortByDate) {
        return new Date(a.dateTimeCreated).getTime() - new Date(b.dateTimeCreated).getTime();
      }
      return 0;
    });

  return (
    <div className="server-list">
      <div className="filter">
        <h1>Server List</h1>
        <label>
          <input
            type="checkbox"
            checked={showActive}
            onChange={(e) => setShowActive(e.target.checked)}
          />
          Show Active Only
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={sortByDate}
            onChange={(e) => setSortByDate(e.target.checked)}
          />
          Sort by Date
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Server Name</th>
            <th>IP Address</th>
            <th>Date Created</th>
            <th>Hosting Provider</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedServers.map(server => (
            <tr key={server.id}>
              <td>{server.server_name}</td>
              <td>{server.ipAddress}</td>
              {/* <td>{server.dateTimeCreated}</td> */}
              <td>{new Date(server.dateTimeCreated).toLocaleDateString()}</td>
              <td>{server.company_name}</td>
              <td>{server.isActive ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServerList;