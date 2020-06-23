# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @margaritast/lotide`

**Require it:**

`const _ = require('@margaritast/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
  'head([array])': returns fist element of the array
  'tail([array]),: returns all elements of the array except the first one
  'middle([array]),: return the middle element of the array. If the length is even then it returns two middle elements
  'map([array])' : returns the first symbol of every element in the array
  'letterPosition("string",value)': returns position number of value in the string  
  'findKeyByValue({Object}, "Value")': return the key of the object by its property 
  'findKey({Object}, function)': returns the key of the nested object
  'eqObjects({Object1},{Object2})': compares two objects and returns true or false
  'eqArrays([array1],[array2])': compares two arrays and returns true or false
  'countOnly([array],{Object})': count the elements in array according to the conditions in the object. If propery of the object is set to true then count it.
  'countLetters("String")': counts how many times every letter in the string is being repeated. Returns an object with letters as keys and numbers as their value.
  'assertObjectsEqual({Object1},{Object2})': compares two objects and returns fancy message with emojies if objects match
  'assertEqual(value1, value2)': compares two string or numbers and returns fancy message with emojies if the they match. Doesn't support arrays and objects.
  'assertArraysEqual([array1],[array2])': compares two arrays and returns fancy message with emojies if arrays match
  'without([array1],[array2])': Delete element of array2 from array1. Array2 should be an array with single element.
  'takeUntil([array] x => x === <value>)': Returns elements from the array until it reaches specified element in <value>