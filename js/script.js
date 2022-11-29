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

function createCard() { // this function creates div for each book stored in myLibrary Array
    for(index = 0; index < myLibrary.length; index++){
        const libraryDisplay = document.querySelector('.main-library');
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('book-card');

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('title', 'card-info');
        console.log(myLibrary[index]['title'])

        cardTitle.textContent = `${myLibrary[index]['title']}`
        cardDiv.appendChild(cardTitle);

        const cardAuthor = document.createElement('div');
        cardAuthor.classList.add('author', 'card-info');
        console.log(myLibrary[index]['author'])

        cardAuthor.textContent = `${myLibrary[index]['author']}`
        cardDiv.appendChild(cardAuthor);

        const cardPages = document.createElement('div');
        cardPages.classList.add('pages', 'card-info');
        console.log(myLibrary[index]['pages'])

        cardPages.textContent = `${myLibrary[index]['pages']}`;
        cardDiv.appendChild(cardPages);

        libraryDisplay.appendChild(cardDiv);
    }
}

createCard();














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
