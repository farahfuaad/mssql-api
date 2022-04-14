const express = require('express');
const app = express();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.send('Salam Muafakat!');
});

// READ API
app.get('/pengguna', async (req, res) => {
    const jawapan = await prisma.pengguna.findMany();
    res.json(jawapan);
  });

app.listen(8081, () => {
    console.log('App listening on port 8081!');
});

//Run app, then load http://localhost:8081 in a browser to see the output.