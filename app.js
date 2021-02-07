document.getElementById('search-button').addEventListener('click', function () {
    document.getElementById('foodItm').innerText = '';
    const search = document.getElementById('food-search');
    let url =`https://www.themealdb.com/api/json/v1/1/search.php?f=${search.value}`;
    
    if (search.value === ''){
        alert(" Please Select one");  
    }
    if (search.value.length === 1){
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search.value}` 
    }
    else {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}` //if search by full name
    } 
    displayFoods(url);   
})

const displayFoods = url => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const foods = data['meals'];
            const foodsContainer = document.getElementById('foodItm');
            foods.forEach(food => {    
                const foodDiv = document.createElement('div');  
                
                foodDiv.className = "food" 
                const foodInfo = `
                    <img src = ${food.strMealThumb}>
                    <h4>${food.strMeal}</h4>
                `
                foodDiv.innerHTML = foodInfo;   
                foodsContainer.appendChild(foodDiv);  

                //display food 
                let foodIngredients = document.getElementById('food-details');
                foodDiv.addEventListener('click',function(){
                    foodIngredients.innerText = '';
                    const ingredientInfo = document.createElement('div');
                    ingredientInfo.className = "ingredient-info";

                    ingredientInfo.innerHTML = `
                        <img src = ${food.strMealThumb}>
                        <h2>${food.strMeal}</h2>
                        <p><b>Ingredients</b></p>                        
                        <p>${food.strIngredient1} : ${food.strMeasure1}</p>
                        <p>${food.strIngredient2} : ${food.strMeasure2}</p>
                        <p>${food.strIngredient3} : ${food.strMeasure3}</p>
                        <p>${food.strIngredient4} : ${food.strMeasure4}</p>
                        <p>${food.strIngredient5} : ${food.strMeasure5}</p>
                        <p>${food.strIngredient6} : ${food.strMeasure6}</p>
                        <p>${food.strIngredient7} : ${food.strMeasure7}</p>
                        <p>${food.strIngredient8} : ${food.strMeasure8}</p>
                        <p>${food.strIngredient9} : ${food.strMeasure9}</p>                        
                    `
                    foodIngredients.appendChild(ingredientInfo);     
                });
            });
        })
        .catch(error => alert('No items found'))
}


