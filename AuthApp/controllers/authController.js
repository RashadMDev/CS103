const Joi = require('joi');
const jwt = require('jsonwebtoken');

const users = [
      { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", password: "password123" },
      { id: 2, name: "Bob Smith", email: "bob.smith@example.com", password: "password123" },
      { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", password: "password123" },
      { id: 4, name: "Diana Prince", email: "diana.prince@example.com", password: "password123" },
      { id: 5, name: "Ethan Hunt", email: "ethan.hunt@example.com", password: "password123" },
      { id: 6, name: "Fiona Gallagher", email: "fiona.gallagher@example.com", password: "password123" },
      { id: 7, name: "George Martin", email: "george.martin@example.com", password: "password123" },
      { id: 8, name: "Hannah Baker", email: "hannah.baker@example.com", password: "password123" },
      { id: 9, name: "Ian Malcolm", email: "ian.malcolm@example.com", password: "password123" },
      { id: 10, name: "Julia Roberts", email: "julia.roberts@example.com", password: "password123" }
];

const userSchema = Joi.object({
      name: Joi.string().min(3).max(60).required().messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 3 characters long",
            "string.max": "Name must be at most 60 characters long"
      }),
      email: Joi.string()
            .pattern(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
            .required()
            .messages({
                  "string.pattern.base":
                        "Email can only contain letters, numbers, '.' and '_' before '@'",
                  "string.empty": "Email is required",
            }),
      password: Joi.string()
            .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,40}$"))
            .required()
            .messages({
                  "string.pattern.base":
                        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and be at least 8 characters long",
                  "string.empty": "Password is required",
            }),
});

const SECRET = process.env.SECRET

exports.register = (req, res) => {

      const { error } = userSchema.validate(req.body);
      if (error) {
            return res.status(400).json({ message: error.details[0].message });
      }

      const newUser = {
            id: users.length + 1,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
      }
      users.push(newUser);
      res.status(201).json(newUser);
};

exports.login = (req, res) => {
      const { error } = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
      }).validate(req.body);
      if (error) {
            return res.status(400).json({ message: error.details[0].message });
      }

      const token = jwt.sign({ email: req.body.email }, SECRET, { expiresIn: '1h' });
      const { email, password } = req.body;
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
            res.status(200).json({ message: "Login successful", user, token });
      } else {
            res.status(401).json({ message: "Invalid email or password" });
      }

};

exports.getUsers = (req, res) => {
      res.json(users);
};

exports.deleteUser = (req, res) => {
      const userId = parseInt(req.params.id, 10);
      const userIndex = users.findIndex(user => user.id === userId);
      if (userIndex !== -1) {
            users.splice(userIndex, 1);
            res.status(200).json({ message: "User deleted" });
      } else {
            res.status(404).json({ message: "User not found" });
      }
};

exports.updateUser = (req, res) => {

      const { error } = userSchema.validate(req.body);
      if (error) {
            return res.status(400).json({ message: error.details[0].message });
      }

      const userId = parseInt(req.params.id);
      const user = users.find(user => user.id === userId);
      if (user) {
            const { name, email, password } = req.body;

            if (name && name.trim() !== "") {
                  user.name = name;
            }
            if (email && email.trim() !== "") {
                  user.email = email;
            }
            if (password && password.trim() !== "") {
                  user.password = password;
            }

            res.status(200).json({ message: "User updated", user });
      } else {
            res.status(404).json({ message: "User not found" });
      }
};