$(document).ready(function() {

  $("#formOne").submit(function(event) {
    $("#java, #css, #csharp").hide();
    var experience = $("select#experience").val();
    var company = $("select#company").val();
    var track = $("input:radio[name=track]:checked").val();

    if (experience === "yes") {
      if (company === "big" && track === "java") {
        $("#java").show();
      } else if (company === "small" && track === "css") {
        $("#css").show();
      } else if (company === "enterprise" && track === "csharp") {
        $("#csharp").show();
      }
    }

    if (experience === "no") {
      if (track === "java") {
        $("#java").show();
      } else if (track === "css") {
        $("#css").show();
      } else if (track === "csharp") {
        $("#csharp").show();
      }
    }


    event.preventDefault();
  });
});
