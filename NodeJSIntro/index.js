const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const users = [
      { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
      { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
      { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com" },
      { id: 4, name: "Diana Prince", email: "diana.prince@example.com" },
      { id: 5, name: "Ethan Hunt", email: "ethan.hunt@example.com" },
      { id: 6, name: "Fiona Gallagher", email: "fiona.gallagher@example.com" },
      { id: 7, name: "George Martin", email: "george.martin@example.com" },
      { id: 8, name: "Hannah Baker", email: "hannah.baker@example.com" },
      { id: 9, name: "Ian Malcolm", email: "ian.malcolm@example.com" },
      { id: 10, name: "Julia Roberts", email: "julia.roberts@example.com" }
];

app.get('/users', (req, res) => {
      users.forEach(user => {
            console.log("İstifadəçi məlumatları:", user);
      });
      res.send(users);
});

app.get('/users/:id', (req, res) => {
      const user = users.find(u => u.id === parseInt(req.params.id));
      if (user) {
            console.log("İstifadəçi məlumatları:", user);
            res.send(user);
      } else {
            res.status(404).send('İstifadəçi tapılmadı');
      }
});

app.post('/users', (req, res) => {

      const newUser = {
            id: users.length + 1,
            name: req.body.name,
            email: req.body.email
      };
      users.push(newUser);
      console.log("Yeni istifadəçi əlavə edildi:", newUser);
      res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
      res.send(`İstifadəçi  yeniləndi`);
})

app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
});

