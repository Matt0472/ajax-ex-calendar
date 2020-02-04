$(document).ready(function () {
  var thisMonth = 0;
  var year = 2018;
  var baseMonth = moment(
    {
      year: year,
      month: thisMonth
    }
  );
  printMonth(baseMonth);
  printHoliday(baseMonth);

  $('#next').click(function () {
    var thisMonth = $('h2').attr('data-this-month');
    var date = moment(thisMonth).add(1, 'months');
    console.log(date);
    if (thisMonth == '2018-12') {
      alert('fuck');
      var date = moment(thisMonth).subtract(11, 'months');
    }

    printMonth(date);
    printHoliday(date);
  });

  $('#prev').click(function () {
    var thisMonth = $('h2').attr('data-this-month');
    var date = moment(thisMonth).subtract(1, 'months');
    console.log(date);
    if (thisMonth == '2018-01') {
      alert('fuck');
      var date = moment(thisMonth).add(11, 'months');
    }

    printMonth(date);
    printHoliday(date);
  });

});



// -----------------------FUNCTION -----------------------

function printMonth(month) {
  $('.month-list').html('');
  $('h2').text(month.format('MMMM YYYY'));
  $('h2').attr('data-this-month', month.format('YYYY-MM'));

  var daysInMonth = month.daysInMonth();

  for (var i = 1; i <= daysInMonth ; i++) {
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var context = {
      day: i,
      month: month.format('MMMM'),
      dateComplete: month.format('YYYY-MM') + '-' + addZero(i)
    };
    var html = template(context);
    $('.month-list').append(html);
  }
}

function addZero(num) {
  if(num < 10) {
    return '0' + num;
  }
  return num;
}


function printHoliday(month) {
  $.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/holidays',
      method: 'GET',
      data: {
        year: month.year(),
        month: month.month()
      },
      success: function (data) {
        var holidays = data.response;
        for (var i = 0; i < holidays.length; i++) {
          var thisHoliday = holidays[i];
          var thisHolidayData = thisHoliday.date;
          $('li[data-date-complete="'+ thisHolidayData  +'"]').addClass('holiday');
          $('li[data-date-complete="'+ thisHolidayData  +'"]').find('.nome-festivita').append('-' +  ' ' + thisHoliday.name);
        }
      },
      error: function () {
        alert('errore');
      }
    }
  );
}
