import * as random from "./utils/random.js";
import * as json from "./utils/concept/json.js"
import * as mongodb from "./utils/concept/mongodb.js"
import * as ts from "./utils/concept/typescript.ts"

// #random
// How to get random index of array
random.getRandomIndexOfArray()
// How to get random number between two number (Integer)
random.getRandomInteger()

// #json, #JSON
json.json // Description about JSON
// How to convert string to JSON #string:convertTo:string
json.parse___convertToJSON()
// How to convert JSON to string #json:convertTo:string
json.stringify___convertToString()
// How to check isJSON #validation:json
json.isJSON()

// #mongodb, #database
// How to connect database
mongodb.connection()
// How to Inset data using 'insertOne()'
mongodb.selfInsertOne()
// How to Inset multi data using 'insertMany()'
mongodb.selfInsertMany()
// How to show all data in database
mongodb.showData()

// #typescript
// How to config typescript tsconfig.json
ts.tsconfig.description
ts.tsconfig.file
// datatypes
ts.number
ts.string
ts.boolean
ts.arrayNumber
ts.arrayString
ts.arrayBoolean
ts.arrayNesting1
ts.arrayNesting2
ts.arrayNesting3
ts.tuple1
ts.tuple2
ts.tuple3
ts.enum1
ts.enum2
ts.functionReturnVoid1
ts.functionReturnVoid2
ts.functionReturn1
ts.functionReturn2
ts.functionReturn3
ts.functionParameter1
ts.functionParameter2
ts.functionParameter3

// Coming soon
// promise
// then() catch()
// #fileSystem, #node:fs,  