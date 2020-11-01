


function getHeaderDate() {
    var currentHeaderDate = currentDate.toString();
    $("#currentDay").html(currentHeaderDate);
    console.log(currentHeaderDate)
}


var currentDate = new Date()

$(document).ready(function () {
    getHeaderDate();

    var currentHour = currentDate.getHours()
    console.log(currentHour)
    $(".time-block").each(function () {
        if (parseInt($(this).data("hour")) < currentHour) {
            $(this).addClass("past")
        } else if (parseInt($(this).data("hour")) === currentHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }

       var checkStorage = $(this).attr("id")
       var get = localStorage.getItem(checkStorage)
       console.log(get)
       $(this).text(get)


    });




    $("button").click(function() {
        console.log(this)
        var textarea = $(this).siblings('div').find('textarea')
        var content = textarea.val()
        console.log(content)

        var id = textarea.attr('id')
        
        localStorage.setItem(id, content)
       
        
    
    })
});





































