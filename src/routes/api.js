const express = require('express');
const helloController = require("../controllers/helloController");
const studentsController = require("../controllers/studentsController");

const router = express.Router();

// Defined Route.

router.get("/hello-get",helloController.HelloGet);
router.post("/hello-post",helloController.HelloPost);

// Using Mongoose

router.post("/Insert-Student",studentsController.InsertStudent);
router.get("/Read-Student",studentsController.readStudent);
router.post("/Update-Student/:id",studentsController.updateStudent);
router.get("/Delete-Student/:id",studentsController.deleteStudent);


module.exports = router;