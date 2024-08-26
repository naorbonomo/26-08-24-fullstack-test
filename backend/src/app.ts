import express, { Request, Response } from "express"
import { appConfig } from "./utils/appConfig";
import { rentalRouters } from "./controllers/rentalController";
import catchAll from "./middlewares/catchAll";
import cors from "cors"
const server = express();

// load body
server.use(express.json());

server.get("/", (req: Request, res: Response)=>{
    res.send("<h1>Hello World!</h1>")
})

// server.use(cors(corsOptions));
server.use(cors());

// use routers
server.use("/", rentalRouters)

// catch erros
server.use(catchAll)

// server.listen(3000, ()=>{console.log("Listening on http://localhost:3000");
// })
server.listen(appConfig.port, ()=>{console.log(`Listening on http://localhost:${appConfig.port}`);
})