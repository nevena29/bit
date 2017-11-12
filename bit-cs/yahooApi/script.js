var myArray=[
    movies={
        title:"In Bruges",
        rating:5,
        hasWatched:true
},
    movies={
        title:"Frozen",
        rating:4.5,
        hasWatched:false
    },
    movies={
        title:"Mad Max Fury Load",
        rating:5,
        hasWatched:true
    },
    movies={
        title:"Les Miserables",
        rating:3.5,
        hasWatched:false
    }

];

 function BuildString(movie){
    var result="You have"
if(movie.hasWatched===true){
         result+="watched";
            } else{
            result+="Not seen";
                
            }
            result+= "\"" + movie.title;
            result+="\"" + movie.rating;
            return result;
        };
    
     console.log(BuildString(movies))       
       myArray.forEach(function(movies) {
          console.log(BuildString(movies)) ;
       });
    
    