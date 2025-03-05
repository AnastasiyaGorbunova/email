/*
1) сначала импортируем
2) express():
set - настройки
use - (конвейер)
*/

//пишем сервер, который обрабатывает запросы:
const express = require("express"); //==import from (но старая версия)
const bodyParser = require("body-parser");
const mail = require("./mail");

const app = express(); //создание приложения
const appMail = mail();
const port = 3000;

app.use(bodyParser.json()); //добавляет обработку тела запроса
app.use("/", express.static("public")); // "/ = /index.html" // он для get запросов

/**
 * обработка post запроса:
 * req - информация из запроса
 * res - ответ сервера
 */
app.post("/mail", async (req, res) => {
    //Нельзя отправлять два ответа (отправляется только один ответ)
    // res.send("Hello"); //ответ
    // res.json({ Bob: "человек" }); //ответ в формате json
    try {
        console.log(req.body);
        await appMail(req.body.email);
        res.json(req.body.email);
    } catch (error) {
        console.log("error: ", error);
        res.status(500);
        res.send("error: " + error);
    }
});

//обработка get запроса:
app.get("/", (req, res) => {
    res.send("Сервер для отправки писем");
});

//слушанье порта
app.listen(port, () => {
    console.log(
        `Приложение стартовало на порту ${port}. Пройдите по ссылке http://localhost:${port}/`
    );
});
