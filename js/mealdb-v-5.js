const errorMassage = document.getElementById('no-result');
errorMassage.style.display = 'none'
const searchFood = () =>{
    const searchFeild = document.getElementById('search-feild');
    const searchText = searchFeild.value;
    searchFeild.value = ''
    // eorror massages 
   
    
    if (searchText == '') {
        errorMassage.style.display = 'block'
        
    }
   
    else{
        // load data 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    }

}
const displayMeals = meals =>{
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = ''
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img width="100%" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}
                </p>
            </div>
        </div>
        `;
        searchResult.appendChild(div)
    })
      
}
const loadMealDetail = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal =>{
    const mealDetailsDiv = document.getElementById('meal-details');
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
            <a href="${meal.strYoutube}" target="_blank" class="btn btn-primary">making proccess</a>
        </div>
  </div>
  `
  mealDetailsDiv.appendChild(div)

}