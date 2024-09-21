// Calculator Modal
const openCalculatorButton = document.getElementById('open-calculator');
const calculatorModal = document.getElementById('calculator-modal');
const closeModalButton = document.querySelector('.close');
const calculateButton = document.getElementById('calculate-cost');
const result = document.getElementById('result');

// Open Modal
openCalculatorButton.addEventListener('click', () => {
    calculatorModal.style.display = 'flex';
});

// Close Modal
closeModalButton.addEventListener('click', () => {
    calculatorModal.style.display = 'none';
});

// Calculate Cost
calculateButton.addEventListener('click', () => {
    const pages = document.getElementById('pages').value;
    const complexity = document.getElementById('complexity').value;

    let cost = 100; // base cost

    // Calculate based on complexity
    if (complexity === 'simple') {
        cost += pages * 50;
    } else if (complexity === 'moderate') {
        cost += pages * 100;
    } else if (complexity === 'complex') {
        cost += pages * 150;
    }

    result.textContent = `Estimated Cost: $${cost}`;
});