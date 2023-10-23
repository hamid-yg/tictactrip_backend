const swaggerAutogen = require("swagger-autogen")();

const doc = {
  host: "localhost:5000",
  info: {
    title: "TicTacTrip Backend",
    version: "1.0.0",
    description: "Justify Content API with Swagger",
    termsOfService: "http://www.github.com/hamid-yg/tictactrip_backend",
    contact: {
      name: "",
      url: "",
      email: "",
    },
  },
  servers: [
    {
      url: "https://tictactrip.herokuapp.com/",
      description: "TicTacTrip Backend",
    },
  ],
  schemes: ["http"],
  securityDefinitions: {
    type: "bearer",
    name: "Authorization",
    in: "header",
    description: "Enter your bearer token in the format **Bearer &lt;token>**",
  },
  definitions: {
    User: {
      _id: 1,
      email: "hamidtessilimi@gmail.com",
      token: "45f0ee4e-cf55-4d8a-bd5e-551a0d79655b",
      quota: 80000,
      lastRequest: "12/07/1996"
    }
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./index.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
