/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 10, 'John', 'Doe', true, null ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
var myFunction = function(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction(myArray[1]) ); // John


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function exibirElementoArray(arr, indice) {
    return arr[indice];
}

console.log( exibirElementoArray(myArray, 3) ); // true

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var anotherArray = [ 1, 'Alfreds Futterkiste', true, null, undefined ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( exibirElementoArray(anotherArray, 0) ); // 1
console.log( exibirElementoArray(anotherArray, 1) ); // Alfreds Futterkiste
console.log( exibirElementoArray(anotherArray, 2) ); // true
console.log( exibirElementoArray(anotherArray, 3) ); // null
console.log( exibirElementoArray(anotherArray, 4) ); // undefined

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {

    var booksList = {
        'Os 13 Porquês': { 
            quantidadePaginas: 256,
            autor: 'Jay Asher',
            editora: 'Ática'
        }, 
        'O Poder da Acão': {
            quantidadePaginas: 123,
            autor: 'Paulo Vieira',
            editora: 'Gente'
        },
        'Prisioneiras': {
            quantidadePaginas: 232,
            autor: 'Drauzio Varela',
            editora: 'Companhia das Letras'
        }, 
    };
    
    return bookName === undefined ?  booksList : booksList[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Os 13 Porquês';
console.log( 'O livro "' + bookName + '" tem ' + book(bookName).quantidadePaginas + ' páginas!' );
// O livro "Os 13 Porquês" tem 256 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro "' + bookName + '" é ' + book(bookName).autor + '.' );
// O autor do livro "Os 13 Porquês" é Jay Asher.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro "' + bookName + '" foi publicado pela editora ' + book(bookName).editora + '.');
// O livro "Os 13 Porquês" foi publicado pela editora Ática.