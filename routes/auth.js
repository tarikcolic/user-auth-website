const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../config');

const router = express.Router();

// ruta za registraciju
router.post('/register', async (req, res) => {
    try {
        const { username, password, passwordConfirm } = req.body;

        if (!username || !password || !passwordConfirm) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        if (password !== passwordConfirm) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // hashiranje
        const hashedPassword = await bcrypt.hash(password, 8);

        const connection = await pool.getConnection();

        // provjeri da li vec korisnik postoji
        const [results] = await connection.query('SELECT username FROM users WHERE username = ?', [username]);

        if (results.length > 0) {
            connection.release();
            return res.status(400).json({ message: 'Username is already in use' });
        }

        // new user
        await connection.query('INSERT INTO users SET ?', { username: username, password: hashedPassword });
        connection.release();

        return res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error: ' + error.message });
    }
});

// login ruta
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Please provide username and password' });
        }

        const connection = await pool.getConnection();
        const [results] = await connection.query('SELECT password FROM users WHERE username = ?', [username]);
        connection.release();

        if (results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
            return res.status(401).json({ message: 'Username or password is incorrect' });
        }

        return res.status(200).json({ message: 'User logged in successfully!' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error: ' + error.message });
    }
});

module.exports = router;
