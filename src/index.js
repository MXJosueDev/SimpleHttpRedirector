import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 80;

app.get('*', (req, res) => {
	res.redirect(process.env.TARGET_IP + req.url);
});

app.listen(port, () => {
	console.log('Server up at ' + port);
});
