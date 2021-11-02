The Javascript program demonstrates the difference in synchronous and asynchronous Javascript using Promises. 

A Promise is a pattern where the eventual response (and how long it will take to receive it) is not known. 

Promises have 3 states:
1. Pending - the outcome is not yet determined
2. Resolved - the outcome is completed succesfully
3. Rejected - the outcome is completed with errors 

This is followed by two distinct methods that get called where we handle the case where the promise is resolved ( .then() ) and the case where the promise is rejected ( .catch() ).

It simulates flipping a coin and we want a function that checks how long it takes to land on "Heads" five times in a row. 