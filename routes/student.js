const router = require("express").Router();
const studentController = require("../controller/studentController");

const { body } = require("express-validator");

router.post(
  "/addstudent",
  body("name").notEmpty(),
  body("age").notEmpty(),
  body("email").notEmpty().isEmail(),
  body("classs").notEmpty(),
  studentController.createStudent
);

router.get("/", studentController.studentsList);

router.put("/update/:id", studentController.updateStudent);

router.delete("/delete/:id", studentController.deleteStudent);

router.get("/getstudentbyid/:id", studentController.getStudentById);

module.exports = router;
