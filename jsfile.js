$(document).ready(function(){
    // declaring some variables including the video URL and the space
    // where videos will show on the HTML
    var link = ''
    //console.log("im going to kill myself");
    
    //This function takes the submission
    $("#searching").submit(function (event) {
        event.preventDefault()
        var query = $("#form_result").val()
        videofind(query)
    });

    //this function gets the results of the submission from the 
    // google api website and displays in the HTML
    function videofind(query){
        console.log("im going to kill myself")
        $.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAAOOC0KOMi0QniEruh91kTnRnQTWWkVLs&type=video&part=snippet&maxResults=5&q=" + query, function(data){
            console.log("here is data",data);
                data.items.forEach(item =>{
                    link =  '<iframe width = "600" height = "550" src = "http://www.youtube.com/embed/${item.id.videoId}" frameboarder="0" allowfullscreen></iframe>'
                    $("#results").append(link)
                });
        })
    }
    
})

