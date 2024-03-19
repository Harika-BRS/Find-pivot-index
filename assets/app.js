document.getElementById("submit").addEventListener("click", function() {
    const inputString = document.getElementById("intervalsInput").value.trim();
    const inputArray = inputString.split(",").map(Number); // Convert input string to an array of numbers

    // Call the pivotIndex function with inputArray
    const result = pivotIndex(inputArray);

    // Display the result in the outputDiv
    document.getElementById("output").textContent = result.toString();
  });

  const pivotIndex = (nums) => {
    let rightSum = 0;
    let leftSum = 0;

    nums.forEach((v) => (rightSum += v));

    for (var i = 0; i <= nums.length - 1; i++) {
        let curr = nums[i];
        rightSum -= curr;
        if (leftSum === rightSum) return i;
        leftSum += curr;
    }

    return -1;
  };
// Add this script to clear the input field on page load
document.addEventListener('DOMContentLoaded', function() {
    var intervalsInput = document.getElementById('intervalsInput');
    intervalsInput.value = ''; // Set the input value to an empty string
  });