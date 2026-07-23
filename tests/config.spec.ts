import { test, expect } from "@playwright/test";
import { ConfigManager } from "../src/utils/configManager.ts";

test("Verify configuration", async () => {

    console.log(ConfigManager.baseUrl);

    expect(ConfigManager.baseUrl).toBeDefined();

});