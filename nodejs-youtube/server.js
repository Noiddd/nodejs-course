const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        console.log(data);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

// read from file
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// write into file
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to meet you",
  (err) => {
    if (err) throw err;
    console.log("Write complete");

    // edit file
    // will create file if doesnt exist
    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "Append text",
      (err) => {
        if (err) throw err;
        console.log("Append complete");
      }
    );
  }
);

// edit file
// will create file if doesnt exist
fs.appendFile(
  path.join(__dirname, "files", "reply.txt"),
  "Append text",
  (err) => {
    if (err) throw err;
    console.log("Append complete");
  }
);

// exit on uncaught error
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
