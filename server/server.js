const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const connectDB = require("./config/db")

const PORT = process.env.PORT || 9000;

app.use(express.json({
    extended: false
}))
app.use(cors());
app.use(bodyParser.json())

app.use('/api/function_LR', require("./routes/api/function_LR"));
app.use('/api/function_X', require("./routes/api/function_X"));
app.use('/api/function_Xs', require("./routes/api/function_Xs"));


app.listen(PORT, () => console.log(`Server started on PORT ${PORT} 🚀`));
connectDB();