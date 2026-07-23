import fs from "fs";
import path from "path";

export class TestDataFactory {

    private static readonly testDataPath =
        path.join(process.cwd(), "input", "dummyjson", "testdata.json");

    static getData() {

        const raw = fs.readFileSync(this.testDataPath, "utf8");

        return JSON.parse(raw);

    }

    static getUser(userType: string) {

        return this.getData()[userType];

    }

}