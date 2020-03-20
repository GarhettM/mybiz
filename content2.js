


    function ask()  {
        
        var areyou = prompt("Are you sick? yes or no?");
        var speakBack;
        
        while(areyou === '') {
            areyou = prompt("English M*********! Do you speak it!? Please enter yes or no!!!!");
    }

        if (areyou === 'yes') {
            speakBack = sick();
    }   else  {
            speakBack = 'Then what the hell are you doing here?!';
    }    return speakBack;

}
    


    function sick() {
        var illness = prompt("How sick are you 1-10?");
        var diagnose;

        if (illness > 7)    {
            diagnose = buystuff1();
    }   else if (illness > 4)   {
            diagnose = buystuff2();
    }   else   {
            diagnose = 'Rub some dirt on it and drink water. NEXT!';
    }
        return diagnose;

}   



    function buystuff1() {
        
        confirm('DAMN! I hope you have insurance!');

        var quantity = prompt("How much of this do you want to buy for $75 a pop?"); 
        var total = (75 * quantity);
        var receipt;
        
        // for(var quantity = 0; quantity < 50; quantity + 50) {
        //     confirm("you wanted me to add 50 to that right? Don't worry, I already did")
        // }

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

        return(receipt);
}


    function buystuff2() {
        
        confirm('Gotcha! Well I got what you need!');

        var quantity = prompt("How much of this do you want to buy for $75 a pop?"); 
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

        return(receipt);
}

    function buy(){
        var answer = prompt("How many sanitizers do you want?");
        var album = '';
        var pic = '<img src=''>';

        while(answer === '' || isNaN(answer) )  {
        answer = prompt('put in a number')
    }
    
        for(var i = 0 ; i < answer ; i++) {
        album = album + pic;    
    }

        return album;

}


