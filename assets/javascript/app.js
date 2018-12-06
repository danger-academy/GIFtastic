$(document).ready(function(){
  var topics = ['deadwood', 'tombstone', 'blazing saddles', 'true grit', 'unforgiven', 'the outlaw josey wales', 'pale rider', 'the good the bad and the ugly'];

  //create topic array buttons
    function buttonExpress(){
        $('#buttonsView').empty();
        
        for ( var i=0; i < topics.length; i++) {
            //create all buttons
            var a = $('<button>');
            a.addClass('expression');
            a.attr('data-name', topics[i]);
            a.text(topics[i]);
            $('#buttonsView').append(a);
        }
    }    
    buttonExpress();
   

    //on button click
    $(document).on('click', '.expression', function() {

        //console.log(queryURL)
            
            //grabs the data
            
                //console.log(results)

                    //empties the div before adding more gifs
                
                        //loops through the data
        
                        
                    
               


       


//adding new button


});  //document ready

