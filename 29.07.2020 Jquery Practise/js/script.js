$(document).ready(function () {
    //accordion version 1
    // $(document).on("click", ".card-header", function () {
    //     $(this).next().slideToggle("fast")
    // })

    //accordion version 2
    // $(document).on("click", ".card-header", function () {
    //     if ($(this).next()[0] != $(".active")[0]) {
    //         $(this).next().slideDown("fast", function () {
    //             $(this).addClass("active")
    //         });
    //         $(".active").slideUp("fast", function () {
    //             $(this).removeClass("active")
    //         });
    //     }
    // })

    //accordion version 3
    // $(document).on("click", ".card-header", function () {
    //     $(this).next().slideDown("fast", function () {
    //         $(this).addClass("active")
    //     });
    //     $(".active").slideUp("fast", function () {
    //         $(this).removeClass("active")
    //     });
    // })

    //AJAX

    $.ajax({
        url:"http://api.aladhan.com/v1/calendar?latitude=40&longitude=49&method=2&month=7&year=2020",
        type:"Get",
        success:function(response){
            for (const data of response.data) {
                console.log(data.date.readable)
                for (const key in data.timings) {
                    console.log(`${key} - ${data.timings[key]}`)
                }
            }
        },
        error:function(exeption){
            console.log(exeption);
        }
    })
})