import { test, expect } from "@playwright/test";
import { TestDataFactory } from "../src/utils/testDataFactory";

test("Read Login Test Data", async () => {

    const user = TestDataFactory.getUser("validUser");

    console.log(user);

    expect(user.username).toBe("emilys");

});