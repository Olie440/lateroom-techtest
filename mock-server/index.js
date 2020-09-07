import express from "express";
import cors from "cors";
import { green, blue, yellow, bold } from "chalk";
import MockHotels from "../src/__mocks__/mock-hotels";

const app = express();
const mockHotels = MockHotels();

app.use(cors());

app.get("/hotels", (req, res) => {
  console.log(blue(`GET: ${bold(req.ip)} ->`), yellow(bold("/hotels")));

  // I want to show off the loading screen
  setTimeout(() => {
    res.type("application/json");
    res.send(JSON.stringify(mockHotels));
    res.end();
  }, 1000); 
});

app.listen("4000");

console.clear();
console.log(green("Mock Server Started"));
console.log();
console.log(blue("    Hotels:"), yellow("http://localhost:4000/hotels"));
console.log("");
console.log(green("Request Log:"));
