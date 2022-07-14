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

const {
  sum,
  averageAge,
  combined,
  flattened,
  totalWords,
  sorted
} = require('./src/01-arrays')

const { delayedMessage, delayedData } = require('./src/02-promises')

function main () {
  console.log('checking arrays')
  // check if sum works
  console.log({
    expected: 15,
    actual: sum([1, 2, 3, 4, 5]),
    passed: sum([1, 2, 3, 4, 5]) === 15
  })
  // check if averageAge works
  console.log({
    expected: 21,
    actual: averageAge([
      { name: 'John', email: 'example@example.com', age: 20 },
      { name: 'Jane', email: 'example@example.com', age: 21 },
      { name: 'Joe', email: 'example@example.com', age: 22 }
    ]),
    passed: averageAge([
      { name: 'John', email: 'example@example.com', age: 20 },
      { name: 'Jane', email: 'example@example.com', age: 21 },
      { name: 'Joe', email: 'example@example.com', age: 22 }
    ]) === 21
  })

  // check if combined works
  console.log({
    expected: [1, 2, 3, 4, 5, 6],
    actual: combined([1, 2, 3], [4, 5, 6]),
    passed: combined([1, 2, 3], [4, 5, 6]) === [1, 2, 3, 4, 5, 6]
  })

  // check if flattened works
  console.log({
    expected: [1, 2, 3, 4, 5, 6],
    actual: flattened([1, 2, 3, [4, 5, 6]]),
    passed: flattened([1, 2, 3, [4, 5, 6]]) === [1, 2, 3, 4, 5, 6]
  })

  // check if totalWords works
  console.log({
    expected: 6,
    actual: totalWords([
      'Hello',
      'World',
      'This',
      'is',
      'a',
      'test'
    ]),
    passed: totalWords([
      'Hello',
      'World',
      'This',
      'is',
      'a',
      'test'
    ]) === 6
  })

  // check if sorted works
  console.log({
    expected: [1, 2, 3, 4, 5, 6],
    actual: sorted([6, 5, 4, 3, 2, 1]),
    passed: sorted([6, 5, 4, 3, 2, 1]) === [1, 2, 3, 4, 5, 6]
  })

  console.log('checking promises')
  // check if delayedMessage works

  try {
  delayedMessage('Hello World!', 1000).then(message => {
    console.log({
      expected: 'Hello World!',
      actual: message,
      passed: message === 'Hello World!'
    })
  }).catch(err => {
    console.log(err)
  })

  // check if delayedData works
    delayedData([1,2,3]).then(data => {
      console.log({
        expected: 6,
        actual: data,
        passed: data === 6
      })
    }).catch(err => {
      console.log(err)
    })

    delayedData(1).then(data => {
      console.log({
        expected: 1,
        actual: data,
        passed: data === 1
      })
    }).catch(err => {
      console.log(err)
    })

    delayedData(1).then(data => {
      console.log({
        expected: 1,
        actual: data,
        passed: data === 1
      })
    }).catch(err => {
      console.log(err)
    })

    delayedData(2).then(data => {
      console.log({
        expected: 2,
        actual: data,
        passed: data === 2
      })
    }).catch(err => {
      console.log(err)
    })
  } catch(e) {
    console.log('Promises failed')
  }
}

main()