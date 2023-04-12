const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
  this.getInfo = function () {
    return `${title} by ${author}, ${pages}, ${
      this.isRead ? "already read" : "not read yet"
    }`;
  };
}

const book1 = new Book("The Hobbit", "J.R.R. Tokien", 295);
library.push(book1);

const book2 = new Book("Nine Eighty-Four", "George Orwell", 316);
library.push(book2);

library.forEach((book) => {
  const p = document.createElement("p");

  p.textContent = book.getInfo();

  document.body.append(p);
});
