
    var i = 0;
    var txt1 = 'WELCOME'; /* The text */
    var speed1 = 350; /* The speed/duration of the effect in milliseconds */
    var pause1 = new Boolean(true);
    function typeWriter1() {
      if (i < txt1.length) {
        document.getElementById("welcome_title").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed1);
      } else {
        if (pause1) {
          setTimeout(typeWriter1, 1000);
          pause1 = false;
        } else { // after pause
          i = 0
          document.getElementById("welcome_title").innerHTML = txt1.charAt(i);
          i++;
          setTimeout(typeWriter1, speed1);
          pause1 = true;
        }
      }
    }

    var j = 0;
    var txt2 = 'ABOUT'; /* The text */
    var speed2 = 350; /* The speed/duration of the effect in milliseconds */
    var pause2 = new Boolean(true);
    function typeWriter2() {
      if (j < txt2.length) {
        document.getElementById("about_title").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed2);
      } else {
        if (pause2) {
          setTimeout(typeWriter2, 1000);
          pause2 = false;
        } else { // after pause
          j = 0
          document.getElementById("about_title").innerHTML = txt2.charAt(j);
          j++;
          setTimeout(typeWriter2, speed2);
          pause2 = true;
        }
      }
    }
    function init() {
      typeWriter1();
      typeWriter2();

    }

    var k = 0;
    var txt3 = 'TECHNOLOGY USED'; /* The text */
    var speed3 = 350; /* The speed/duration of the effect in milliseconds */
    var pause3 = new Boolean(true);
    function typeWriter3() {
      if (k < txt3.length) {
        document.getElementById("tech_title").innerHTML += txt3.charAt(k);
        k++;
        setTimeout(typeWriter3, speed3);
      } else {
        if (pause3) {
          setTimeout(typeWriter3, 1000);
          pause3 = false;
        } else { // after pause
          k = 0
          document.getElementById("tech_title").innerHTML = txt3.charAt(k);
          k++;
          setTimeout(typeWriter3, speed3);
          pause3 = true;
        }
      }
    }
    function init() {
      typeWriter1();
      typeWriter2();
      typeWriter3();
    }
