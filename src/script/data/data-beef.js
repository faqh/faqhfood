const getBeef = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
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
    // console.log(foods);
    const listFoodElement = document.querySelector('#beef-row');
    listFoodElement.innerHTML = '';
  
    foods.forEach((food) => {
      listFoodElement.innerHTML += `      
                  <style>
                  .card{
                    border-radius: 10px;
                    border: none;
                    box-shadow: 0px 16px 40px rgba(112, 144, 176,0.2);
                  }
                  .card-img-top{
                    border-radius : 10px 10px 0 0;
                  }
                  .card-body{
                    padding: 0.625rem;
                    font-weight: bold;
                  }
                  .card-body p {
                    color: #000;
                  }
                  .figure-img a span{
                    font-size: 30px;
                    color: #fff;
                  }
                  .figure-img {
                    position: relative;
                  }
                  .figure-img a{
                    position: absolute;
                    border-radius : 10px 10px 0 0;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: rgba(0,0,0,0.7);
                    opacity: 0;
                    transition: opacity 0.5s; 
                  }
                  .figure-img:hover a{
                    opacity: 1;
                  }
                  </style>     
                  <div class="col-lg-3 col-md-4 col-sm-6 mt-5">                
                  <div class="card" >
                      <div class="figure-img">
                        <img class="card-img-top" src="${food.strMealThumb}" alt="Card image cap">
                        <a href="../detail.html?id=${food.idMeal}" class="d-flex justify-content-center align-items-center"><span><i class="fas fa-plus-circle"></i></span></a>
                      </div>
                      <div class="card-body">
                          <p class="card-title text-center">${food.strMeal}</p>
                      </div>
                  </div>                
                  </div>                        
              `;
    });
  };
  
  export default getBeef;


