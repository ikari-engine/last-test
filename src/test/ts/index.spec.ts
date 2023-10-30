import { expect } from "chai";
import { describe } from "mocha";
import { helloWorld } from "../../main/ts/index";

describe("index", (): void => {
  it("should be defined", (): void => {
    expect(helloWorld(false)).equals("Hello, World!");
  });
  it("should not be defined", (): void => {
    expect(helloWorld(true)).equals("Hello, World!");
  });
});
