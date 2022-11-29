let myLibrary = [
    {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        pages: 300,
    },
    {
        title: "Lord of the Rings",
        author: "J. R. R. Tolkien",
        pages: 350,
    },
    {
        title: "Harry Potter",
        author: "J. K. Rowling",
        pages: 250,
    },
];

function displayBooks() { // function for displaying the content of myLibrary Array
    for(let index = 0; index < myLibrary.length; index++){
        for(key in myLibrary[index]){
            console.log(`${key} : ${myLibrary[index][key]}`);
            //console.log(key + " : " + myLibrary[index][key]);
        }
    }
}

function displayBooksTest() {
    const divTitle = document.querySelector('.title');
    const divAuthor = document.querySelector('.author');
    const divPages = document.querySelector('.pages');
        divTitle.textContent = `Title : ${myLibrary[0]["title"]}`;
        divAuthor.textContent = `Author : ${myLibrary[0]["author"]}`;
        divPages.textContent = `Pages : ${myLibrary[0]["pages"]}`;
}















/* constructor object konusundan kalma
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages`;
    }
};

const books = new Book("The Hobbit", "J.R.R Tolkien", 295);

*/
