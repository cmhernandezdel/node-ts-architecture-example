import assert from "assert";

interface Configuration {
    database: {
        connection: string;
    }
}

assert(process.env["DATABASE_CONNECTION"], "Environment variable DATABASE_CONNECTION not set");

const config : Configuration = {
    database: {
        connection: process.env.DATABASE_CONNECTION!
    }
}

export default config;