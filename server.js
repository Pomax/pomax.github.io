const express = require("./gh-weblog/node_modules/express/index.js");

const PORT = process.env.PORT ?? 8000;
process.env.PORT = PORT;

const HOSTNAME = process.env.HOSTNAME ?? `localhost`;
process.env.HOSTNAME = HOSTNAME;

// Set up the core server
const app = express();
app.use((req, res, next) => {
  res.setHeader("Surrogate-Control", "no-store");
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.setHeader("Expires", "0");
  next();
});

app.set("etag", false);
app.use((req, res, next) => {
  if (!process.argv.includes(`--test`)) {
    console.log(`[${new Date().toISOString()}] ${req.url}`);
  }
  next();
});

// static routes
app.get(`/`, (req, res) => res.redirect(`/index.html`));
app.use(`/`, express.static(`.`));
app.use((req, res) => {
  if (req.query.preview) {
    res.status(404).send(`Preview not found`);
  } else {
    res.status(404).send(`${req.url} not found`);
  }
});

// Run the server, and trigger a client bundle rebuild every time script.js changes.
app.listen(PORT, () => {
  const msg = `=   Server running on http://${HOSTNAME}:${PORT}   =`;
  const line = `=`.repeat(msg.length);
  const mid = `=${` `.repeat(msg.length - 2)}=`;
  console.log([``, line, mid, msg, mid, line, ``].join(`\n`));
});
