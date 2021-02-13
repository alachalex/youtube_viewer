$(document).ready(function(){
    // declaring some variables including the video URL and the space
    // where videos will show on the HTML
    var link = ''
    
    //This function takes the submission
    $("#searching").submit(function (event) {
        event.preventDefault()
        var query = $("#form_result").val()
        videofind(query)
    });

    //this function gets the results of the submission from the 
    // google api website and displays in the HTML
    function videofind(query){
        $.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAAOOC0KOMi0QniEruh91kTnRnQTWWkVLs&type=video&part=snippet&maxResults=5&q=" + query, function(data){
            //all within the get call
            //console logging for debugging
            console.log("here is data",data);
                //for each item returned from the get call
                data.items.forEach(item =>{
                    // this creates a variable to be returned to the HTML file
                    link =  `<iframe width = "600" height = "550" src = "https://www.youtube.com/embed/${item.id.videoId}" frameboarder="0" allowfullscreen></iframe>`
                    $("#results").append(link)
            });
        })
    }
    
})

