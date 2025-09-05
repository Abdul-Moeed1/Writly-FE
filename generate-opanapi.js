import openapi from "openapi-typescript-codegen";

const generateAxios = async () => {
  openapi.generate({
    input: "http://localhost:3000/api/docs-json",
    output: "./generated",
    httpClient: "axios",
  });
};

generateAxios();
