// Book database simulation
let books = [
    {id: '1', title: 'Clean Code', author: 'Robert C. Martin', status: 'Available'},
    {id: '2', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', status: 'Available'}
];

function borrowBook() {
    const memberID = document.getElementById('memberID').value;
    const bookID = document.getElementById('bookID').value;
    const borrowDate = document.getElementById('borrowDate').value;

    // Validate inputs
    if (memberID === "" || bookID === "" || borrowDate === "") {
        alert('All fields are required!');
        return;
    }

    // Find the book by its ID
    const book = books.find(b => b.id === bookID);

    // Check if the book exists and is available
    if (book && book.status === 'Available') {
        // Update book status to "Borrowed"
        book.status = 'Borrowed';

        // Get reference to the table
        const table = document.getElementById('borrowTable');
        
        // Insert a new row
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = memberID;
        newRow.insertCell(1).innerHTML = bookID;
        newRow.insertCell(2).innerHTML = borrowDate;
        newRow.insertCell(3).innerHTML = 'Not Returned';

        // Show success message
        alert(`Book ID ${bookID} borrowed successfully!`);

        // Reset the form fields
        document.getElementById('borrowForm').reset();
    } else if (book && book.status === 'Borrowed') {
        alert('Book is already borrowed.');
    } else {
        alert('Book not found.');
    }
}
