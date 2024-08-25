/**
 * Arrays in javascript
 */

//* How to create a new array
{
    [];
    Array();
    new Array();
    new Array(12); // [ <12 empty item> ]
}

//* Examples of arrays
{
    [1, 2, 3, 4, 5, 6];
    ['ali', 'muhammad', 'google', 'github'];
    [1, true, null, undefined, NaN, 'func()', {key: 'value'}];
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
}

//* Range of arrays
//* The maximum range of an array is (4294967296) === (2 ** 32)
//* Invalid range of array 
    // 1) (negative number) === (form -Infinity to -1)
    // 2) (floating point number) === (2.23)
{
    // maximum range of array
    new Array(2 ** 32 - 1) // -1: Because we start from zero, not from one

    //! Error: Invalid array length
    /*
        new Array(-1)
        new Array(23.5)
    */
}

//* How to get the array size
//* How to set the array size
//* How to set the array size conditionally
{
    // get
    ['test', 1, 100, true].length;

    // set
    [].length = 5;

    // conditional set
    if (true){
        [].length = 10; // the extra elements are deleted
    }
}

//* How to add and remove item from arrays
//* shift(), unshift(), splice(), push(), pop()
{
    // Add and remove to the beginning of the array
    [].unshift();
    [].shift();

    // Add and remove to the middle of the array
    [].splice();

    // Add and remove to the end of the array
    [].push();
    [].pop();
}

//* Search the array
//* Return (Index, Element, Boolean)
{
    // Return (Index)
    // return (first and last) index of element : search by value
    {
        [].indexOf('item'); // It starts searching from the beginning of the array and returns its index as soon as it finds the first similar item.
        [].lastIndexOf('item'); // It starts searching from the end of the array and returns its index as soon as it finds the first matching item.
    }
    // return (first and last) index of element : search by condition
    {
        [].findIndex(item => item.length >= 0); // Returns the first index whose size is greater than zero
        [].findLastIndex(item => item.length >= 0); // Returns the last index whose size is greater than zero
    }

    // Return (Element)
    // return (first) element of array : search by condition
    {
        [].find(element => element < 0); // Returns the first index whose size is lower than zero
    }
    // return (all) element of array : search by condition
    {
        [].filter(element => element > 0); // Return [1, 2, 3, 5], numbers are bigger than 0
    }

    // Return (Boolean)
    // return (boolean) : search by value
    {
        [].includes('item');
    }
    // return (boolean) : search by condition
    {
        [].some(item => item.length > 0); // true: If one of the elements was acceptable to the condition
        [].evert(item => item.length > 0); // true: If all of the elements was acceptable to the condition
    }
}