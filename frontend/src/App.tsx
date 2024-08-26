import React, { useEffect, useState } from 'react';
import ServerList from './components/serverList';
import { serverType } from './types/serverType';
import { getServers } from './api/serverAPI';
import ServerCard from './components/serverCard';


function App() {
    const [servers, setservers] = useState<serverType[]>([]);

    useEffect(() => {
        // get all servers from BE
        getServers()
            .then((data) => {
                if (data) {
                    setservers(data);  // update only if available
                } else {
                    setservers([]);  // fallback
                }
            })
            .catch((error) => {
                console.error('Error fetching servers:', error);
            });
    }, []);

    return (
        <div>
            <h1>Welcome to the our cloud server list</h1>
            <ServerList />
            <ServerCard />
        </div>
    );
}

export default App;
