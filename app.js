const express = require('express');
const app = express();
const port = 3000;

const goodsRouter = require("./routes/goods");
const cartsRouter = require("./routes/carts.js");

const connect = require("./schemas");
connect();

app.use(express.json());
app.use("/api", [goodsRouter, cartsRouter]);

// const connect = require("./schemas");
// connect();

// app.use(express.json());
// app.use("/api", [goodsRouter]);

app.get('/',(req, res) => {
  res.send('hello world!');
 // res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.");
});

// app.get("/", (req,res) => {
//   console.log(req.query);

//   // const obj = {
//   //   "KeyKey" : "value 입니다.",//K 대문자로 쓰기
//   //   "이름입니다.":"이름 일까요?",
//   // }
  
//   res.status(200).json({
//     "KeyKey" : "value 입니다.",
//     "이름입니다.":"이름일까요?",
//   }); 
// });

// app.get("/:id", (req,res) => {
//   console.log(req.params);

//   res.send(":id URI에 정상적으로 변환되었습니다.");
// // })
//   app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.use("/api", goodsRouter);

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});