/*!
 * nriter.js v1.0.1 (https://github.com/nonehub/nriter.js)
 * Copyright (c) 2021 none
 * Licensed under MIT (https://github.com/nonehub/nriter.js/blob/main/LICENSE)
 */
function writing(selector, text, speed, waiting, value) {
  selector = ".nriter-writ";
  for (let len = 0; len < document.querySelectorAll(selector).length; len++) {
    text = document.querySelectorAll(selector)[len];
    speed = document.querySelectorAll(selector)[len].getAttribute("data-speed");
    waiting = document
      .querySelectorAll(selector)
      [len].getAttribute("data-waiting");
    value = document.querySelectorAll(selector)[len].getAttribute("data-value");
    if (text == null) {
      text = ["you did not set a value for 'text,text'"];
    } else {
      text = document
        .querySelectorAll(selector)
        [len].getAttribute("data-text")
        .split(",,");
    }
    if (speed == null) {
      speed = 500;
    }
    if (waiting == null) {
      waiting = 1000;
    }
    if (value == null) {
      value = "|";
    }

    /* Start Function Here */
    let mySelector = document.querySelectorAll(selector)[len],
      arrayText = text,
      arrayNumber = 0,
      writingSpeed = speed,
      timewit = waiting;
    let mySpan1 = document.createElement("span"),
      mySpan1Text = document.createTextNode(value);
    mySpan1.appendChild(mySpan1Text);
    mySelector.appendChild(mySpan1);

    let removeText = setInterval(removeTextFunction, writingSpeed);

    function removeTextFunction() {
      // Cut the last letter of the word and print the word after editing
      document.querySelectorAll(`${selector}`)[len].childNodes[0].textContent =
        document
          .querySelectorAll(`${selector}`)
          [len].childNodes[0].textContent.substr(
            0,
            document.querySelectorAll(`${selector}`)[len].childNodes[0]
              .textContent.length - 1
          );
      document
        .querySelectorAll(`${selector}`)
        [len].querySelector("span").style.animation = "initial";
      // Check if the entire word has been deleted
      if (
        document.querySelectorAll(`${selector}`)[len].childNodes[0].textContent
          .length == 0
      ) {
        // Stop deleting letters
        clearInterval(removeText);
        // Run function write the next word in the matrix
        printNextArray();
      }
    }

    function printNextArray() {
      let numberLength = 1;
      // Select the next word
      let arrayNowText = arrayText[arrayNumber];
      // Run function letter writing
      let addText = setInterval(addTextFunction, writingSpeed);

      function addTextFunction() {
        // Show the word gradually from the first letter to the whole word
        document.querySelectorAll(`${selector}`)[
          len
        ].childNodes[0].textContent = arrayNowText.substr(0, numberLength);
        numberLength++;
        document
          .querySelectorAll(`${selector}`)
          [len].querySelector("span").style.animation = "initial";
        // Check if the whole word is displayed
        if (
          arrayNowText.length ==
          document.querySelectorAll(`${selector}`)[len].childNodes[0]
            .textContent.length
        ) {
          // Stop letter writing
          clearInterval(addText);
          arrayNumber++;
          // Repeat display of words
          if (arrayNumber == arrayText.length) {
            arrayNumber = 0;
          }
          document
            .querySelectorAll(`${selector}`)
            [len].querySelector("span")
            .removeAttribute("style");
          // delay from one word to the next
          setTimeout(function () {
            removeText = setInterval(removeTextFunction, writingSpeed);
          }, timewit);
        }
      }
    }
  }
}

window.onload = function () {
  writing();
};
