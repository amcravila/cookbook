$(document).ready(() => {
  page('/', index);
  page('/receitas', recipes);
  // page('/receita/:ingrediente', searchResult)
  page('/receita/:receitaId', recipe);
  page('/*', function() {
    $('body').text('Page not found!');
  });
  page();

  function index() {
    $('main').html(renderIndex());
    $('#recipes').click(getRecipes);
        // $('#btn-src').click(searchRecipe);
  }

  async function recipes() {
    const afroditeRecipes = await getRecipes();
    $('main').html(renderRecipeList(afroditeRecipes));
  }

  function searchResult() {
    $('main').html(renderSearch)
    // searchRecipe;
  }

  function recipe() {
    // $('p').html('viewing recipe ' + (context.params.id || ''));
    $('main').html(renderRecipe);
    showOneRecipe();
  }
});
