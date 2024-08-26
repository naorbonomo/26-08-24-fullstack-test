import express, { Request, Response, NextFunction } from "express";
import { getServers, getServerStatus, toggleActive } from "../services/cloudService";
import { appConfig } from "../utils/appConfig";


export const cloudRouters = express.Router();

cloudRouters.get(appConfig.routePrefix + "/servers", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parks = await getServers();
        res.status(200).json(parks);
    } catch (error) {
        next(error)  // TODO: add catchAll
    }
})

cloudRouters.patch(appConfig.routePrefix + "/servers/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id;
        const newValue = req.body.newValue;

        if (newValue === undefined) {
            res.status(400).send("newValue is missing");
            return;
        }
        await toggleActive(id, newValue);
        res.status(200).send("Updated");
    } catch (error) {
        next(error);  // TODO: add catchAll
    }
});

cloudRouters.post(appConfig.routePrefix + "/servers/status/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id;

        if (!id) {
            res.status(400).send("id is missing");
            return;
        }

        const status = await getServerStatus(id);
        res.status(200).json({ status });
    } catch (error) {
        next(error);  // TODO: Add catchAll error handler
    }
});