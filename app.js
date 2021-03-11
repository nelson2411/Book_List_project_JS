// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}



// UI Constructor
function UI(){}

UI.prototype.addBookToList = function(book){

    const list = document.getElementById('book-list');
// Create Element

const row = document.createElement('tr');

// Insert cols
row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X</a></td>
`;


list.appendChild(row);
}

// Clear Fields

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}



// Event Listener
document.getElementById('book-form').addEventListener('submit', 
function(e){
    // Get form values
const title = document.getElementById('title').value, 
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value


// Instantiate a Book
const book = new Book(title, author, isbn);



// Instatiate UI

const ui = new UI();


// Add book to List
ui.addBookToList(book);

// Clear Fields
ui.clearFields();

    e.preventDefault();
});