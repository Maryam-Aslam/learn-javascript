//.hide--for hiding elment
//.show--for showing
//.toggel--for reverse same time
//.fade in-------fadeIn---work on display:none
//.fadeOut
//.fadeToggle
//.fadeTo----can add opacity value ("slow" , 0.4)
//.slideUp
//.slideDown
//.slideToggle



$(document).ready(function(){

    // $("#btn").click(function(){
    //   $(".myp").toggle(3000);
    // });

    // $("button").click(function(){
    //     alert("checking jquery cdn")
    // });

    // $("#btn").click(function(){
    //     $(".myp").show(3000);

    //   });
    // $("#btn").click(function(){
    //     $(".myp").fadeToggle(3000);

    //   });

    // $("#btn").click(function(){
    //     $(".myp").fadeTo("slow" ,0.5);

    //   });

    // $("#btn").click(function(){
    //     $(".myp").slideUp();

    //   });

    // $("#btn").click(function(){
    //     $(".myp").slideDown();

    //   });

    // $("#btn").click(function(){
    //     $(".myp").slideToggle();

    //   });

    // $("#btn").click(function(){
    //     $(".myp").hide()
    //     $(".myp").animate({
    //         width:"400px",
    //         height:"400px",
    //         borderRadius:"50%",
    //     }).slideDown(3000).fadeOut(2000)

    //   });

    //   $("#btn").click(function(){
    //     alert($(".myp").attr("class")

    //    ) })

    // $("#btn").click(function(){
    //     alert($(".myp").remove("class")

    //    ) })
    // $("#btn").click(function(){
    //     alert($("#btn").css({
    //         fontSize:"100px"
    //     })

    //    ) })
    
    // $("#btn").click(function(){
    //     alert($(".myp").text("this is updatedd"));

    //    })

    //    $("#btn").click(function(){
    //     alert($(".myp").html("<h1> hello world</h1>"));

    //    })
    // $("#btn").click(function(){
    //     alert($(".myinput").val("new value by .val"));

    //    })
   
       
    // $("#btn").click(function(){
    //     alert($(".myp").toggleClass("thiis"));

    //    })
   

//add class 
// removeclass

    $("#btn").click(function(){
        alert($(".myp").attr({
            class:"myp",
            title:"my div",
        })

       )})
  });
  