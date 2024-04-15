/**
 * Read FAQs section on the left for more information on how to use the editor
**/
/**
* Do not change function name
**/

// Submission - https://devtools.tech/questions/implement-currying-or-javascript-interview-questions/submissions/N7NGbActuomB1eGeU343

const curry = (func) => {
  // write your solution here
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args)
    } else {
      return function (...next) {
        return curried(...args, ...next)
      }
    }

  }
};
