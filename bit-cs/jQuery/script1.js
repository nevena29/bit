var mainDiv = $("<div>");
$("body").append("<h1>Title");
$("body").append(mainDiv);



var picArr = ["https://i.pinimg.com/736x/62/22/3c/62223cc60b713821fa04b738f740d328--baby-beagle-beagle-pups.jpg",
             "https://i.pinimg.com/736x/be/82/15/be821544fc5f328567cb538f96edb49a--snowball-too-cute.jpg",
    
    "https://i.pinimg.com/736x/62/22/3c/62223cc60b713821fa04b738f740d328--baby-beagle-beagle-pups.jpg",
    "https://i.pinimg.com/736x/62/22/3c/62223cc60b713821fa04b738f740d328--baby-beagle-beagle-pups.jpg",
    "https://i.pinimg.com/736x/62/22/3c/62223cc60b713821fa04b738f740d328--baby-beagle-beagle-pups.jpg"
];

for(var i = 0; i < picArr.length;i++){
    var picture = $("<img>");
    picture.attr("src", picArr[i]);
    $(mainDiv).append(picture);
    picture.css("width","300px");
}

