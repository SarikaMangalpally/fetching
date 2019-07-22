var value = "";
var path = "";
$(document).ready(() => {
  $("#nodata-div").hide();
  $("#loader").hide();
  $("#data-div").hide();
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=x2TG9ZpYWH1n3uhXvrRniDESTrthyBmLWjz31Mt1";
  $("#date").on("change", () => {
    value = $("#date").val();
    path = url + "&date=" + value;
    console.log(value);
    console.log(path);
    fetch(path)
      .then(response => {
        $("#loader").show();
        $("#data-div").hide();
        $("#nodata-div").hide();
        if (response.status === 200) {
          console.log("response succeeded");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.media_type === "image") {
          $("#loader").hide();
          $("#nodata-div").hide();
          $("#data-div").show();
          console.log(data.media_type);
          $("#figCaption").text(data.title);
          $("#explanation").text(data.explanation);
          $("#AstronomyImage").attr("src", data.url);
        } else {
          console.log("media is of " + data.media_type);
          $("#data-div").hide();
          $("#loader").hide();
          $("#nodata-div").show();
        }
      });
  });
});
