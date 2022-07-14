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
 * Create a function that returns a promise and resolves after a given amount of time
 * and prints the given message.
 * @param {string} message
 * @param {number} time
 * @returns promise {Promise}
 * @example
 * delayedMessage('Hello', 1000); // Promise resolves after 1000ms and return 'Hello'
 */
function delayedMessage(message, time) {}

/**
 * The function receives a parameter `data`, you must modify the function based on the following rules:
 * - If the data is an number array, you must return a promise resolved after 4 seconds and return sum of all the numbers.
 * - If `data` is an odd number, you must return a promise resolved after 3 seconds and return data.
 * - If `data` is an even number, you must return a promise resolved after 2 seconds and return data.
 * - If `data` is an object, you must return a promise rejected after 1 second and return an error message.
 * @param {number[]|number} data
 * @returns promise {Promise}
 * @example
 * delayedData([1, 2, 3]); // Promise resolves after 4 seconds and return 6
 * delayedData(2); // Promise resolves after 3 seconds and return 2
 * delayedData(3); // Promise resolves after 2 seconds and return 3
 * delayedData({}); // Promise rejects after 1 second and return 'Error'
 */
function delayedData(data) {
  // Your code here!
}

module.exports = {
  delayedMessage,
  delayedData
}