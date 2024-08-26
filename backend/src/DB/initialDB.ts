import runQuery from "./dal"

const createTables = async () => {
    let Q = `
        CREATE TABLE IF NOT EXISTS provider (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL
        );
    `;
    await runQuery(Q);

    Q = `
        CREATE TABLE IF NOT EXISTS server (
            id INT AUTO_INCREMENT PRIMARY KEY,
            server_name VARCHAR(50) NOT NULL,
            provider_id INT NOT NULL,
            ipAddress VARCHAR(15) NOT NULL,
            isActive BOOLEAN NOT NULL,
            dateTimeCreated DATETIME NOT NULL,
            FOREIGN KEY (provider_id) REFERENCES provider(id)
        );
    `;
    await runQuery(Q);
};

const createSampleData = async () => {
    let Q = `
        INSERT INTO provider (name) VALUES
        ('Microsoft'),
        ('IBM'),
        ('GoDaddy'),
        ('DigitalO');
    `;
    await runQuery(Q);

    Q = `
        INSERT INTO server (server_name, provider_id, ipAddress, isActive, dateTimeCreated) VALUES
        ('Shula', 1, '192.168.1.1', true, '2023-01-01 10:00:00'),
        ('micha', 2, '192.168.1.2', true, '2023-01-02 11:00:00'),
        ('macabi', 3, '192.168.1.3', false, '2022-01-13 12:00:00'),
        ('police', 4, '192.168.1.4', true, '2023-01-04 13:00:00');
    `;
    await runQuery(Q);
};

// createTables().then(() => {
//     console.log("Done creating tables");
// })

// createSampleData().then(()=>{console.log("Done adding data");})
