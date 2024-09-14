let foodSelect = document.getElementById('food');
let varietySelect = document.getElementById('variety');
let proceedButton = document.getElementById('proceed-button');

let foodVarieties = {
    pizza: ['Margherita', 'Pepperoni', 'BBQ Chicken', 'Hawaiian', 'Veggie'],
    burger: ['Cheeseburger', 'Bacon Burger', 'Chicken Burger', 'Veggie Burger', 'Double Burger'],
    pasta: ['Spaghetti', 'Lasagna', 'Fettuccine', 'Penne', 'Mac and Cheese'],
    salad: ['Caesar Salad', 'Greek Salad', 'Cobb Salad', 'Tuna Salad', 'Fruit Salad'],
    sushi: ['California Roll', 'Tuna Roll', 'Salmon Nigiri', 'Eel Roll', 'Vegetarian Roll']
};

// Update the variety options based on selected food
foodSelect.addEventListener('change', function() {
    let selectedFood = foodSelect.value;
    
    varietySelect.innerHTML = '<option value="">Select Variety</option>';
    
    if (selectedFood) {
        foodVarieties[selectedFood].forEach(function(variety) {
            let option = document.createElement('option');
            option.value = variety.toLowerCase();
            option.textContent = variety;
            varietySelect.appendChild(option);
        });
    }
});

// Proceed to Payments function
function proceedToPayment() {
    let selectedFood = foodSelect.value;
    let selectedVariety = varietySelect.value;
    let selectedDrink = document.getElementById('drink').value;
    
    if (!selectedFood || !selectedVariety || !selectedDrink) {
        alert('Please complete your order before proceeding.');
    } else {
        alert(`Your order: ${selectedVariety} ${selectedFood} with ${selectedDrink} has been placed. Proceeding to payments...`);
    }
}
