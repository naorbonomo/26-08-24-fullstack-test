import runQuery from "./dal"

const createTables = async () => {
    let Q = `
        CREATE TABLE IF NOT EXISTS books (
            id INT AUTO_INCREMENT PRIMARY KEY,
            book_name VARCHAR(50) NOT NULL,
            author_name VARCHAR(50) NOT NULL,
            price INT NOT NULL,
            genre VARCHAR(50) NOT NULL,
            quantity INT NOT NULL
        );
    `;
    await runQuery(Q);

    Q = `
        CREATE TABLE IF NOT EXISTS members (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE
        );
    `;
    await runQuery(Q);

    Q = `
        CREATE TABLE IF NOT EXISTS rentals (
            id INT AUTO_INCREMENT PRIMARY KEY,
            book_id INT NOT NULL,
            member_id INT NOT NULL,
            rental_date DATE NOT NULL,
            return_date DATE,
            FOREIGN KEY (book_id) REFERENCES books(id),
            FOREIGN KEY (member_id) REFERENCES members(id)
        );
    `;
    await runQuery(Q);
};

const createSampleData = async () => {
    let Q = `
        INSERT INTO books (book_name, author_name, price, genre, quantity) VALUES
        ('The Great Gatsby', 'F. Scott Fitzgerald', 10, 'Fiction', 5),
        ('1984', 'George Orwell', 15, 'Dystopian', 3),
        ('To Kill a Mockingbird', 'Harper Lee', 12, 'Classic', 4),
        ('The Catcher in the Rye', 'J.D. Salinger', 10, 'Classic', 2),
        ('Moby-Dick', 'Herman Melville', 20, 'Adventure', 1)
    `;
    await runQuery(Q);

    Q = `
        INSERT INTO members (name, email) VALUES
        ('John Doe', 'john.doe@example.com'),
        ('Jane Smith', 'jane.smith@example.com'),
        ('Alice Johnson', 'alice.johnson@example.com'),
        ('Bob Brown', 'bob.brown@example.com'),
        ('Charlie Davis', 'charlie.davis@example.com')
    `;
    await runQuery(Q);

    Q = `
        INSERT INTO rentals (book_id, member_id, rental_date, return_date) VALUES
        (1, 1, '2023-10-01', '2023-10-15'),
        (2, 2, '2023-10-02', '2023-10-16'),
        (3, 3, '2023-10-03', '2023-10-17'),
        (4, 4, '2023-10-04', '2023-10-18'),
        (5, 5, '2023-10-05', '2023-10-19')
    `;
    await runQuery(Q);
};

// createTables().then(() => {
//     console.log("Done creating tables");
// })

// createSampleData().then(()=>{console.log("Done adding data");})

const addImageUrlColumn = async () => {
    let Q = `
        ALTER TABLE books
        ADD COLUMN imageUrl TEXT;
    `;
    await runQuery(Q);
};

const updateImageUrls = async () => {
    let Q = `
        UPDATE books SET imageUrl = CASE
            WHEN book_name = 'The Great Gatsby' THEN 'https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1'
            WHEN book_name = '1984' THEN 'https://example.com/images/1984.jpg'
            WHEN book_name = 'To Kill a Mockingbird' THEN 'https://example.com/images/mockingbird.jpg'
            WHEN book_name = 'The Catcher in the Rye' THEN 'https://example.com/images/catcher.jpg'
            WHEN book_name = 'Moby-Dick' THEN 'https://example.com/images/mobydick.jpg'
            ELSE imageUrl
        END;
    `;
    await runQuery(Q);
};

// const initializeDatabase = async () => {
//     // await createTables();
//     // await createSampleData();
//     await addImageUrlColumn();
//     await updateImageUrls();
// };

// initializeDatabase();