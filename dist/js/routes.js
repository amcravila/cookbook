$(document).ready(() => {
  page('/', index);
  page('/receitas', recipes);
  page('/receita/:idRecipe', recipe);
  page('/minhasreceitas', favorites);
  page('/busca', searchResult);
  page('/contact', contact);
  page('/*', function() {
    $('body').text('Page not found!');
  });
  page();

  function index() {
    $('main').html(renderIndex());
    $('#recipes').click(getRecipes);
  }

  async function recipes() {
    const afroditeRecipes = await getRecipes();
    $('main').html(renderRecipeList(afroditeRecipes));
  }

  function recipe() {
    $('main').html(renderRecipe);
    $('a').click(showOneRecipe(event));
    $('a').click(callRecipe());
    $('.clicked').click(clickFavorite);
  }

  function favorites() {
    $('main').html(renderFavorites);
    $('#myRecipes').click(loadFavorites());
  }

  function searchResult() {
    $('main').html(renderSearch);
    $('#btn-src').click(callSearch());
  }

  function contact() {
    $('main').html(renderContact);
  }
});
