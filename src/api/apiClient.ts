import { APIRequestContext, request } from "@playwright/test";
import { ConfigManager } from "../utils/configManager";

export class ApiClient {
private apiContext!: APIRequestContext;

async init() {

    this.apiContext = await request.newContext({

        baseURL: ConfigManager.baseUrl,

    });

}
async get(endpoint: string) {

    return await this.apiContext.get(endpoint);

}

}
