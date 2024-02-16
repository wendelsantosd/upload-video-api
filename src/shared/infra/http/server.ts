import { server } from "@shared/config/env/server";
import { app } from "./app";

app.listen(server.port || 3333, () =>
  console.log(`Server is running on port ${server.port || 3333}`)
);
