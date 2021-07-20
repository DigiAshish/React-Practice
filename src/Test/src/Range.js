import React from "react";
import { useContext } from "react";
import CountContext from "../ContextAPI/CountContext";

const Range = () => {
  const count = useContext(CountContext);

  const minRange = (count, i) => {
    let mi = count + i;
    return mi;
  };

  return (
    <div>
      Range value is: {minRange(count, -1)} - {minRange(count, 1)}
    </div>
  );
};
export default Range;

// describe("test Range", () => {
//   it("test range", () => {
//     expect(minRange(5,1)).toBe(6)
//   });
// });
