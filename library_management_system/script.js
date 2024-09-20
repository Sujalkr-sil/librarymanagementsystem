// List of books (simulating a database)
let books = [
    {id: '1', title: 'Clean Code', author: 'Robert C. Martin', status: 'Available'},
    {id: '2', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', status: 'Available'}
];

// Function to borrow a book
function borrowBook() {
    const memberID = document.getElementById('memberID').value;
    const bookID = document.getElementById('bookID').value;
    const borrowDate = document.getElementById('borrowDate').value;

    // Find the book by its ID
    const book = books.find(b => b.id === bookID);

    // Check if the book exists and is available
    if (book && book.status === 'Available') {
        // Update book status to "Borrowed"
        book.status = 'Borrowed';

        // Log borrowing record
        const table = document.getElementById('borrowTable');
        const newRow = table.insertRow();

        newRow.insertCell(0).innerHTML = memberID;
        newRow.insertCell(1).innerHTML = bookID;
        newRow.insertCell(2).innerHTML = borrowDate;
        newRow.insertCell(3).innerHTML = 'Not Returned';

        alert(`Book ID ${bookID} borrowed successfully!`);

        // Clear the form
        document.getElementById('borrowForm').reset();
    } else if (book && book.status === 'Borrowed') {
        alert('Book is already borrowed.');
    } else {
        alert('Book not found.');
    }
