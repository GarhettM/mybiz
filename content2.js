


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
            diagnose = 'Damn! I hope you have insurance!';
    }   else if (illness > 4)   {
            diagnose = 'Gotcha! Well I got what you need!';
    }   else   {
            diagnose = 'Rub some dirt on it and drink water. NEXT!';
    }
        return diagnose;
    }   



    function buystuff() {
        
        var quantity = prompt("How much of this do you want to buy for $75:"); 
        var total = (75 * quantity);
        var receipt;
        
        for(var quantity = 0; quantity < 50; quantity + 50) {
            confirm("you wanted me to add 50 to that right? Don't worry, I already did")
        }

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