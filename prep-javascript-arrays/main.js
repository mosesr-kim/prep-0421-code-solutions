var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];

console.log('languages Array', languagesArray);

console.log('array length', languagesArray.length);

languagesArray.push('C#');

languagesArray.push('php');

console.log('Updated Array', languagesArray);

languagesArray.splice(6, 1);

console.log('last index removed', languagesArray);

languagesArray.unshift('C++');

console.log('added element to front', languagesArray);

languagesArray.shift();

console.log('removed first element', languagesArray);

var thirdElement = languagesArray[2];

console.log('3rd element in languagesArray', thirdElement);

var arrayLength = languagesArray.length;

console.log('The final length of the array is', arrayLength);

var lastItem = languagesArray[languagesArray.length - 1];

console.log('The last item in the array is', lastItem);
