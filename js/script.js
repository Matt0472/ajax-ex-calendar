$(document).ready(function() {
  // var tempo = moment("2018-01", "YYYY-MM").daysInMonth();
  // console.log(tempo);
  // var bisestile = moment([2018]).isLeapYear();
  // console.log(bisestile);
  // var addMoment = moment([2010, 0, 31]).add(1, 'months');
  // console.log(addMoment);

  $.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0',
        method: "GET",
        success: function(data, stato) {
          // console.log(data.response[0].date);
          // console.log(data.response[1].date);
          // fare un ciclo for
          for (var i = 0; i < data.response.length; i++) {
            var dayList = $('.days-list > li').attr('data-day');
            var singleDate = data.response[i].date;
            console.log(singleDate);
            if (singleDate == dayList) {
              $('span').addClass('holiday');
            }
          }
          //confrontare il date del response con l'attributo dei li
        },
        error: function(richiesta, stato, errori) {
          alert('E\' avvenuto un errore.' + errori);
        }
      }
    );
});
