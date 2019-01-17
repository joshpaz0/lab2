function initializePage(){
  $("#testjs").click(function(e) {
    $('.jumbotron h1').text("Javascript is connected");
  });

  $("a.thumbnail").click(projectClick);
