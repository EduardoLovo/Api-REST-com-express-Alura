import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.routes.js";
const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("conexão feita com sucesso");
});

const app = express();
routes(app);

export default app;
