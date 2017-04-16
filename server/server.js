let express = require('express');
let app = express();

const port = 1337;

// serve static files from public
app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`Listening on port ${port}`));