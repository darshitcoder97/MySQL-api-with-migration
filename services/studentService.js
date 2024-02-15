const db = require("../models/index");
const students = db.students;
const { Op, BOOLEAN } = require("sequelize");

module.exports = {
  createStudent: async (student) => {
    try {
      const result = await students.create(student);
      return result;
    } catch (error) {
      return { error };
    }
  },
  studentsList: async () => {
    const studentData = await students.findAll({
      raw: true,
      nest: true,
    });
    return studentData;
  },
  updateStudent: async (studentId, studentDetail) => {
    try {
      const result = await students.update(studentDetail, {
        where: {
          id: studentId,
        },
      });
      return result;
    } catch (error) {
      return { error };
    }
  },
  deleteStudent: async (studentId) => {
    try {
      const result = await students.destroy({
        where: {
          id: studentId,
        },
      });
      return result;
    } catch (error) {
      return { error };
    }
  },
  getStudentById: async (id) => {
    try {
      const isstudent = await students.findOne({
        where: {
          id: id,
        },
      });
      return isstudent
    } catch (error) {
      return { error }
    }
  },
};
