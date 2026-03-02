// Test cases for str validation
const testCases = [
    { str: "addfdre", expected: "good" },      // starts with 'a', length > 3
    { str: "Addfdre", expected: "good" },      // starts with 'A', length > 3
    { str: "abc", expected: "not good" },      // starts with 'a', but length = 3
    { str: "a", expected: "not good" },        // starts with 'a', length = 1
    { str: "bcdfdre", expected: "not good" },  // doesn't start with 'a' or 'A'
    { str: "Axyz", expected: "good" },         // starts with 'A', length > 3
];

testCases.forEach(({ str, expected }) => {
    console.log(`\nTesting: "${str}"`);
    if((str[0] === 'a' || str[0] === 'A') && str.length > 3){
        console.log(` ${str} is a good string`);
        console.log(str.length);
        console.log(`✓ Result: good (${expected === "good" ? "PASS" : "FAIL"})`);
    }
    else {
        console.log(` ${str} is not a good string`);
        console.log(`✓ Result: not good (${expected === "not good" ? "PASS" : "FAIL"})`);
    }
});