import {
  INCREMENT_COUNT,
  incrementCount,
  DECREMENT_COUNT,
  decrementCount,
  RESET_COUNT
} from "./counter.action";
import { counter } from "./counter.reducer";
import { getCount } from "./counter.selector";

describe("# counter reducer", () => {
  describe("## actions", () => {
    it("should create an action to increment a value", () => {
      const value = 1;
      const expectedAction = {
        type: INCREMENT_COUNT,
        payload: value
      };
      expect(incrementCount(value)).toEqual(expectedAction);
    });

    it("should create an action to decrement a value", () => {
      const value = 1;
      const expectedAction = {
        type: DECREMENT_COUNT,
        payload: value
      };
      expect(decrementCount(value)).toEqual(expectedAction);
    });
  });

  describe("## reducer", () => {
    it("should return the initial state", () => {
      expect(counter(undefined, {})).toEqual({ count: 0 });
    });

    it("should handle INCREMENT_COUNT", () => {
      expect(
        counter(
          { count: 0 },
          {
            type: INCREMENT_COUNT,
            payload: 1
          }
        )
      ).toEqual({ count: 1 });
    });

    it("should handle DECREMENT_COUNT", () => {
      expect(
        counter(
          { count: 0 },
          {
            type: DECREMENT_COUNT,
            payload: 1
          }
        )
      ).toEqual({ count: -1 });
    });

    it("should handle RESET_COUNT", () => {
      expect(
        counter(
          { count: 10 },
          {
            type: RESET_COUNT
          }
        )
      ).toEqual({ count: 0 });
    });
  });

  describe("## selectors", () => {
    it("should return 10 as value for getCount", () => {
      const initalStore = { counter: { count: 0 } };
      expect(getCount(initalStore)).toEqual(0);
    });
  });
});
