require("dotenv").config();

const checkEnvVar = (name) => {
  if (process.env[name] == undefined) {
    throw new Error(`Undefined env. variable ${name}`);
  }
  return process.env[name];
};
process.env.PORT;

module.exports = {
  PORT: checkEnvVar("PORT"),
  MONGO_URL: checkEnvVar("MONGO_URL"),
};
