import { Sorter } from './Sorter';
import { NumbersCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinekdList';

// const numbersCollection = new NumbersCollection([10, 22, 3, -5, 0, -10]);
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection)

// const charactersCollection = new CharactersCollection ('yaaabKKXllcCAL19')
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data);


const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(10);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
