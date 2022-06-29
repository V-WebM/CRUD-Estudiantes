const express = require('express');
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

/**
 * @description Root Route
 * @method GET/
 */
route.get('/',services.homeRoutes);

/**
 * @description add student
 * @method GET/add_student
 */
route.get('/add-student',services.add_student);

/**
 * @description for update student
 * @method GET/update_student
 */
route.get('/update-student',services.update_student);

route.post("/api/student",controller.create);
route.get("/api/student",controller.find);
route.put("/api/student/:id",controller.update);
route.delete("/api/student/:id",controller.delete);

module.exports = route;