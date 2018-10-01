function renderIndex() {
  return `
    <div class="background-overlay" style="background-image: url(/dist/img/livro.jpg);">
    <div class="container h-100">
      <div class="row" style="height: 400px">
        <div class="col-12 ml-3"><br><br>
          <h2>Caderno de Receitas</h2>
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
      <div class="row h-100">
        <div class="col-12 name class="my-5"></div>
        <div id="view-recipe" class="mt-4"></div>
      </div>
    </div>
  `;
}

function renderFavorites() {
  return `
    <div class="container h-100">
      <div class="row h-100 align-itens-center">
        <div class="col-12 my-4">
          <h2>MINHAS RECEITAS</h2>
          <div id="view-favorites"></div>
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
          <h2>Resultado da Pesquisa:</h2>
          <div id="view-results"></div>
        </div>
      </div>
    </div>
  `;
}

function renderContact() {
  return `
    <div class="container h-100">
      <div class="row h-100 align-itens-center">
        <div class="col-12 my-4">
          <h2 class='my-5'>CONTATO</h2>
          <h3 class='my-3'>email: contato@contato.com.br</h3>
          <h3 class="my-3">WhatsApp: 11-99999-9999<h3>
          <h3 class="mb-5 pb-5">SAC: 0800 123 4567<h3>
        </div>
      </div>
    </div>
  `;
}
