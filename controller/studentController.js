const studentService = require("../services/studentService");
const db = require("../models/index");
const students = db.students;
const { validationResult } = require("express-validator");

module.exports = {
  createStudent: async (req, res) => {
    try {
      const validationErrors = validationResult(req);
      if (!validationErrors.isEmpty()) {
        return res
          .status(400)
          .send({ status: "FAILURE", message: "Please Enter all detail" });
      }
      const { name, age, email, classs } = req.body;
      const student = {
        name,
        age,
        email,
        class: classs,
      };
      const students = await studentService.createStudent(student);
      if (students.error)
        return res
          .status(500)
          .send({ status: "FAILURE", message: "Failed to create student" });
      res.status(200).send({
        status: "SUCCESS",
        message: "Insert student detail succesfully",
      });
    } catch (error) {
      res
        .status(500)
        .send({ status: "FAILURE", message: "Internal server error" });
    }
  },
  studentsList: async (req, res) => {
    try {
      const students = await studentService.studentsList();
      res.status(200).send({ status: "SUCCESS", students });
    } catch (error) {
      res
        .status(500)
        .send({ status: "FAILURE", message: "Internal server error" });
    }
  },
  updateStudent: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await students.findByPk(id);
      if (!student)
        return res.status(500).send({
          status: "FAILURE",
          message: "Student detail not found",
        });
      const result = await studentService.updateStudent(id, req.body);
      if (!result[0])
        return res.status(500).send({
          status: "FAILURE",
          message: "Failed to update student detail",
        });
      res.status(200).send({
        status: "SUCCESS",
        message: "Update student deatil successfully",
      });
    } catch (error) {
      res
        .status(500)
        .send({ status: "FAILURE", message: "Internal server error" });
    }
  },
  deleteStudent: async (req, res) => {
    const { id } = req.params;
    const result = await studentService.deleteStudent(id);
    if (!result)
      res.status(500).send({
        status: "FAILURE",
        message: "Failed to delete student detail",
      });
    res.status(200).send({
      status: "SUCCESS",
      message: "Update student deatil successfully",
    });
  },
  getStudentById: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentService.getStudentById(id);
      if (!student)
        return res.status(500).send({
          status: "FAILURE",
          message: "Student detail not found",
        });
      res.status(200).send({ status: "SUCCESS", student });
    } catch (error) {
      res
        .status(500)
        .send({ status: "FAILURE", message: "Internal server error" });
    }
  },
};
