// 1. Проверь, что [1, 2, 3] является массивом.
// console.log(Array.isArray([1, 2, 3]));

// 2. [1, 2, 3] и [4, 5, 6]. Объедини их вместе.
// console.log([1, 2, 3].concat([4, 5, 6]));

// // 3. [1, 2, 'apple'], ['pineapple', 'orange', 'apple']. Проверь являются ли все элементы этих массивов строками?

// let arr1 = [1, 2, 'apple'];
// let arr2 = ['pineapple', 'orange', 'apple'];
// console.log(arr1.every(el => typeof el === 'string'));
// console.log(arr2.every(el => typeof el === 'string'));

// // 4. [{}, 1, 2, 'apple']. Проверь является ли хотя бы один элемент в массиве числом?
// console.log([{}, 1, 2, 'apple'].some(el => typeof el === 'number'));

// // 5. Создай массив с длинной 10, где каждый элемент это строка 'orange'
// let arrOranges = Array(10).fill('orange');
// console.log(arrOranges);


// 6. [{type: 'content', id: 23}, {type: 'decor', id: 43}, {type: 'content', id: 13}] Используя массив выше:

let arr = [{ type: 'content', id: 23 }, { type: 'decor', id: 43 }, { type: 'content', id: 13 }];
// создай массив объектов, type которых равен 'content'


// let arrTypesContent = arr.filter(el => el.type === 'content');
// console.log(arrTypesContent);
// console.log(arr);


// найди объект с id - 43
// console.log(arr.find(el => el.id === 43 ));

// определи индекс элемента с id - 43
// console.log(arr.findIndex(item => item.id === 43));

// создай массив типов (каждый элемент в рамках массива уникален) -> ['content', 'decor']
// let arrUnicTypes = [...new Set(arr.map(item => item.type))];
// console.log(arrUnicTypes);

// создай массив id'шников -> [23, 43, 13]
// console.log(arr.map(item => item.id));


// 7. [[1, 2, [3, 5, 6]], [2, [6]], 0] - создай на основе этого, плоский массив

// console.log( [[1, 2, [3, 5, 6]], [2, [6]], 0].flat(Infinity));


// 8. [3, 4, 14, 1, 2, 34, 7] - Отсортируй массив.
// console.log([3, 4, 14, 1, 2, 34, 7].sort((a, b) => a - b));

// 9. ['apple', 'orange'] - используй один метод (не reduce), чтобы получить такой массив ['a', 'p', 'p' 'l', 'e', 'o', 'r', 'a', 'n', 'g', 'e']

// let arr1 = ['apple', 'orange'];
// let arr2 = arr1.join('');
// console.log(arr2.split(''));

// 10. Создай на основе этого массива ['pr', 't', 'type'] строку 'prototype'
// console.log(['pr', 't', 'type'].join('o'));

// 11. [10, 100] измени порядок этого массив на обратный -> [100, 10]

// let arr1 = [10, 100];
// let arr2 = arr1.reverse();
// console.log(arr1);
// console.log(arr2)

// 12. ['discount', 'select', 'active']. Проверь, есть ли в массиве строка 'discount';

// console.log(['discount', 'select', 'active'].includes('discount'));

// 13. ['discount', 'select', 'active']. Создай объект вида {discount: 'discount', select: 'select', active: 'active'}
// let arr5 = ['discount', 'select', 'active'];

// let obj = {};
// arr5.forEach(key => obj[key] = key);
// console.log(obj);

// let obj2 = arr5.reduce((acc, key) => {
//     acc[key] = key;
//     return acc;
// },
//     {});
// console.log(obj2);


// 14. [1, 2, 3, "hello world", 4.12, true], создай новый массив с первыми тремя элементами, не изменяя исходный
// let arr14 = [1, 2, 3, "hello world", 4.12, true];
// let arrNew = arr14.slice(0,3);
// console.log(arr14);
// console.log(arrNew);


// 15. [1, 2, 3, "hello world", 4.12, true] - удали из исходного массива элементы с индексами 1 и 2 и добавь на их место 3 новых элемента: 'discount', 'select', 'active'. Чтобы получился такой массив: [1, 'discount', 'select', 'active', "hello world", 4.12, true]


// let array = [1, 2, 3, "hello world", 4.12, true];

// array.splice(1, 2, 'discount', 'select', 'active');

// console.log(array);
