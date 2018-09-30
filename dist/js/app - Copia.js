let nameRecipe;
let idRecipe;
let indexRecipe;
let selectedRecipe;

function getRecipes() {
  const url = 'https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json';

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
    showAllRecipes();
  });
}

function showAllRecipes() {
  $('#view-recipes').append(`
    <div class='rcp'>
      <a href="receita/:${idRecipe}" id='${indexRecipe}'><h4>${nameRecipe.toUpperCase()}</h4></a>
    </div>
    `);
}

function callRecipe() {
  const url = 'https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json';

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url,
    success: showOneRecipeSection,
    error
  });
}

function showOneRecipe(event) {
  selectedRecipe = $(event.target).closest('a').text();
  $('.name').append(`
    <h2>${selectedRecipe}</h2>
    `);
}

function showOneRecipeSection(data) {
  let sectionR;

  $.each(data, function(index, value) {
    if (selectedRecipe.toUpperCase() === data[index].nome.toUpperCase()) {
      sectionR = data[index].secao;
    }
  });

  $.each(sectionR, function(index, value) {
    $('#view-recipe').append(`
      <div class='rcp-section'>
      <h4>${sectionR[index].nome}</h4>
      <p>${sectionR[index].conteudo}</p>
      </div>
      `);
  });
};

// let retornoFilter = data.filter(function(valor) {
//   return valor === selectedRecipe ? valor : null;
// });

// let filtrados = data.filter(function(valor) {
//   return valor === selectedRecipe ? valor : null;
// });

// console.log(filtrados);
  // $.each(sectionRecipe, function(index, value) {
// let newIndex = $(event.target).closest('a').attr('id');
// console.log('newIndex' + newIndex);
// console.log('dataIndex' + data.index);

// if(newIndex === data.index) {


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
  throw new Error('Error! API was not loaded.');
};
