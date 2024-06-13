import express from "express";
import bodyParser from "body-parser";
import { createServer } from "http";
import * as soap from "soap";
import { helloService } from "./services/HelloService";
import { loadWsdl } from "./utils/wsdl";
import { dateService } from "./services/DateService";

const app = express();
app.use(bodyParser.raw({ type: () => true, limit: "5mb" }));

// Set up the server
const server = createServer(app);
soap.listen(server, "/hello", helloService, loadWsdl("HelloService.wsdl"));
soap.listen(server, "/date", dateService, loadWsdl("DateService.wsdl"));

// Start listening
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`SOAP service listening at http://localhost:${PORT}`);
});
