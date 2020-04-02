"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinekdList_1 = require("./LinekdList");
// const numbersCollection = new NumbersCollection([10, 22, 3, -5, 0, -10]);
// const charactersCollection = new CharactersCollection ('yaaabKKXllcCAL19')
var linkedList = new LinekdList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(10);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
// console.log(charactersCollection.data);
linkedList.print();
