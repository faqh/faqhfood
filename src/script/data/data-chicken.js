const getChicken = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`
      );
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllFoods(responseJson.meals);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };
  
  const renderAllFoods = (foods) => {
    console.log(foods);
    const listFoodElement = document.querySelector('#chicken-row');
    listFoodElement.innerHTML = '';
  
    foods.forEach((food) => {
      listFoodElement.innerHTML += ` 
      <style>
      .card{
        border-radius: 10px;
        border: none;
        box-shadow: 0px 16px 40px rgba(112, 144, 176,0.2);
      }
      .card img{
        border-radius : 10px 10px 0 0;
      }
      .card-body{
        padding: 0.625rem;
        font-weight: bold;
      }
      .card-body p {
        color: #000;
      }
      .figure{
        overflow: hidden;
        position: relative;
      }
      .figure img{
        transition: all 1s ease;
      }
      .figure:hover img{
        transform: scale(1.1);
        cursor: pointer;
      }
      .figure a {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;  
        opacity: 0;
        transition: opacity 0.3s;
    }
    .figure:hover a{
      opacity: 1;
    }
      </style>          
                  <div class="col-lg-3 col-md-4 col-sm-6 mt-5">                
                      <div class="card">
                      <div class="figure">
                      <img class="card-img-top" src="${food.strMealThumb}" alt="Card image cap">
                      <a href="../detail.html?id=${food.idMeal}" class="justify-content-center align-items-center">
                      </a>
                    </div>
                          <div class="card-body">
                              <p class="card-title text-center">${food.strMeal}</p>
                          </div>
                      </div>                
                  </div>                        
              `;
    });
  };
  
  export default getChicken;