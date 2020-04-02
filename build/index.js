"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinekdList_1 = require("./LinekdList");
//Numbers collection bubble sort
var numbersCollection = new NumberCollection_1.NumbersCollection([10, 22, 3, -5, 0, -10]);
numbersCollection.sort();
console.log(numbersCollection.data);
//Characters collection bubble sort 
var charactersCollection = new CharactersCollection_1.CharactersCollection('yaaabKKXllcCAL19');
charactersCollection.sort();
console.log(charactersCollection.data);
//Linked list collection bubble sort
var linkedList = new LinekdList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(10);
linkedList.sort();
linkedList.print();
