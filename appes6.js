class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }


}

class UI { 
    addBookToList(book){
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
}


    showAlert(message, className){
            // Create Div
    const div = document.createElement('div');
    // Add Classes
    div.className = `alert ${className}`;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get Form
    const form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);

    }

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    


    }
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    
    }

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

// Validate
if(title === '' || author === '' || isbn === ''){
    // Error Alert
    ui.showAlert('Please fill all the fields', 'error');


} else {
    // Add book to List
    ui.addBookToList(book);

    // Show Success
    ui.showAlert('Book Added', 'success');


    // Clear Fields
    ui.clearFields();
}

    e.preventDefault();
});


// Event listener for delete
document.getElementById('book-list').addEventListener
('click', function(e){

    // Instatiate UI
    const ui = new UI();

    ui.deleteBook(e.target);

    // show an alret
    ui.showAlert('Book removed', 'success');

    e.preventDefault();
});