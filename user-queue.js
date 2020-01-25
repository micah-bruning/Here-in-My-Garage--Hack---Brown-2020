var table = document.getElementById("queueTable")


  function addRowToTable() {
    // First check if a <tbody> tag exists, add one if not
    // if ($("#queueTableTwo tbody").length == 0) {
    //   $("#queueTable").append("<tbody></tbody>");
    // }

    ("#queue tbody").append(
      "<tr>" +
        "<td>Item1</td>" +
        "<td>Item2</td>" +
        "<td>Item3</td>" +
      "</tr>"
      );
      addPersonToTable();
  }

  function addPersonToTable() {
    // First check if a <tbody> tag exists, add one if not
    // if ($("#queue tbody").length == 0) {
    //   $("#queue").append("<tbody></tbody>");
    // }
        
    // Append product to the table
    ("#queue tbody").append(
        "<tr>" +
          "<td>" + ("one") + "</td>" +
          "<td>" + ("two") + "</td>" +
          "<td>" + ("three") + "</td>" +
         // "<td>" + $("#itemOne").val() + "</td>" +
        //  "<td>" + $("#itemTwo").val() + "</td>" +
        //  "<td>" + $("#itemThree").val() + "</td>" +
        "</tr>"
        );
  }