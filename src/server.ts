import app from "./app"
import { ensureDatabaseCreated } from "./repositories/sequelize";

app.listen(3000, async () => {
    await ensureDatabaseCreated();
    console.log("app is listening on port 3000");
});
