var table = document.getElementById("queue");
var tbody = document.getElementsByClassName("queueTBody");

  function addToTable() {    
    
      console.log(tbody);
      // Append product to the table
      tbody.append(
          "Name"
          // "<tr>" +
          //   "<td>" + ("one") + "</td>" +
          //   "<td>" + ("two") + "</td>" +
          //   "<td>" + ("three") + "</td>" +
          // "</tr>"
          );
  }


          // "<td>" + $("#itemOne").val() + "</td>" +
          //  "<td>" + $("#itemTwo").val() + "</td>" +
          //  "<td>" + $("#itemThree").val() + "</td>" +
  // function addRowToTable() {
  //   // First check if a <tbody> tag exists, add one if not
  //   // if ($("#queueTableTwo tbody").length == 0) {
  //   //   $("#queueTable").append("<tbody></tbody>");
  //   // }

  //   ("#queue tbody").append(
  //     "<tr>" +
  //       "<td>Item1</td>" +
  //       "<td>Item2</td>" +
  //       "<td>Item3</td>" +
  //     "</tr>"
  //     );
  //     addPersonToTable();
  // }
