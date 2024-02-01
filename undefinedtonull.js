// One of the differences between null and undefined is how they are treated differently in JSON.stringify().
//
// JSON.stringify({a: null})      // '{"a":null}'
// JSON.stringify({a: undefined}) // '{}'

// JSON.stringify([null])         // '[null]'
// JSON.stringify([undefined])    // '[null]'
//

const replacer = (key, val) => (typeof val == "undefined" ? null : val);
const undefinedToNull = (args) => JSON.parse(JSON.stringify(args, replacer));
console.log(undefinedToNull({ a: undefined }));

//here we are making use of the replacer attribute in JSOn.stringify
//replacer - A function that alters the behavior of the stringification process, or an array of strings and numbers that specifies properties of value to be included in the output.
