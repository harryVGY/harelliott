const startButton = document.getElementById('start');
const sdrawButton = document.getElementById('draw');
const standButton = document.getElementById('stand');
const dubbleButton = document.getElementById('dubble');

startButton.addEventListener('click', () => {
    fetch('cards.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex1 = Math.floor(Math.random() * data.length); // Generate a random index
            const randomItem1 = data[randomIndex1]; // Get the item at the random index

            let randomIndex2;
            do {
                randomIndex2 = Math.floor(Math.random() * data.length); // Generate a second random index
            } while (randomIndex1 === randomIndex2); // Ensure the second index is different from the first

            const randomItem2 = data[randomIndex2]; // Get the item at the second random index

            console.log(randomItem1, randomItem2); // Log the random items
            
            // Display the random items
            document.getElementById('display1').textContent = randomItem1.value;
            document.getElementById('display2').textContent = randomItem2.value;
        });
    
});