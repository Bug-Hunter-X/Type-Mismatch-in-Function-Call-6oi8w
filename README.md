# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error: type mismatch in function calls. The example shows a simple addition function that expects two numbers but receives a string as one of the arguments.  The solution shows how to correctly handle this type mismatch using type guards or type assertions.

## Bug
The `bug.ts` file contains a function that is designed to add two numbers.  However, in the code, a string is passed as an argument, resulting in a type error. 

## Solution
The `bugSolution.ts` file demonstrates two ways to resolve the type mismatch,  either by explicitly converting the second argument to a number or by using type guards to check and handle different types of arguments.