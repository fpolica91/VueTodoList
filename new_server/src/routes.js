import { Router } from "express";
const routes = new Router();
import AdminController from "./app/controllers/admin.controller";
import RentalController from "./app/controllers/rental.controller";
import authMiddleware from "./app/middlewares/auth.middleware";

routes.post("/admin", AdminController.store);

routes.use(authMiddleware);
routes.post("/rentals", RentalController.store);

export default routes;
