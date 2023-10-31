$(document).ready(function() {
    const correctAnswerIndex = 2; 
    $('.option').click(function() {
        const selectedOption = $(this);
        const selectedOptionIndex = $('.option').index(selectedOption);

        $('.option').prop('disabled', true); 

        if (selectedOptionIndex === correctAnswerIndex) {
            $('.feedback').css('color', 'green').text('Correct!');
        } else {
            $('.feedback').css('color', 'red').text('Incorrect. Try again!');
        }
    });
});
