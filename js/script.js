let myLibrary = [];

function createCard() { // this function creates div for each book stored in myLibrary Array
    for(index = 0; index < myLibrary.length; index++){
        const libraryDisplay = document.querySelector('.main-library');
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('book-card');

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('title', 'card-info');

        cardTitle.textContent = `${myLibrary[index]['title']}`
        cardDiv.appendChild(cardTitle);

        const cardAuthor = document.createElement('div');
        cardAuthor.classList.add('author', 'card-info');

        cardAuthor.textContent = `${myLibrary[index]['author']}`
        cardDiv.appendChild(cardAuthor);

        const cardPages = document.createElement('div');
        cardPages.classList.add('pages', 'card-info');

        cardPages.textContent = `${myLibrary[index]['pages']}`;
        cardDiv.appendChild(cardPages);

        const cardDeleteBtn = document.createElement('div');
        cardDeleteBtn.classList.add('card-btn', 'delete-btn');
        const btnIcon = document.createElement('i');
        btnIcon.classList.add('fa-solid', 'fa-trash');
        cardDiv.appendChild(cardDeleteBtn);
        cardDeleteBtn.appendChild(btnIcon);

        libraryDisplay.appendChild(cardDiv);
    }
}

function clearCards() { // clears all array items from the DOM
    const libraryDisplay = document.querySelector('.main-library');
    while(libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.lastChild);
    }
}

const bookDetails = document.getElementById("book-details");
bookDetails.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    let bookTitle = document.querySelector('#title').value;
    let bookAuthor = document.querySelector('#author').value;
    let bookPages = document.querySelector('#pages').value;

    console.log(
        "book title: " + bookTitle + 
        " book author: " + bookAuthor + 
        " book pages: " + bookPages)

    myLibrary.push({
        title: bookTitle,
        author: bookAuthor,
        pages: bookPages,
    })

    bookDetails.reset();

    clearCards();
    createCard();

})














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
