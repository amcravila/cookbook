let nameRecipe;
let idRecipe;
let selectedRecipe;
const favorites = JSON.parse(localStorage.getItem('Favoritos'));
$('#' + favorites).addClass = 'favorite';

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
    showAllRecipes();
  });
  // const recipeList = data.map((value) => {
  //   let findIndex = favorites.findIndex(favorite => favorite === idRecipe);
  //   console.log(findIndex);
  //   return `
  //     <li data-id${idRecipe} class=${findIndex >= 0 ? 'favorite' : ''}> ${nameRecipe} </li>
  //     `;
  // }).join('');
}

function showAllRecipes() {
  $('#view-recipes').append(`
    <div class='rcp'>
      <a href='receita/:${idRecipe}' data-id='${idRecipe}'><h4>${nameRecipe.toUpperCase()}</h4></a>
    </div>
    `);
}

function addClickFavorite() {
  $.each(data, function(value) {
    $('a[data-id=idRecipe]').click(clickFavorite);
  });
}

function clickFavorite(event) {
  event.target.toggleClass('favorite');
  const rcpId = $(event.target).attr('data-id');
  const getFavorites = JSON.parse(localStorage.getItem('Favoritos'));
  let putOnFavorites;

  if (getFavorites) {
    let newIndex = getFavorites.findIndex(value => value === rcpId);
    if (newIndex >= 0) {
      putOnFavorites = [...getFavorites];
      putOnFavorites.splice(newIndex, 1);
    } else {
      putOnFavorites = [...getFavorites, rcpId];
    }
  } else {
    putOnFavorites = [rcpId];
  }
  localStorage.setItem('Favoritos', JSON.stringify(putOnFavorites));
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
  let sectionRecipe;

  $.each(data, function(index, value) {
    if (selectedRecipe.toUpperCase() === data[index].nome.toUpperCase()) {
      sectionRecipe = data[index].secao;
    }
  });

  $.each(sectionRecipe, function(index, value) {
    $('#view-recipe').append(`
      <div class='rcp-section'>
      <h4>${sectionRecipe[index].nome}</h4>
      <p>${sectionRecipe[index].conteudo}</p>
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
