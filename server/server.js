let express = require('express');
let app = express();

const port = 1337;

// serve static files from public
app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on port ${port}`));