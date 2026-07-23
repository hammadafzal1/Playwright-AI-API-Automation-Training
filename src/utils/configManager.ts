import dotenv from "dotenv";
dotenv.config();

export class ConfigManager {

    static readonly baseUrl = process.env.BASE_URL;

    static readonly timeout = Number(process.env.API_TIMEOUT);

    static readonly environment = process.env.ENV;



}