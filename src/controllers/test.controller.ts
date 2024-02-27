import { Express, Request, Response } from "express";

export const testController = async(req:Request, res:Response) => {
    console.log(req.url);
    res.json({"test":"server is live ... !!!"});
}