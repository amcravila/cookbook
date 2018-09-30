function renderIndex() {
  return `
    <div class="background-overlay" style="background-image: url(/dist/img/livro.jpg);">
    <div class="container h-100">
      <div class="row" style="height: 400px">
        <div class="col-12">
          <h2>Livro de Receitas</h2>
        </div>
      </div>
    </div>
  </div>
  `;
}

function renderRecipeList() {
  return `
    <div class="container h-100">
      <div class="row h-100 align-itens-center">
        <div class="col-12 my-4">
          <h2>TODAS AS RECEITAS</h2>
          <div id="view-recipes"></div>
        </div>
      </div>
    </div>
  `;
}

function renderRecipe() {
  return `
    <div class="container h-100">
      <div class="row h-100 align-itens-center">
        <div class="col-12">
          <h2>${nameRecipe}</h2>
          <h3>Ingredientes:</h3>
          <div id="view-recipe"></div>
        </div>
      </div>
    </div>
  `;
}

function renderSearch() {
  return `
    <div class="container h-100">
      <div class="row h-100 align-itens-center">
        <div class="col-12">
          <h2>Resultado da Pesquisa:${srcWord}</h2>
          <div id="view-recipes"></div>
        </div>
      </div>
    </div>
  `;
}
