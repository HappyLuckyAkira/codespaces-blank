import { helloWorld } from ".";

test("テスト", () => {
  expect(helloWorld()).toBe("Hello World")
})