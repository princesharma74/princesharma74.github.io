document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault();

    // Retrieve form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Use the Notion API to send the form data
    // Replace YOUR_NOTION_API_KEY and YOUR_NOTION_DATABASE_ID with your actual values
    var notion = new NotionAPI({ auth: 'secret_yF378kdYlxCbn9pzTH70s7eXVQ3DqHy6Q8vchQLztv6' });
    notion.appendBlock('cc1668c63da140f5877390405fb55862', {
        Name: name,
        Email: email,
        Message: message
    }).then(function (response) {
        // Handle successful form submission
        console.log('Form submitted successfully');
        // Optionally, display a success message or redirect the user
    }).catch(function (error) {
        // Handle error
        console.error('Error submitting form:', error);
        // Optionally, display an error message to the user
    });
}
