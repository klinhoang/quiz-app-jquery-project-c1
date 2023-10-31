$(document).ready(function() {
    // Store the correct answer (index of correct option)
    const correctAnswerIndex = 2; // Change this to your desired correct option (0-indexed)

    // Disable other options and show feedback
    $('.option').click(function() {
        const selectedOption = $(this);
        const selectedOptionIndex = $('.option').index(selectedOption);

        $('.option').prop('disabled', true); // Disable all options

        if (selectedOptionIndex === correctAnswerIndex) {
            $('.feedback').css('color', 'green').text('Correct!');
        } else {
            $('.feedback').css('color', 'red').text('Incorrect. Try again!');
        }
    });
});
