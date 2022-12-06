const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectdb = require('./config/db');

// routes

const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
// const postRoute = require('./routes/postRoute');
const teamsRoute = require('./routes/teamRoute');
const requestsRoute = require('./routes/requestsRoute');
// const { application } = require('express');
const PORT = process.env.PORT;

connectdb();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoute);

// user
app.use('/user', userRoute);
app.use('/teams', teamsRoute);
app.use('/requests', requestsRoute);
// app.use('/api/posts', postRoute);

const server = app.listen(PORT, () =>
  console.log(`Server Started at Port ${PORT}`)
);

const io = require('socket.io')(server, {
  pingTimeout: 60000,
  cors: {
    origin: '*',
  },
});

// io.on('connection', (socket) => {
//   console.log('sockets are in action');
// });

// io.on('availability', () => {
//   console.log('team available');
// });

io.on('connection', (socket) => {
  console.log('Sockets are in action');
  //   socket.join(userData._id);
  socket.on('setup', (id) => {
    socket.join(id);
    console.log(id, 'connected');
    socket.emit('connected');
  });
  socket.on('availability', (user) => {
    console.log(user);
    socket.emit('emmited', 'message');
  });
});
