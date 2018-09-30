$(document).ready(() => {
  // $('.rcp').click(showOneRecipe);
  // $('#btn-src').click(searchRecipe);
});
// async function recipes() {
//   const food2forkRecipes = await getRecipes()
//   $('main').html(renderRecipeList(food2forkRecipes));
//   // $('#js-cart').html(renderCart());
// }
//
// async function recipe(context) {
//   const food2forkRecipe = await getRecipe(context.params.recipeId);
//   $('main').html(rendeRecipe(food2forkRecipe));
//   // $('#js-cart').html(renderCart());
// }
let nameRecipe;
let idRecipe;
let indexRecipe;
let sectionRecipe;

function getRecipes(event) {
  const url =
  'https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json';

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url,
    success: loadRecipes,
    error
  });
}

function loadRecipes(data) {
  $.each(data, function(index, value) {
    nameRecipe = data[index].nome;
    idRecipe = data[index]._id['$oid'];
    indexRecipe = index;
    sectionRecipe = data[index].secao;
    showAllRecipes();
  });
}

function showAllRecipes() {
  $('#view-recipes').append(`
    <div class='rcp' id='${indexRecipe}'>
      <a href="receita/:${idRecipe}"><h4>${nameRecipe.toUpperCase()}</h4></a>
    </div>
    `);
}

function showOneRecipe() {

  $.each(sectionRecipe, function(index, value) {

  // var indexAttr = $(this).attr('id');
  // console.log(indexAttr);
  $('#view-recipe').append(`
    <h3>${sectionRecipe[index].nome}</h3>
    <h3>${sectionRecipe[index].conteudo}</h3>
    `);
});
};



// function searchRecipe(data) {
//   let srcWord = $('#recipe-src').val();
//
//   $.each(data, function(index, value) {
//     // if (srcWord === value.name) {
//       console.log(data[index].nome);
//     // }
//   });
//   return false;
// };

            // var yahooOnly = JSON.parse(jsondata).filter(function (entry) {
            //       return entry.website === 'yahoo';
            //     });

//   $.each(restaurantes, function(index, value) {
//     if (inputValue === value.type) {
//       $('.images').fadeOut();
//       $('.imagesFilter').fadeIn();
//       $('.imagesFilter').append("<img src= " + "'" + value.image + "'" + " id=" + "'" + index + "'" + " class='image'" + " data-toggle='modal' data-target='#modalMap'>");
//       $('#filter').prop('disabled', true);
//     }
//   });
// });


function error() {
  console.log('Error! API was not loaded.');
};
