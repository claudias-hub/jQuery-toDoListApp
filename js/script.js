$(document).ready(function() {
    function newItem() {
        let inputValue = $('#input').val().trim();
        if (inputValue === '') {
            alert("You must write something!");
            return;
        }

        // Create <li> and delete button
        let li = $('<li></li>').text(inputValue);
        let deleteButton = $('<span class="delete"> X </span>');
        li.append(deleteButton);
        $('#list').append(li);
        $('#input').val('');

        console.log("Added: ", li.html()); // Debugging: Check if "X" is inside <li>
    }

    // Use jQuery to attach the click event
    $('#button').on('click', function() {
        newItem(); // Call newItem when button is clicked
    });

    // Event delegation for delete action
    $('#list').on('click', '.delete', function(event) {
        console.log("Delete button clicked!"); // Check if this logs
        event.stopPropagation(); // Prevent conflicts with sortable
        $(this).parent().remove();
    });

    // Make list sortable
    $('#list').sortable({
        cancel: '.delete' // Prevents delete button from interfering with drag
    });
});
