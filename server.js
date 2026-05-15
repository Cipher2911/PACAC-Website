const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 4000;

// 1. Configure Handlebars as the view engine
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main', // Refers to views/layouts/main.hbs
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'hbs');

// 2. Serve static files (CSS, JS, images) from the 'public' folder
app.use(express.static('public'));

// 3. Define the Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home | COS Coalition' });
});

app.get('/focus24', (req, res) => {
    res.render('focus24', { title: 'FOCUS 24 | Candidates' });
});

app.get('/focus25', (req, res) => {
    res.render('focus25', { title: 'FOCUS 25 | Candidates' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

// 4. Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});