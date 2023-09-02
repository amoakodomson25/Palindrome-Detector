let Palindrome = {
  check: function () {
    let checkWord;
    checkWord = document.getElementById("checkWord").value;

    function isPalindrome(checkWord) {
      checkWord = checkWord.toLowerCase();
      const len = checkWord.length;
      for (let i = 0; i < len / 2; i++) {
        if (checkWord[i] !== checkWord[len - 1 - i]) {
          return false;
        }
      }
      return true;
    }

    if (isPalindrome(checkWord)) {
      document.getElementById("wordChecked").innerHTML = checkWord;
      document.getElementById("output").innerHTML = " is a palidrome &#x1f60a ";
    } else {
      document.getElementById("wordChecked").innerHTML = checkWord;
      document.getElementById("output").innerHTML =
        " is not a palidrome &#x1f614";
    }
  },
};
