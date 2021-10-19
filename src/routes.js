const express = require("express");
const routes = express.Router();

const views = __dirname + "/views/";

const profile = {
  name: "Pedro Makengo",
  avatar: "https://github.com/pedromakengo.png",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4,
};

const jobs = [];

// Criando as minhas rotas
routes.get("/", (req, res) => res.render(views + "index"));
routes.get("/job", (req, res) => res.render(views + "job"));
routes.post("/job", (req, res) => {
  jobs.push(req.body);
  // req.body = {name: 'asdf', 'daily-hours': '3.1', 'total-hours': '3'}

  const job = req.body;
  job.createdAt = Date.now(); // atribuindo uma nova data

  jobs.push(job);
  return res.redirect("/");
});
routes.get("/job/edit", (req, res) => res.render(views + "job-edit"));
routes.get("/profile", (req, res) =>
  res.render(views + "profile", { profile })
);

module.exports = routes;
