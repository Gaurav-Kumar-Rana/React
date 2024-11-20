import express from "express";
import bodyParser from "body-parser";

//Create a server app
const app = express();

//middlewere to parse body so that it can be send on network
app.use(bodyParser.json());

const todoData = [
  {
    id: "1",
    description: "My Task 1",
    status: false,
  },
];

//Where want to run
const PORT = 3001;

app.all("/", (req, res) => {
  res.status(200).send(`I am Up..`);
});

//Get todo
app.get("/todo", (req, res) => {
  res.status(200).json(todoData);
});

//Create todo
app.post("/todo", (req, res) => {
  const newTodo = req.body;
  todoData.push(newTodo);
  console.log("Created", todoData);
  res.status(201).json({
    message: "New Todo Added",
  });
});

//Update Todo
app.put("/todo/:id", (req, res) => {
  const newTodo = req.body;
  const todoParamId = req.params.id;
  const todoIndex = todoData.findIndex((td) => td.id == todoParamId);
  if (todoIndex !== -1) {
    todoData[todoIndex] = {
      id: todoParamId,
      ...todoData[todoIndex],
      ...newTodo,
    };
    console.log("Updated", todoData);
    res.status(200).json({
      message: "Todo Updated sucessfully",
    });
  } else {
    res.status(400).json({
      message: "Todo Id does not exist",
    });
  }
});

//Delete Todo
app.delete("/todo/:id", (req, res) => {
  const todoParamId = req.params.id;
  const todoIndex = todoData.findIndex((td) => td.id == todoParamId);

  if (todoIndex !== -1) {
    todoData.splice(todoIndex, 1);
  }
  console.log("Deleted", todoData);
  res.status(204).json({ message: `Todo is deleted sucessfully` });
});

//Now listen this app or start the app
app.listen(PORT, () => {
  console.log(`The Server started at port ${PORT}`);
});
