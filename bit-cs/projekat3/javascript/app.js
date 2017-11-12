(function () {
    popularShows()
    // setupEventListeners();
})();


$(document).on("keypress", function (event) {
    console.log(event);
    if (event.keyCode == 13) {
        searchSeries();
    }
})
$(document).on("click", "a", function () {
    var value = $(this).attr("data-show-id");
    localStorage.setItem("myShow", value);
    window.location.href = "single.html";

})


function searchSeries() {
    var searchButton = $("#searchButton").val();
    var output = $(".row");


    var request = $.ajax({
        url: 'http://api.tvmaze.com/search/shows?q=' + searchButton,
        method: "GET",
        dataType: "json"
    });

    request.done(function (jsonMsg) {
        output.text("");
        $.each(jsonMsg, function (i) {
            var name = jsonMsg[i].show.name;
            var id = jsonMsg[i].show.id;
            var image;
            if (jsonMsg[i].show.image == null) {
                image = 'http://via.placeholder.com/350x550'
            } else {
                image = jsonMsg[i].show.image.original;
            }
            output.append(`
            <div class="col-12 col-md-6 col-lg-4">
                <a class="show-item" data-show-id="` + id + `" href="#">
                    <img src="` + image + `">
                    <span>` + name + `</span>
                </a>
            </div>`);

        })

    });


};

function popularShows() {
    var output = $(".row");
    var request = $.ajax({
        url: 'http://api.tvmaze.com/shows',
        method: "GET",
        dataType: "json"
    });

    request.done(function (jsonMsg) {
        console.log(jsonMsg)
        for (var i = 0; i < 50; i++) {
            var name = jsonMsg[i].name;
            var id = jsonMsg[i].id;
            var image = jsonMsg[i].image.original;
            output.append(`
          <div class="col-12 col-md-6 col-lg-4">
              <a class="show-item" data-show-id="` + id + `" href="#">
                  <img src="` + image + `">
                  <span>` + name + `</span>
              </a>
          </div>`);


        }

    });

}