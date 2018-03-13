$(function() {

  /*Header */
  let menuList = $("nav>ul>li");

  menuList.on("click", function() {
    $(".drop_down_menu").hide();
    let ths = $(this);
    ths.next().show();
    ths.find("ul").css("z-index", "2");
    ths.find("ul").css("display", "flex");
    ths.find("ul").css("flex-direction", "column");
  })

  $("#section1 .container").on('mouseenter', function() {
    menuList.find("ul").hide();
  })

  $(document).on('click', '.new_item', function() {
    menuList.find("ul").hide();
  })

  $(document).on('mouseleave', '.drop_down_menu', function() {
    menuList.find("ul").hide();
  })

  $(document).on('click', '.drop_down_menu', function() {
    menuList.find("ul").hide();
  })

  $(document).on('scroll', function() {
    menuList.find("ul").hide();
  })

  /*Slider*/
  let bedImages = $("#bedImages");
  let ul = bedImages.find("ul");
  let liArray = ul.find("li");
  let currentSlide = 1;
  let windowWidth = $(window).width();

  if (windowWidth <= 1400) {
    let width = liArray.eq(6).width();
    let animationSpeed = 1500;
    let pause = 3000;
    let clonelast = liArray.parent().children().last().clone();
    ul.prepend(clonelast);
    let clonefirst = liArray.parent().children().first().clone();
    ul.append(clonefirst);
    ul.css("left", -width);
    setInterval(function() {
      ul.animate({
        'margin-left': "+=" + width
      }, animationSpeed, function() {
        currentSlide--;
        if (currentSlide < 1) {
          currentSlide = liArray.length;
          ul.css("margin-left", -width * 8);
        }
      });
    }, pause);
  }

  /*Photos*/

  let photos = $("#section2 .container>div").find("div:nth-child(1)");

  photos.on("mouseenter", function() {
    let ths = $(this);
    ths.find("p").hide();
    ths.css("transform", "scale(1.04)")
  })

  photos.on("mouseleave", function() {
    let ths = $(this);
    ths.find("p").show();
    ths.css("transform", "scale(1.00)")
  })

  /*DropdownList*/

  let dropdownList = $('.drop_down_list');
  let listLabel = $('.list_label');
  let listArrow = $('.list_arrow');
  let listPanel = $('.list_panel');
  let list = $(".list_panel").children();
  let panelLeft = $(".panel_left");
  let panelRight = $(".panel_right");
  sumPanel = panelRight.find(".value");
  let sum = $(".sum strong");
  let clickCount = 0;

  listArrow.on("click", function() {
    clickCount++;
    let ths = $(this);
    if (clickCount % 2 != 0) {
      ths.next().css("display", "block");
    } else {
      ths.next().css("display", "none");
    }
  });

  /*Choose bed image*/
  list.on("click", function(event) {
    let ths = $(this);
    ths.parent().parent().children().eq(0).text(ths.text());
    ths.parent().css("display", "none");
    ths.parent().parent().children().eq(0).css("color", "rgb(0,0,46)");
    clickCount = 2;
    let divImage = $(".image_part")


    if (listLabel.eq(0).text() == "Single Bed" && listLabel.eq(1).text() == "Wooden") {
      divImage.css("backgroundImage", "url('images/drewniane1.png')");
    } else if (listLabel.eq(0).text() == "Single Bed" && listLabel.eq(1).text() == "Metal") {

      divImage.css("backgroundImage", "url('images/metalowe1.png')");
    } else if (listLabel.eq(0).text() == "Single Bed" && listLabel.eq(1).text() == "Upholstered") {

      divImage.css("backgroundImage", "url('images/tapicerowane1.png')");
    } else if (listLabel.eq(0).text() == "Twin Bed" && listLabel.eq(1).text() == "Wooden") {

      divImage.css("backgroundImage", "url('images/drewniane2.png')");
    } else if (listLabel.eq(0).text() == "Twin Bed" && listLabel.eq(1).text() == "Metal") {

      divImage.css("backgroundImage", "url('images/metalowe2.png')");
    } else if (listLabel.eq(0).text() == "Twin Bed" && listLabel.eq(1).text() == "Upholstered") {

      divImage.css("backgroundImage", "url('images/tapicerowane2.png')");
    }
    if (listLabel.eq(0).text() == "Bunk Bed" && listLabel.eq(1).text() == "Wooden") {

      divImage.css("backgroundImage", "url('images/pietrowe1.png')");
    }
    if (listLabel.eq(0).text() == "Bunk Bed" && listLabel.eq(1).text() == "Metal") {

      divImage.css("backgroundImage", "url('images/pietrowe2.png')");
    }
    if (listLabel.eq(0).text() == "Bunk Bed" && listLabel.eq(1).text() == "Upholstered") {

      divImage.css("backgroundImage", "url('images/pietrowe3.png')");
    }

    /*summary calc*/
    if (listLabel.eq(0).text() == "Single Bed") {
      panelLeft.children().eq(1).text("Single Bed");
      panelRight.children().eq(1).text(list.eq(0).attr("data-value"))
    } else if (listLabel.eq(0).text() == "Twin Bed") {
      panelLeft.children().eq(1).text("Twin Bed");
      panelRight.children().eq(1).text(list.eq(1).attr("data-value"))
    } else if (listLabel.eq(0).text() == "Bunk Bed") {
      panelLeft.children().eq(1).text("Bunk Bed");
      panelRight.children().eq(1).text(list.eq(2).attr("data-value"))
    }


    if (listLabel.eq(1).text() == "Wooden") {
      panelLeft.children().eq(2).text("Wooden");
      panelRight.children().eq(2).text(list.eq(3).attr("data-value"))
    } else if (listLabel.eq(1).text() == "Metal") {
      panelLeft.children().eq(2).text("Metal");
      panelRight.children().eq(2).text(list.eq(4).attr("data-value"))
    } else if (listLabel.eq(1).text() == "Upholstered") {
      if (listLabel.eq(0).text() == "Bunk Bed") {
      } else {
        panelLeft.children().eq(2).text("Upholstered");
        panelRight.children().eq(2).text(list.eq(5).attr("data-value"));
      }
    }

    let add = 0;
    for (let k = 0; k < sumPanel.length; k++) {
      add += Number(sumPanel.eq(k).text());
    }
    sum.text(add + "$");
    add = 0;
  });

  /*checkbox*/
  $('[type="checkbox"]').prop('checked', false);

  /*transport and bedding calc*/

  let transport = $('#transport');
  let bedding = $('#beddingAdd');
  let clicktransport = 0;
  let clickbedding = 0;

  transport.on("click", function(event) {
    clicktransport++;
    let ths = $(this);

    if (panelLeft.children().eq(1).text() == "" && panelLeft.children().eq(2).text() == "") {
      alert("Firstly you have to choose your bed!")
      $('[type="checkbox"]').prop('checked', false);
      clicktransport = 0;
      panelLeft.children().eq(3).text("");
      sumPanel.eq(2).text(transport.data(""));
      sum.text("");
    } else if (clicktransport % 2 != 0) {
      panelLeft.children().eq(3).text("Transport");
      sumPanel.eq(2).text(transport.data("value"));
      sum.text(parseInt(sum.text(), 10) + ths.data("value") + ("$"));
    } else {
      panelLeft.children().eq(3).text("");
      sumPanel.eq(2).text("");
      sum.text(parseInt(sum.text(), 10) - ths.data("value") + ("$"));
    }
  });

  bedding.on("click", function() {
    clickbedding++;
    let ths = $(this);
    if (panelLeft.children().eq(1).text() == "" && panelLeft.children().eq(2).text() == "") {
      alert("Firstly you have to choose your bed!")
      $('[type="checkbox"]').prop('checked', false);
      clickbedding = 0;
      panelLeft.children().eq(4).text("");
      sumPanel.eq(3).text(bedding.data(""));
      sum.text("");
    } else if (clickbedding % 2 != 0) {
      panelLeft.children().eq(4).text("Bedding Plus");
      sumPanel.eq(3).text(bedding.data("value"));
      sum.text(parseInt(sum.text(), 10) + ths.data("value") + ("$"));
    } else {
      panelLeft.children().eq(4).text("");
      sumPanel.eq(3).text("");
      sum.text(parseInt(sum.text(), 10) - ths.data("value") + ("$"));

    }
  });


  /*installments option*/
  let optionsBox = $(".option")
  optionsBox.on("mouseover", function() {
    let ths = $(this);
    ths.css("background-color", "rgb(0,0,46)");
    ths.children().eq(0).css("background-color", "rgb(0,0,46)");
    ths.children().eq(1).css("background-color", "white");
    ths.children().eq(2).css("color", "white");
    ths.children().eq(3).first().css("background-color", "white");
    ths.children().eq(3).last().css("color", "rgb(0,0,46)");
    ths.children().eq(5).css("background-color", "white");
    ths.children().eq(5).css("color", "rgb(0,0,46)");
  })

  optionsBox.on("mouseout", function() {
    ths = $(this);
    ths.css("background-color", "white");
    ths.children().eq(0).css("background-color", "white");
    ths.children().eq(1).css("background-color", "rgb(0,0,46)");
    ths.children().eq(2).css("color", "rgb(0,0,46)");
    ths.children().eq(5).css("background-color", "rgb(0,0,46)");
    ths.children().eq(5).css("color", "white");
  })


  /*Form validation*/
  let validateName = $(".validate_error_name");
  let validateEmail = $(".validate_error_email");
  let validateMessage = $(".validate_error_message");
  let nameForm = $('#name');
  let emailForm = $("#email");
  let messageForm = $("#message");
  let agree = $("#agreement");
  let buttonSend = $(".button_send");
  let clickAgree = 0;

  validateName.hide();
  validateEmail.hide();
  validateMessage.hide();

  let error_name = false;
  let error_email = false;
  let error_message = false;

  nameForm.focusout(function() {
    check_name();
  })
  emailForm.focusout(function() {
    check_email();
  })
  messageForm.focusout(function() {
    check_message();
  })

  function check_name() {
    let name_length = nameForm.val().length;
    if (name_length < 5 || name_length > 20) {
      validateName.html("Should be between 5-20 characters");
      validateName.show();
      error_name = true;
    } else {
      validateName.css("display", "none");
    }
  }

  function check_email() {
    if ((emailForm.val().indexOf("@") == -1) || (emailForm.val().indexOf(".") == -1)) {
      validateEmail.html("Email should contain have @ and .");
      validateEmail.css("display", "block");
      error_email = true;
    } else {
      validateEmail.css("display", "none");
    }
  }

  function check_message() {
    let message_length = messageForm.val().length;
    if (message_length < 10 || message_length > 60) {
      validateMessage.html("Should be between 10-60 characters");
      validateMessage.show();
      error_message = true;
    } else {
      validateMessage.css("display", "none");
    }
  }

  agree.on("click", function() {
    clickAgree++;
  })

  buttonSend.on("click", function() {
    error_name = false;
    error_email = false;
    error_message = false;

    check_name();
    check_email();
    check_message();

    if (error_name == false && error_email == false && error_message == false && clickAgree % 2 != 0) {
      alert("Message sent!");
      clearField();
      $('[type="checkbox"]').prop('checked', false);
      clickAgree = 0;
    } else if (clickAgree % 2 == 0) {
      alert("You have to accept agreement");
    }
  })

  function clearField() {
    nameForm.val("");
    emailForm.val("");
    messageForm.val("");
  }
  clearField();
});
