app.get("/public/home", function (req, res) {
    res.json(waitListData);
});

app.get("/public/survey", function (req, res) {
    res.json(tableData);
});
