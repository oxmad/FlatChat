import { isLoggedIn } from "../isLoggedIn";

describe("isLoggedIn", () => {
  beforeEach(() => localStorage.clear());

  it("positive result", () => {
    localStorage.setItem("username", "Ivan");
    const result = isLoggedIn();

    expect(result).toBe(true);
  });

  it("negative result", () => {
    const result = isLoggedIn();

    expect(result).toBe(false);
  });
});
