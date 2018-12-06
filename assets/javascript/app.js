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

        var western = $(this).html(); 
            console.log(western);
    
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + western + "&api_key=dc6zaTOxFJmzC&limit=10";
            console.log(queryURL);

            $.ajax({url: queryURL, method: 'GET'})
            .done(function(response) {
                // grabs the data
                var results = response.data;
                    console.log(results);

                    //empties the div before adding more gifs
                    $('#expressView').empty();

                        //loops through the data
                        for ( var j=0; j < results.length; j++) {
                            var imageDiv = $('<div>');
                            var imageView = results[j].images.fixed_height.url;
                            var still = results[j].images.fixed_height_still.url;
                                console.log(imageView);  
                            var expressImage = $('<img>').attr("src", still).attr('data-animate', imageView).attr('data-still', still);
                            expressImage.attr('data-state', 'still');

                            $('#expressView').prepend(expressImage);
                            expressImage.on('click', playGif);
                        } //for loop
            }); // done response

                function playGif() { 
                    var state = $(this).attr('data-state');
                    console.log(state);
                if ( state == 'still'){
                    $(this).attr('src', $(this).data('animate'));
                    $(this).attr('data-state', 'animate');
                } else {
                    $(this).attr('src', $(this).data('still'));
                    $(this).attr('data-state', 'still');
                    }

                } //on click express

}); 
