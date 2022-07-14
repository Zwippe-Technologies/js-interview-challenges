// Copyright 2022 Zwippe Tech <contact@zwippe.com>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Create a function that takes as argument an array of numbers and returns the
 * sum of all the numbers in the array.
 * @param {number[]} numbers
 * @returns sum {number}
 * @example
 * sum([1, 2, 3, 4, 5]); // 15
 */
function sum(numbers) {
  // Your code here!
}


/**
 * Create a function that takes as argument an array of objects with the following attributes:
 * - name: string
 * - email: string
 * - age: number
 *
 * The function should return the average age of all objects in the array.
 * @param {object[]} people
 * @returns averageAge {number}
 * @example
 * averageAge([
 *   { name: 'John', email: 'example@example.com', age: 20 },
 *   { name: 'Jane', email: ' example@example.com', age: 21 },
 *   { name: 'Joe', email: 'example@example.com', age: 22 }
 * ]); // 21
 */
function averageAge(people) {
  // Your code here!
}

/**
 * Given two arrays of numbers, create a function that returns a new array with the two arrays combined.
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @returns combined {number[]}
 * @example
 * combined([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
 */
function combined(numbers1, numbers2) {
  // Your code here!
}

/**
 * Given a multi-dimensional array, create a function that returns all array values in a flattened array. (Flattening Algorithm)
 * @param {number[][]} array
 * @returns flattened {number[]}
 * @example
 * flattened([[1, 2, 3], [4, 5, 6]]); // [1, 2, 3, 4, 5, 6]
 */
function flattened(array) {
  // Your code here!
}

/**
 * Given an array of text lines, create a function that returns the total number of words in all lines.
 * @param {string[]} lines
 * @returns totalWords {number}
 * @example
 * totalWords(['Hello World', 'How are you?']); // 5
 */
function totalWords(lines) {
  // Your code here!
}

/**
 * Given an array of numbers, create a function that sorts the numbers in the array in ascending order.
 * @param {number[]} numbers
 * @returns sorted {number[]}
 * @example
 * sorted([3, 1, 2]); // [1, 2, 3]
 */
function sorted(numbers) {
  // Your code here!
}


module.exports = {
  sum,
  averageAge,
  combined,
  flattened,
  totalWords,
  sorted
}