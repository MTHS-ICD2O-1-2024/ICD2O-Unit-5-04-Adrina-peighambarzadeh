// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved
//
// Created by: Adrina peighambarzadeh

// Created on: Apr 2025
// This file contains the JS functions for index.html
const randomNumber = Math.floor(Math.random() * 6) + 1
/*
* This function calculates the area of a triangle.
*/
function check() {
  // input
  const userNumber =  parseInt(document.getElementById("user-number").value)

  // process
  if (userNumber == randomNumber) {
    // output
  document.getElementById("result").innerHTML =
    "You have gussed the correct number!"
}

  if (userNumber != randomNumber) {
    //output
    document.getElementById("result"). innerHTML =
    "You have gussed the wrong number!"
  }
}
