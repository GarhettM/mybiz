    var quantity = prompt("How much of this do you want to buy for $75:"); 
    var total = (75 * quantity);
    var receipt;
    confirm('$' + total + '?');    
    confirm("Thats it? Are you sure????");
    if (total > 10000) {    
    receipt = 'CONGRATULATIONS! Youre probably going to be fine!'; 
}   else if (total > 8000) {
    receipt = 'Almost there but still not as much as the TP hoarders';
}   else if (total > 5000) {
    receipt = 'Come on you cheapskate! Think of the children!';
}   else {
    receipt = 'Not even close! YOURE GOING TO DIE!'
}

    document.write('<h1>' + receipt + '</h1>');


    var answer = prompt("Are you sick?")
     