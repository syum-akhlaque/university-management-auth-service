import mongoose from "mongoose";
import app, { PORT } from "./app";
import config from "./config";

// main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("db connection seccessful");
  } catch (err) {
    console.log("failed to connect", err);
  }
}
app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

main();
