import { Sorter } from './Sorter';
import { NumbersCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinekdList';

//Numbers collection bubble sort
const numbersCollection = new NumbersCollection([10, 22, 3, -5, 0, -10]);
numbersCollection.sort()
console.log(numbersCollection.data)

//Characters collection bubble sort 
const charactersCollection = new CharactersCollection ('yaaabKKXllcCAL19')
charactersCollection.sort()
console.log(charactersCollection.data);

//Linked list collection bubble sort
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(10);
linkedList.sort()
linkedList.print();
