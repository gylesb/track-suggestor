$(document).ready(function() {

  $("#formOne").submit(function(event) {
    $("#java, #css, #csharp").hide();
    var experience = $("select#experience").val();
    var company = $("select#company").val();
    var track = $("input:radio[name=track]:checked").val();

    if (experience === "yes") {
      if (company === "big", "small", "enterprise" && track === "java") {
        $("#java").show();
      } else if (company === "big", "small", "enterprise" && track === "css") {
        $("#css").show();
      } else if (company === "big", "small", "enterprise" && track === "csharp") {
        $("#csharp").show();
      }
    }

    if (experience === "no") {
      if (company === "big", "small", "enterprise" && track === "java") {
        $("#java").show();
      } else if (company === "big", "small", "enterprise" && track === "css") {
        $("#css").show();
      } else if (company === "big", "small", "enterprise" && track === "csharp") {
        $("#csharp").show();
      }
    }


    event.preventDefault();
  });
});
