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
          var tempo = moment("2018-01", "YYYY-MM").daysInMonth("YYYY-MM-DD");
          for (var i = 1; i <= tempo; i++) {
            var month = moment([2018]).month(0).format("YYYY-MM");
            var number = i;
            if (i < 10) {
              var currentDate = month + '-' + '0' + i;
            } else {
              var currentDate = month + '-' + i;
            }
            var source = $('#entry-template').html();
            var template = Handlebars.compile(source);
            var context = { number: number, month: ' Gennaio', date: currentDate};
            var html = template(context);
            $('.first-month-list').append(html);
          }
          for (var i = 0; i < data.response.length; i++) {
            var singleDate = data.response[i].date;
            var singleHoliday = data.response[i].name;
            var dayList = $('li[data-day="' + singleDate + '"]');
            dayList.addClass('holiday');
            if (dayList.hasClass('holiday')) {
              var source = $('#span-template').html();
              var template = Handlebars.compile(source);
              var context = { name: singleHoliday};
              var html = template(context);
              dayList.append(html);
            }
          }
        },
        error: function(richiesta, stato, errori) {
          alert('E\' avvenuto un errore.' + errori);
        }
      }
    );
});
