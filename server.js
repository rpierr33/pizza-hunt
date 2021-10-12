<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
=======
const mongoose = require('mongoose');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));


mongoose.connect(process.env.MONGODB || 'mongodb://localhost/pizza-hunt'
// ,
//  {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
);

//Use this to log mongo queries being executed!
//mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
>>>>>>> 4e82fcf62b92f729ce4f9e4b733ae0e61d19d03d
