import { test, expect } from "@playwright/test";
import { ApiClient } from "../src/api/apiClient";

test("Verify ApiClient", async () => {

    const client = new ApiClient();

    await client.init();

    const response = await client.get("/users");

    expect(response.ok()).toBeTruthy();

});