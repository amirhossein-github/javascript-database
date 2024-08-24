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






