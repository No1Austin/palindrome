function isPalindrome(word) {
  // Stop condition
  if (word.length === 0 || word.length === 1) {
    return true;
  }

  // Compare first and last characters
  if (word[0] !== word[word.length - 1]) {
    return false;
  }

  // Test the rest of the word
  return isPalindrome(word.slice(1, -1));
}

// Test cases
const words = ["gag", "kayak", "php", "radar", "hello"];

words.forEach(word => {
  console.log(word + " => " + isPalindrome(word));
});