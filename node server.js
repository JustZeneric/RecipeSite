const fs = require("fs");

let users = [];
try {
  const data = fs.readFileSync("users.json", "utf8");
  users = JSON.parse(data);
} catch (err) {
  console.error(err);
}

// rest of the code
