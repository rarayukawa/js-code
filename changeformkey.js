const element = document.querySelector('#radioGroup');
element.addEventListener('change', handleChange);

function handChange(event) {
  const drinkValue = element.drink.value;
  const fruitValue = element.fruit.value;

  console.log(`drinkの値は ${drinkValue}です`);
  console.log(`fruitValueの値は ${fruitValue}です`);
}