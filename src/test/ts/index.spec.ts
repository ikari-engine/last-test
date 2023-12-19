import { expect } from "chai";
import { describe } from "mocha";
import { helloWorld, byeWorld } from "../../main/ts/index";

describe("index", (): void => {
  it("should be defined", (): void => {
    expect(helloWorld()).equals("Hello, World!");
    expect(byeWorld()).equals("Bye, World!");
  });
});
