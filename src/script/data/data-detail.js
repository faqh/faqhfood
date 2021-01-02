const getDetail = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');  
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idParam}`
      );
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllFoods(responseJson.meals[0]);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };
  
  const renderAllFoods = (foods) => {
    const detailHTML = document.querySelector('#content');
    const none = '-';
    detailHTML.innerHTML = `
      <style>
      img{
        max-width: 550px;
      }
      .nav-tabs {
        border-bottom: 1px solid #fff;
      }
      
      .nav-tabs .nav-item {
        margin-bottom: -1px;
      }
      
      .nav-tabs .nav-link {
        border: 3px solid transparent;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        font-weight: bold;
        color: #C2C2C2;
      }
      
      .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
        border-color: #fff #fff #000;
      }
      
      .nav-tabs .nav-link.disabled {
        color: #6c757d;
        background-color: transparent;
        border-color: transparent;
      }
      
      .nav-tabs .nav-link.active,
      .nav-tabs .nav-item.show .nav-link {
        color: #495057;
        background-color: #fff;
        border-color: #fff #fff #000;
      }
      
      .nav-tabs .dropdown-menu {
        margin-top: -1px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      #intructions-row, #ingredients-row{
        max-height: 380px; 
        overflow: scroll;
      }
      .breadcrumb{
        background-color: #fff;
      }
      .area{
        margin-top: -5px;
      }
      .area span{
        font-size: 18px;
      }
      .btn{
        border-radius: 8px;
      }
      </style>
      <div class="container">
        <nav aria-label="breadcrumb" class="">
          <ol class="breadcrumb mt-4 mb-4">
            <li class="breadcrumb-item font-weight-bold " ><a style="color: #000;" href="./index.html">Home</a></li>
            <li class="breadcrumb-item active">Food detail</li>
            <li class="breadcrumb-item active" aria-current="page">${foods.strMeal}</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-lg-6 col-md-12 text-center">
            <img src="${foods.strMealThumb}" class="rounded">
          </div>
          <div class="col-lg-6 col-md-12 mt-sm-3">
              <h2>${foods.strMeal}</h2>
              <div class="area">                
                <p class="text-secondary"><span><i class="fas fa-map-marker-alt mr-2"></i></span>${foods.strArea}</p>
              </div>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="ingredients-tab"
                    data-toggle="tab"
                    href="#ingredients"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    >Ingredients</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="intructions-tab"
                    data-toggle="tab"
                    href="#intructions"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    >Intructions</a
                  >
                </li>    
                <a href="${foods.strYoutube}" class="btn btn-dark btn-sm d-flex align-items-center"><span><i class="fab fa-youtube"></i></span>Play video</a>      
              </ul>

            <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active mt-3"
                  id="ingredients"
                  role="tabpanel"
                  aria-labelledby="ingredients-tab"
                >
                  <div id="ingredients-row">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient1 ? foods.strIngredient1 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure1 ? foods.strMeasure1 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient2 ? foods.strIngredient2 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure2 ? foods.strMeasure2 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient3 ? foods.strIngredient3 : none} 
                        <span class="badge badge-primary badge-pill">${foods.strMeasure3 ? foods.strMeasure3 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient4 ? foods.strIngredient1 : none} 
                        <span class="badge badge-primary badge-pill">${foods.strMeasure4 ? foods.strMeasure4 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient5 ? foods.strIngredient5 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure5 ? foods.strMeasure5 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient6 ? foods.strIngredient6 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure6 ? foods.strMeasure6 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient7 ? foods.strIngredient7 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure7 ? foods.strMeasure7 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient8 ? foods.strIngredient8 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure8 ? foods.strMeasure8 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient9 ? foods.strIngredient9 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure9 ? foods.strMeasure9 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient10 ? foods.strIngredient10 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure10 ? foods.strMeasure10 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient11 ? foods.strIngredient11 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure11 ? foods.strMeasure11 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient12 ? foods.strIngredient12 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure12 ? foods.strMeasure12 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient13 ? foods.strIngredient13 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure13 ? foods.strMeasure13 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient14 ? foods.strIngredient14 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure14 ? foods.strMeasure14 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient15 ? foods.strIngredient15 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure15 ? foods.strMeasure15 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient16 ? foods.strIngredient16 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure16 ? foods.strMeasure16 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient17 ? foods.strIngredient17 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure17 ? foods.strMeasure17 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient18 ? foods.strIngredient18 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure18 ? foods.strMeasure18 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient19 ? foods.strIngredient19 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure19 ? foods.strMeasure19 : none}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                        ${foods.strIngredient20 ? foods.strIngredient20 : none}
                        <span class="badge badge-primary badge-pill">${foods.strMeasure20 ? foods.strMeasure20 : none}</span>
                      </li>
                    </ul>
                  </div>
                </div>
      
                <div
                  class="tab-pane fade mt-3"
                  id="intructions"
                  role="tabpanel"
                  aria-labelledby="intructions-tab"
                >
                  <div id="intructions-row"><p>${foods.strInstructions}</p></div>
                </div>
  
            </div>
          </div>
        </div>
      
      </div>
                  
              `;
    
  };
  
  export default getDetail;


