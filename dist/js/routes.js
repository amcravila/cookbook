$(document).ready(() => {
  page('/', index);
  page('/receitas', recipes);
  page('/receita/:idRecipe', recipe);
  page('/minhasreceitas', favorites);
  // page('/receita/:ingrediente', searchResult)
  page('/contact', contact);
  page('/*', function() {
    $('body').text('Page not found!');
  });
  page();

  function index() {
    $('main').html(renderIndex());
    $('#recipes').click(getRecipes);
    // $('#myRecipes').click(getRecipes);
        // $('#btn-src').click(searchRecipe);
  }

  async function recipes() {
    const afroditeRecipes = await getRecipes();
    $('main').html(renderRecipeList(afroditeRecipes));
  }

  function recipe() {
    $('main').html(renderRecipe);
    $('a').click(showOneRecipe(event));
    $('a').click(callRecipe());
  }

  function favorites() {
    $('main').html(renderFavorites());
    // $('#myRecipes').click(loadFavorites);
  }

  function searchResult() {
    $('main').html(renderSearch)
    // searchRecipe;
  }

  function contact() {
    $('main').html(renderContact);
  }
});
