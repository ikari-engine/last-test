import { expect } from "chai";
import { describe } from "mocha";
import { helloWorld } from "../../main/ts/index";

describe("index", (): void => {
  it("should be defined", (): void => {
    expect(helloWorld(2, 1)).equals(0);
  });
  it("should not be defined", (): void => {
    expect(helloWorld(2, 0)).equals(Infinity);
  });
});
