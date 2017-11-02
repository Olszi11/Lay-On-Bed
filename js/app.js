$(function() {

  //HEADER Rozwijanie i zwijanie listy
  var menuList = $("nav>ul>li");
  var liListe = menuList.find("ul").children();
  var click = 0;
  menuList.on("click", function() {
    $(".drop_down_menu").hide();
    var ths = $(this);
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

  //SECTION1 Slider
  var bedImages = $("#bedImages");
  var ul = bedImages.find("ul");
  var liArray = ul.find("li");
  var currentSlide = 1;
  var windowWidth = $(window).width();

  if (windowWidth <= 1400) {
    var width = liArray.eq(6).width();
    var animationSpeed = 1500;
    var pause = 3000;
    var clonelast = liArray.parent().children().last().clone();
    ul.prepend(clonelast);
    var clonefirst = liArray.parent().children().first().clone();
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

  //SECTION2 Zdjecia
  var photos = $("#section2 .container>div");
  var photos2 = photos.find("div:nth-child(1)");


  photos2.on("mouseenter", function() {
    var ths = $(this);
    ths.find("p").hide();
    ths.css("transform", "scale(1.04)")
  })

  photos2.on("mouseleave", function() {
    var ths = $(this);
    ths.find("p").show();
    ths.css("transform", "scale(1.00)")
  })

  //Wysuwanie listy
  var dropdownList = $('.drop_down_list');
  var listLabel = $('.list_label');
  var listArrow = $('.list_arrow');
  var listPanel = $('.list_panel');
  var list = $(".list_panel").children();
  var panelLeft = $(".panel_left");
  var panelRight = $(".panel_right");
  sumPanel = panelRight.find(".value");
  var sum = $(".sum strong");
  var clickCount = 0;

  listArrow.on("click", function() {
    clickCount++;
    ths = $(this);
    if (clickCount % 2 != 0) {
      ths.next().css("display", "block");
    } else {
      ths.next().css("display", "none");
    }
  });

  //ustawianie wybranego elementu listy w miejscu wyboru
  list.on("click", function(event) {
    ths = $(this);
    ths.parent().parent().children().eq(0).text(ths.text());
    ths.parent().css("display", "none");
    ths.parent().parent().children().eq(0).css("color", "rgb(0,0,46)");
    clickCount = 2;
    var divImage = $(".image_part")

    //section 3 ustawianie obrazka w zaleznosci od wyboru
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
    //kalkulator
    if (listLabel.eq(0).text() == "Single Bed") {
      panelLeft.children().eq(1).text("Single Bed");
      panelRight.children().eq(1).text(list.eq(0).attr("data-value")) //==list.eq(0).attr("data-value")+("zl");
    } else if (listLabel.eq(0).text() == "Twin Bed") {
      panelLeft.children().eq(1).text("Twin Bed");
      panelRight.children().eq(1).text(list.eq(1).attr("data-value")) //==list.eq(0).attr("data-value")+("zl");
    } else if (listLabel.eq(0).text() == "Bunk Bed") {
      panelLeft.children().eq(1).text("Bunk Bed");
      panelRight.children().eq(1).text(list.eq(2).attr("data-value")) //==list.eq(0).attr("data-value")+("zl");
    }



    if (listLabel.eq(1).text() == "Wooden") {
      panelLeft.children().eq(2).text("Wooden");
      panelRight.children().eq(2).text(list.eq(3).attr("data-value")) //==list.eq(0).attr("data-value")+("zl");
    } else if (listLabel.eq(1).text() == "Metal") {
      panelLeft.children().eq(2).text("Metal");
      panelRight.children().eq(2).text(list.eq(4).attr("data-value")) //==list.eq(0).attr("data-value")+("zl");
    } else if (listLabel.eq(1).text() == "Upholstered") {
      if (listLabel.eq(0).text() == "Bunk Bed") {

      } else {
        panelLeft.children().eq(2).text("Upholstered");
        panelRight.children().eq(2).text(list.eq(5).attr("data-value"));
      }
    }

    var add = 0;
    for (var k = 0; k < sumPanel.length; k++) {
      add += Number(sumPanel.eq(k).text());
    }
    sum.text(add + "$");
    add = 0;

  });

  //usuwanie z checkboxa zaznaczenia
  $('[type="checkbox"]').prop('checked', false);

  //kalkulator z transport

  var transport = $('#transport');
  var bedding = $('#beddingAdd');
  var clicktransport = 0;
  var clickbedding = 0;

  transport.on("click", function(event) {
    clicktransport++;
    ths = $(this);

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
    ths = $(this);
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


  // podswietlanie po najechaniu installments options section4
  var optionsBox = $(".option")
  optionsBox.on("mouseover", function() {
    ths = $(this);
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


  //walidacja formularza
  var validateName = $(".validate_error_name");
  var validateEmail = $(".validate_error_email");
  var validateMessage = $(".validate_error_message");
  var nameForm = $('#name');
  var emailForm = $("#email");
  var messageForm = $("#message");
  var agree = $("#agreement");
  var buttonSend = $(".button_send");
  var clickAgree = 0;

  validateName.hide();
  validateEmail.hide();
  validateMessage.hide();


  var error_name = false;
  var error_email = false;
  var error_message = false;

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
    var name_length = nameForm.val().length;
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
    var message_length = messageForm.val().length;
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
