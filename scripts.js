// Replicate the basic HTML above (2 different headings and a button)
// Create an EventListener for clicking on the button, increase the value of the second heading (currently 0)
// (Optional) Create a working decreasing button as well
// (Hint) Any content of an HTML element is going to be a string
// (Hint) You can store the number in a variable

// on button click increase
$('.increase').click(() => {
    // read value of h3
    let string = $('h3').text();
    
    // increase number by 1 anf change value of h3
    $('h3').html(++string);
});

// on button click decrease
$('.decrease').click(() => {
    // read value of h3
    let string = $('h3').text();
    
    // increase number by 1 anf change value of h3
    $('h3').html(--string);
});

