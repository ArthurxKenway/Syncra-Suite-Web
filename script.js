// Show loader for at least 4 seconds
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const calculator = document.getElementById("calculator");
  
    setTimeout(() => {
      loader.style.display = "none";   // Hide loader after 4 seconds
      calculator.style.display = "block"; // Show calculator form
    }, 1000);
});

// Handle setting active link on click
function setActiveLink(event) {
    // Remove 'active' class from all nav links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    event.target.classList.add('active');
}

// Attach event listeners to nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', setActiveLink);
});

// Calculate total price
function calculateTotal() {
    const price = parseFloat(document.getElementById("price").value);
    const shippingPercentage = parseFloat(document.getElementById("shipping").value) / 100;
  
    if (isNaN(price) || isNaN(shippingPercentage)) {
      alert("Please enter valid values.");
      return;
    }
  
    // Calculate the total for one unit including shipping
    const shippingCost = price * shippingPercentage;
    const singleProductTotal = price + shippingCost;
  
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results
  
    // Display the total cost for quantities 1 through 10
    for (let quantity = 1; quantity <= 10; quantity++) {
      const totalCost = singleProductTotal * quantity;
      resultsDiv.innerHTML += `<p>${quantity} unit(s): $${totalCost.toFixed(2)}</p>`;
    }
}

// Reset calculator input fields
function resetCalculator() {
    document.getElementById("price").value = "";
    document.getElementById("shipping").value = "";
    document.getElementById("results").innerHTML = "";
}

// Disable right-click and show tooltip
function disableRightClick(event) {
    event.preventDefault(); // Disable the right-click context menu

    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'block'; // Show the tooltip

    // Position the tooltip near the mouse cursor
    tooltip.style.left = `${event.pageX + 10}px`; // Offset for visibility
    tooltip.style.top = `${event.pageY + 10}px`;

    // Hide the tooltip after a short delay
    setTimeout(() => {
        tooltip.style.display = 'none';
    }, 2000); // Adjust the duration as needed
}

// Update tooltip position as the mouse moves
document.addEventListener('mousemove', (event) => {
    const tooltip = document.getElementById('tooltip');
    if (tooltip.style.display === 'block') {
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    }
});
