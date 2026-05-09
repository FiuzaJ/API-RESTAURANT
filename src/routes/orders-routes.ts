import { Router } from "express";
import { OrdersController } from "../controllers/orders-controller";

const ordersRoutes = Router()
const ordersController = new OrdersController()

ordersRoutes.post("/", ordersController.create)
ordersRoutes.get("/table-sessions/:table_sessions_id", ordersController.index)
ordersRoutes.get("/table-sessions/:table_sessions_id/total", ordersController.show)


export{ ordersRoutes }