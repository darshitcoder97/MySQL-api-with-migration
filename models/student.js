

module.exports = (sequlize, DataTypes) => {
  const student = sequlize.define(
    "students",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          customValidator(value) {
            const regpx = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
            if (!value.match(regpx)) {
              throw new Error("email not valid");
            }
          },
        },
        unique: true,
      },
      class: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 12,
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return student;
};
