$(document).ready(function() {
  var tempo = moment("2018-01", "YYYY-MM").daysInMonth();
  console.log(tempo);
  var bisestile = moment([2018]).isLeapYear();
  console.log(bisestile);

  $.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0',
        method: "GET",
        success: function(data, stato) {
          console.log(data.response);
        },
        error: function(richiesta, stato, errori) {
          alert('E\' avvenuto un errore.' + errori);
        }
      }
    );
});
