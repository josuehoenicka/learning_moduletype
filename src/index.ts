import { PI } from './myModule';
import { Person as otherPerson } from './myModule';
import * as myCode from './myModule';

const user : otherPerson = {
    id : 1,
    name : 'Josue'
}

console.log(PI);
console.log(user);
console.log(myCode.generateRandomNumber());