import type { Request, Response } from 'express';
import {resolverBook} from "nodejs-book-modules";

export async function getAll(req: Request, res: Response){
    return await resolverBook.books(req, res);
}