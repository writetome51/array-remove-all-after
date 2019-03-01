"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var removeAllAfterFirst_1 = require("../privy/removeAllAfterFirst");
var arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8];
// Test 1
// @ts-ignore
removeAllAfterFirst_1.removeAllAfterFirst(1, arr);
if (arrays_match_1.arraysMatch(arr, [1]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8];
// @ts-ignore
removeAllAfterFirst_1.removeAllAfterFirst(2, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2]))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8];
// @ts-ignore
removeAllAfterFirst_1.removeAllAfterFirst(4, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8];
// @ts-ignore
removeAllAfterFirst_1.removeAllAfterFirst(5, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 1, 2, 3, 4, 5]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5: should trigger error if item is not in array:
arr = [1, 2, 3, 4, 1, 2, 3, 4];
var errorTriggered = false;
try {
    // @ts-ignore
    removeAllAfterFirst_1.removeAllAfterFirst(9, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6: should trigger error if item is not primitive or array:
arr = [1, 2, 3, 4, 1, 2, 3, 4];
errorTriggered = false;
try {
    // @ts-ignore
    removeAllAfterFirst_1.removeAllAfterFirst({ prop: 1 }, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7: should trigger error if there's nothing to remove after specified item,
// (because it's the last item):
arr = [1, 2, 3, 4, 1, 2, 3, 4, 8000];
errorTriggered = false;
try {
    // @ts-ignore
    removeAllAfterFirst_1.removeAllAfterFirst(8000, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8: should trigger error if second arg is not array:
arr = [1, 2, 3, 4, 1, 2, 3, 4];
errorTriggered = false;
try {
    // @ts-ignore
    removeAllAfterFirst_1.removeAllAfterFirst(1, { prop1: 1, prop2: 2 });
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
