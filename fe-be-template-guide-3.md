# Frontend and Backend Template Setup Guide

## Initial Setup
1. Create a new folder for the project
2. Create separate directories for backend (be) and frontend (fe)
3. Init git repository
4. Set up database

## Backend Setup
1. Start backend project
   - Clone template: `git clone https://github.com/orijohnbryce/nodejs-ts.git`
   - Change VSCode Peacock color for easy identification
2. Set up database connection pool
create appConfig.ts in src/utils
create dal.ts in src/DB
3. Create `initialDB.ts` to set up tables
4. Create `services` folder
   - Services are closest to the DB, handling queries
   - Implement functions to pull and update data
   - Test services locally using a script file
5. Create `controllers` folder
   - Set up router constants to run functions from services
   - Implement controller functions using service functions
   - add `server.use(router)` in app.ts
6. Test API endpoints using Postman
7. Implement error handling
   - Add "catchAll" function (with 4 parameters)
   - Use `server.use(catchAll)`
8. Set up CORS
   ```typescript
   import cors from 'cors';
   
   const corsOptions = {
     origin: ['http://localhost:4000']
   };
   server.use(cors(corsOptions));
   ```

## Frontend Setup
1. Start frontend project
   - Clone template: `git clone https://github.com/orijohnbryce/react-ts-template.git`
   - Change VSCode Peacock color for easy identification
2. Create `api` folder
   - Make API file for backend communication
   - Use Axios for API requests: `npm install axios`
3. Create `types` folder
   - Make types file for TypeScript definitions
4. Create `components` folder
   - Make component files
   - Use API file in components as needed
5. Create `pages` folder
   - Make page files
   - Use components in pages
6. Create `routes` file
   - Use pages in routes configuration

## Development Notes
- useEffect does NOT take async functions directly. Use .then().catch() .
- Learn and refresh on:
  - Props
  - State management
  - React Hooks (useState, useEffect, useContext, useReducer, etc.)
- Create short snippets for:
  - Major React components and hooks
  - Common Node.js functions (fs, path, etc.)
  - TypeScript constructs (interface, type, etc.)

## Project Creation Steps
1. Set up project structure (folders for be and fe)
2. Initialize git repository
3. Set up database
4. Set up backend (Node.js with TypeScript)
5. Implement backend services and controllers
6. Test backend API
7. Set up frontend (React with TypeScript)
8. Implement frontend components, pages, and routing
9. Connect frontend to backend API
10. Implement state management and data flow
11. Add error handling and loading states
12. Test full application flow
13. Refine and optimize as needed

Remember to commit changes and push to git.
