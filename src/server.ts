import mongoose from "mongoose";
import app from "./app";
import { Server_Config } from "./app/config/server.config";

async function main() {
    await mongoose.connect(Server_Config.DATABASE_URI as string);
    app.listen(Server_Config.PORT, () => { console.log(`Blog server is running on ${Server_Config.PORT} 🏃‍♀️‍➡️🏃‍♀️‍➡️🏃‍♀️‍➡️`) })
}
main().catch(err => console.log(err));