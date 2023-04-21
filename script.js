// function cssChange() {
//   document.querySelector("body").style.paddingTop = "50px";
//   setTimeout(function () {
//     document.querySelector("h1").textContent = "Lets Play...";
//   }, 1600);
//   document.querySelector("#nameBarContainer").style.cssText =
//     "justify-content: space-between; padding: 80px 50px 0";
//   document.querySelector("#playButton").style.cssText = "  top: 300px;";
//   setTimeout(function () {
//     document.querySelector("#playButton").innerHTML = "RESULT..";
//   }, 1600);
//   document.querySelector("#firstPlayerCards").style.cssText = "left: 0px;";
//   document.querySelector("#secondPlayerCards").style.cssText = "right: 0px;";
// }

heading = document.querySelector("h1");
firstInput = document.querySelector("#leftLabelNameContainer");
secondInput = document.querySelector("#rightLabelNameContainer");
playBtn = document.querySelector("#playButton");
player1cards = document.querySelectorAll(".player_1");
player2cards = document.querySelectorAll(".player_2");
console.log(player1cards);

gsap.fromTo(heading, { y: -50 }, { duration: 1.5, autoAlpha: 1, y: 0 });
gsap.fromTo(firstInput, { x: -50 }, { duration: 1.5, autoAlpha: 1, x: 0 });
gsap.fromTo(secondInput, { x: 50 }, { duration: 1.5, autoAlpha: 1, x: 0 });
gsap.fromTo(playBtn, { y: 50 }, { duration: 1.5, autoAlpha: 1, y: 0 });
//

// animation to be done when button is clicked

//

function cssChange() {
  gsap.to(heading, { y: -80, duration: 1.5, scale: 1.3 });
  gsap.to(secondInput, { x: "25vw", duration: 1.5, y: -70, scale: 0.9 });
  gsap.to(firstInput, { x: "-25vw", duration: 1.5, y: -70, scale: 0.9 });
  gsap.to(playBtn, { y: 250, duration: 1.5, scale: 1.1 });
  gsap.to(player1cards, {
    y: -80,
    x: 50,
    duration: 1.5,
    autoAlpha: 1,
    stagger: { each: 0.5, from: "end" },
  });
  gsap.to(player2cards, {
    y: -80,
    x: -50,
    duration: 1.5,
    autoAlpha: 1,
    stagger: { each: 0.5 },
  });
}
//

//

//
function initialSamplePhoto(idName) {
  let storeName = document.getElementById(idName);
  storeName.src = "./sample.jpg";
  storeName.style.height = "200px";
}
initialSamplePhoto(1.1);
initialSamplePhoto(1.2);
initialSamplePhoto(1.3);
initialSamplePhoto(2.1);
initialSamplePhoto(2.2);
initialSamplePhoto(2.3);

let p = new Array(6);
let a = new Array(6);

function pathRandomValue() {
  p[0] = Math.floor(Math.random() * 4 + 1);
  p[1] = Math.floor(Math.random() * 4 + 1);
  p[2] = Math.floor(Math.random() * 4 + 1);
  p[3] = Math.floor(Math.random() * 4 + 1);
  p[4] = Math.floor(Math.random() * 4 + 1);
  p[5] = Math.floor(Math.random() * 4 + 1);
}
function cardRandomValue() {
  a[0] = Math.floor(Math.random() * 13 + 2);
  a[1] = Math.floor(Math.random() * 13 + 2);
  a[2] = Math.floor(Math.random() * 13 + 2);
  a[3] = Math.floor(Math.random() * 13 + 2);
  a[4] = Math.floor(Math.random() * 13 + 2);
  a[5] = Math.floor(Math.random() * 13 + 2);
  diffCardCheck();
}

// checking if all cards are different or not

function diffCardCheck() {
  for (let m = 0; m < 6; m++) {
    for (let n = m + 1; n < 6; n++) {
      if (p[m] == p[n] && a[m] == a[n]) {
        console.log(p[m] + "  " + p[n] + "  " + a[m] + "  " + a[n]);
        console.log("the funciton different card is called");
        pathRandomValue();
        cardRandomValue();
      }
    }
  }
}
// calling the random funcitons

pathRandomValue();
cardRandomValue();
diffCardCheck();

function mainBrain(a, b, c, d, e, f, p, q, r, s, t, u) {
  if (a == b && a == c && d == e && e == f) {
    if (a > d) {
      return "Player 1 have won";
    } else {
      return "Player 2 have won";
    }
  } else if (a == b && a == c) {
    return "Player 1 have won";
  } else if (d == e && d == f) {
    return "Player 2 have won";
  }

  //run all start

  if (p == q && p == r && s == t && t == u) {
    if (
      a > b &&
      a > c &&
      ((a == b + 1 && a == c + 2) || (a == c + 1 && a == b + 2))
    ) {
      if (
        d > e &&
        d > f &&
        ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
        a > d
      ) {
        return "Player 1 have won";
      } else if (
        d > e &&
        d > f &&
        ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
        d > a
      ) {
        return "Player 2 have won";
      } else if (
        e > d &&
        e > f &&
        ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
        a > e
      ) {
        return "Player 1 have won";
      } else if (
        e > d &&
        e > f &&
        ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
        e > a
      ) {
        return "Player 2 have won";
      } else if (
        f > d &&
        f > e &&
        ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
        a > f
      ) {
        return "Player 1 have won";
      } else if (
        f > d &&
        f > e &&
        ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
        f > a
      ) {
        return "Player 2 have won";
      } else {
        return "Player 1 have won";
      }
    } else if (
      b > a &&
      b > c &&
      ((b == a + 1 && b == c + 2) || (b == c + 1 && b == a + 2))
    ) {
      if (
        d > e &&
        d > f &&
        ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
        b > d
      ) {
        return "Player 1 have won";
      } else if (
        d > e &&
        d > f &&
        ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
        d > b
      ) {
        return "Player 2 have won";
      } else if (
        e > d &&
        e > f &&
        ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
        b > e
      ) {
        return "Player 1 have won";
      } else if (
        e > d &&
        e > f &&
        ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
        e > b
      ) {
        return "Player 2 have won";
      } else if (
        f > d &&
        f > e &&
        ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
        b > f
      ) {
        return "Player 1 have won";
      } else if (
        f > d &&
        f > e &&
        ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
        f > b
      ) {
        return "Player 2 have won";
      } else {
        return "Player 1 have won";
      }
    } else if (
      c > a &&
      c > b &&
      ((c == b + 1 && c == a + 2) || (c == a + 1 && c == b + 2))
    ) {
      if (
        d > e &&
        d > f &&
        ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
        c > d
      ) {
        return "Player 1 have won";
      } else if (
        d > e &&
        d > f &&
        ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
        d > c
      ) {
        return "Player 2 have won";
      } else if (
        e > d &&
        e > f &&
        ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
        c > e
      ) {
        return "Player 1 have won";
      } else if (
        e > d &&
        e > f &&
        ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
        e > c
      ) {
        return "Player 2 have won";
      } else if (
        f > d &&
        f > e &&
        ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
        c > f
      ) {
        return "Player 1 have won";
      } else if (
        f > d &&
        f > e &&
        ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
        f > c
      ) {
        return "Player 2 have won";
      } else {
        return "Player 1 have won";
      }
    } else if (
      (d > e && d > f && d == e + 1 && d == f + 2) ||
      (d == f + 1 && d == e + 2)
    ) {
      return "Player 2 have won";
    } else if (
      (e > d && e > f && e == d + 1 && e == f + 2) ||
      (e == f + 1 && e == d + 2)
    ) {
      return "Player 2 have won";
    } else if (
      (f > d && f > e && f == d + 1 && f == e + 2) ||
      (f == e + 1 && f == d + 2)
    ) {
      return "Player 2 have won";
    }
  }
  if (
    a > b &&
    a > c &&
    ((a == b + 1 && a == c + 2) || (a == c + 1 && a == b + 2))
  ) {
    if (
      d > e &&
      d > f &&
      ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
      a > d
    ) {
      return "Player 1 have won";
    } else if (
      d > e &&
      d > f &&
      ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
      d > a
    ) {
      return "Player 2 have won";
    } else if (
      e > d &&
      e > f &&
      ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
      a > e
    ) {
      return "Player 1 have won";
    } else if (
      e > d &&
      e > f &&
      ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
      e > a
    ) {
      return "Player 2 have won";
    } else if (
      f > d &&
      f > e &&
      ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
      a > f
    ) {
      return "Player 1 have won";
    } else if (
      f > d &&
      f > e &&
      ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
      f > a
    ) {
      return "Player 2 have won";
    } else {
      return "Player 1 have won";
    }
  } else if (
    b > a &&
    b > c &&
    ((b == a + 1 && b == c + 2) || (b == c + 1 && b == a + 2))
  ) {
    if (
      d > e &&
      d > f &&
      ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
      b > d
    ) {
      return "Player 1 have won";
    } else if (
      d > e &&
      d > f &&
      ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
      d > b
    ) {
      return "Player 2 have won";
    } else if (
      e > d &&
      e > f &&
      ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
      b > e
    ) {
      return "Player 1 have won";
    } else if (
      e > d &&
      e > f &&
      ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
      e > b
    ) {
      return "Player 2 have won";
    } else if (
      f > d &&
      f > e &&
      ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
      b > f
    ) {
      return "Player 1 have won";
    } else if (
      f > d &&
      f > e &&
      ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
      f > b
    ) {
      return "Player 2 have won";
    } else {
      return "Player 1 have won";
    }
  } else if (
    c > a &&
    c > b &&
    ((c == b + 1 && c == a + 2) || (c == a + 1 && c == b + 2))
  ) {
    if (
      d > e &&
      d > f &&
      ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
      c > d
    ) {
      return "Player 1 have won";
    } else if (
      d > e &&
      d > f &&
      ((d == e + 1 && d == f + 2) || (d == f + 1 && d == e + 2)) &&
      d > c
    ) {
      return "Player 2 have won";
    } else if (
      e > d &&
      e > f &&
      ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
      c > e
    ) {
      return "Player 1 have won";
    } else if (
      e > d &&
      e > f &&
      ((e == d + 1 && e == f + 2) || (e == f + 1 && e == d + 2)) &&
      e > c
    ) {
      return "Player 2 have won";
    } else if (
      f > d &&
      f > e &&
      ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
      c > f
    ) {
      return "Player 1 have won";
    } else if (
      f > d &&
      f > e &&
      ((f == d + 1 && f == e + 2) || (f == e + 1 && f == d + 2)) &&
      f > c
    ) {
      return "Player 2 have won";
    } else {
      return "Player 1 have won";
    }
  } else if (
    (d > e && d > f && d == e + 1 && d == f + 2) ||
    (d == f + 1 && d == e + 2)
  ) {
    return "Player 2 have won";
  } else if (
    (e > d && e > f && e == d + 1 && e == f + 2) ||
    (e == f + 1 && e == d + 2)
  ) {
    return "Player 2 have won";
  } else if (
    (f > d && f > e && f == d + 1 && f == e + 2) ||
    (f == e + 1 && f == d + 2)
  ) {
    return "Player 2 have won";
  }

  //run all close

  //color jute start

  if (p == q && p == r && s == t && t == u) {
    if (a == b) {
      if (d == e && a == d) {
        if (c == f) {
          console.log("It's a Draw");
        } else if (c > f) {
          return "Player 1 have won";
        } else if (f > c) {
          return "Player 2 have won";
        }
      } else if (d == f && a == d) {
        if (c == e) {
          console.log("It's a Draw");
        } else if (c > e) {
          return "Player 1 have won";
        } else if (e > c) {
          return "Player 2 have won";
        }
      } else if (f == e && a == f) {
        if (c == d) {
          console.log("It's a Draw");
        } else if (c > d) {
          return "Player 1 have won";
        } else if (d > c) {
          return "Player 2 have won";
        }
      } else if (d == e && a > d) {
        return "Player 1 have won";
      } else if (d == e && d > a) {
        return "Player 2 have won";
      } else if (d == f && a > d) {
        return "Player 1 have won";
      } else if (d == f && d > a) {
        return "Player 2 have won";
      } else if (e == f && a > e) {
        return "Player 1 have won";
      } else if (e == f && e > a) {
        return "Player 2 have won";
      } else {
        return "Player 1 have won";
      }
    } else if (a == c) {
      if (d == e && a == d) {
        if (b == f) {
          console.log("It's a Draw");
        } else if (b > f) {
          return "Player 1 have won";
        } else if (f > b) {
          return "Player 2 have won";
        }
      } else if (d == f && a == d) {
        if (b == e) {
          console.log("It's a Draw");
        } else if (b > e) {
          return "Player 1 have won";
        } else if (e > b) {
          return "Player 2 have won";
        }
      } else if (f == e && a == f) {
        if (b == d) {
          console.log("It's a Draw");
        } else if (b > d) {
          return "Player 1 have won";
        } else if (d > b) {
          return "Player 2 have won";
        }
      } else if (d == e && a > d) {
        return "Player 1 have won";
      } else if (d == e && d > a) {
        return "Player 2 have won";
      } else if (d == f && a > d) {
        return "Player 1 have won";
      } else if (d == f && d > a) {
        return "Player 2 have won";
      } else if (e == f && a > e) {
        return "Player 1 have won";
      } else if (e == f && e > a) {
        return "Player 2 have won";
      } else {
        return "Player 1 have won";
      }
    } else if (c == b) {
      if (d == e && c == d) {
        if (a == f) {
          console.log("It's a Draw");
        } else if (a > f) {
          return "Player 1 have won";
        } else if (f > a) {
          return "Player 2 have won";
        }
      } else if (d == f && c == d) {
        if (a == e) {
          console.log("It's a Draw");
        } else if (a > e) {
          return "Player 1 have won";
        } else if (e > a) {
          return "Player 2 have won";
        }
      } else if (f == e && c == f) {
        if (a == d) {
          console.log("It's a Draw");
        } else if (a > d) {
          return "Player 1 have won";
        } else if (d > a) {
          return "Player 2 have won";
        }
      } else if (d == e && c > d) {
        return "Player 1 have won";
      } else if (d == e && d > c) {
        return "Player 2 have won";
      } else if (d == f && c > d) {
        return "Player 1 have won";
      } else if (d == f && d > c) {
        return "Player 2 have won";
      } else if (e == f && c > e) {
        return "Player 1 have won";
      } else if (e == f && e > c) {
        return "Player 2 have won";
      } else {
        return "Player 1 have won";
      }
    } else if (d == e || d == f || e == f) {
      return "Player 2 have won";
    }

    //color jute close

    //color top start

    if (a > b && a > c) {
      if (d > e && d > f && a == d) {
        if (b > c) {
          if (e > f && b > e) {
            return "Player 1 have won";
          } else if (e > f && e > b) {
            return "Player 2 have won";
          } else if (f > e && f > b) {
            return "Player 2 have won";
          } else if (f > e && b > f) {
            return "Player 1 have won";
          }
        } else if (c > b) {
          if (e > f && c > e) {
            return "Player 1 have won";
          } else if (e > f && e > c) {
            return "Player 2 have won";
          } else if (f > e && c > f) {
            return "Player 1 have won";
          } else if (f > e && f > c) {
            return "Player 2 have won";
          }
        }
      } else if (d > e && d > f && a > d) {
        return "Player 1 have won";
      } else if (d > e && d > f && d > a) {
        return "Player 2 have won";
      } else if (e > d && e > f && a == e) {
        if (b > c) {
          if (d > f && b > d) {
            return "Player 1 have won";
          } else if (d > f && d > b) {
            return "Player 2 have won";
          } else if (f > d && b > f) {
            return "Player 1 have won";
          } else if (f > d && f > b) {
            return "Player 2 have won";
          }
        } else if (c > b) {
          if (d > f && c > d) {
            return "Player 1 have won";
          } else if (d > f && d > c) {
            return "Player 2 have won";
          } else if (f > d && c > f) {
            return "Player 1 have won";
          } else if (f > d && f > c) {
            return "Player 2 have won";
          }
        }
      } else if (e > d && e > f && a > e) {
        return "Player 1 have won";
      } else if (e > d && e > f && e > a) {
        return "Player 2 have won";
      } else if (f > e && f > d && a == f) {
        if (b > c) {
          if (d > e && b > d) {
            return "Player 1 have won";
          } else if (d > e && d > b) {
            return "Player 2 have won";
          } else if (e > d && b > e) {
            return "Player 1 have won";
          } else if (e > d && e > b) {
            return "Player 2 have won";
          }
        } else if (c > b) {
          if (d > e && c > d) {
            return "Player 1 have won";
          } else if (d > e && d > c) {
            return "Player 2 have won";
          } else if (e > d && c > e) {
            return "Player 1 have won";
          } else if (e > d && e > c) {
            return "Player 2 have won";
          }
        }
      } else if (f > e && f > d && a > f) {
        return "Player 1 have won";
      } else if (f > e && f > d && f > a) {
        return "Player 2 have won";
      }

      //second
    } else if (b > a && b > c) {
      if (d > e && d > f && b == d) {
        if (a > c) {
          if (e > f && a > e) {
            return "Player 1 have won";
          } else if (e > f && e > a) {
            return "Player 2 have won";
          } else if (f > e && a > f) {
            return "Player 1 have won";
          } else if (f > e && f > a) {
            return "Player 2 have won";
          }
        } else if (c > a) {
          if (e > f && c > e) {
            return "Player 1 have won";
          } else if (e > f && e > c) {
            return "Player 2 have won";
          } else if (f > e && c > f) {
            return "Player 1 have won";
          } else if (f > e && f > c) {
            return "Player 2 have won";
          }
        }
      } else if (d > e && d > f && b > d) {
        return "Player 1 have won";
      } else if (d > e && d > f && d > b) {
        return "Player 2 have won";
      } else if (e > d && e > f && b == e) {
        if (a > c) {
          if (d > f && a > d) {
            return "Player 1 have won";
          } else if (d > f && d > a) {
            return "Player 2 have won";
          } else if (f > d && a > f) {
            return "Player 1 have won";
          } else if (f > d && f > a) {
            return "Player 2 have won";
          }
        } else if (c > a) {
          if (d > f && c > d) {
            return "Player 1 have won";
          } else if (d > f && d > c) {
            return "Player 2 have won";
          } else if (f > d && c > f) {
            return "Player 1 have won";
          } else if (d > f && f > c) {
            return "Player 2 have won";
          }
        }
      } else if (e > d && e > f && b > e) {
        return "Player 1 have won";
      } else if (e > d && e > f && e > b) {
        return "Player 2 have won";
      } else if (f > e && f > d && b == f) {
        if (a > c) {
          if (d > e && a > d) {
            return "Player 1 have won";
          } else if (d > e && d > a) {
            return "Player 2 have won";
          } else if (e > d && a > e) {
            return "Player 1 have won";
          } else if (e > d && e > a) {
            return "Player 2 have won";
          }
        } else if (c > a) {
          if (d > e && c > d) {
            return "Player 1 have won";
          } else if (d > e && d > c) {
            return "Player 2 have won";
          } else if (e > d && c > e) {
            return "Player 1 have won";
          } else if (e > d && e > c) {
            return "Player 2 have won";
          }
        }
      } else if (f > e && f > d && b > f) {
        return "Player 1 have won";
      } else if (f > e && f > d && f > b) {
        return "Player 2 have won";
      }

      //third
    } else if (c > b && c > a) {
      if (d > e && d > f && c == d) {
        if (a > b) {
          if (e > f && a > e) {
            return "Player 1 have won";
          } else if (e > f && e > a) {
            return "Player 2 have won";
          } else if (f > e && a > f) {
            return "Player 1 have won";
          } else if (f > e && f > a) {
            return "Player 2 have won";
          }
        } else if (b > a) {
          if (e > f && b > e) {
            return "Player 1 have won";
          } else if (e > f && e > b) {
            return "Player 2 have won";
          } else if (f > e && b > f) {
            return "Player 1 have won";
          } else if (f > e && f > b) {
            return "Player 2 have won";
          }
        }
      } else if (d > e && d > f && c > d) {
        return "Player 1 have won";
      } else if (d > e && d > f && d > c) {
        return "Player 2 have won";
      } else if (e > d && e > f && c == e) {
        if (a > b) {
          if (d > f && a > d) {
            return "Player 1 have won";
          } else if (d > f && d > a) {
            return "Player 2 have won";
          } else if (f > d && a > f) {
            return "Player 1 have won";
          } else if (f > d && f > a) {
            return "Player 2 have won";
          }
        } else if (b > a) {
          if (d > f && b > d) {
            return "Player 1 have won";
          } else if (d > f && d > b) {
            return "Player 2 have won";
          } else if (f > d && b > f) {
            return "Player 1 have won";
          } else if (f > d && f > b) {
            return "Player 2 have won";
          }
        }
      } else if (e > d && e > f && c > e) {
        return "Player 1 have won";
      } else if (e > d && e > f && e > c) {
        return "Player 2 have won";
      } else if (f > e && f > d && c == f) {
        if (a > b) {
          if (d > e && a > d) {
            return "Player 1 have won";
          } else if (d > e && d > a) {
            return "Player 2 have won";
          } else if (e > d && a > e) {
            return "Player 1 have won";
          } else if (e > d && e > a) {
            return "Player 2 have won";
          }
        } else if (b > a) {
          if (d > e && b > d) {
            return "Player 1 have won";
          } else if (d > e && d > b) {
            return "Player 2 have won";
          } else if (e > d && b > e) {
            return "Player 1 have won";
          } else if (e > d && e > b) {
            return "Player 2 have won";
          }
        }
      } else if (f > e && f > d && c > f) {
        return "Player 1 have won";
      } else if (f > e && f > d && f > c) {
        return "Player 2 have won";
      }
    }
  }

  //jute start

  if (a == b) {
    if (d == e && a == d) {
      if (c == f) {
        console.log("It's a Draw");
      } else if (c > f) {
        return "Player 1 have won";
      } else if (f > c) {
        return "Player 2 have won";
      }
    } else if (d == f && a == d) {
      if (c == e) {
        console.log("It's a Draw");
      } else if (c > e) {
        return "Player 1 have won";
      } else if (e > c) {
        return "Player 2 have won";
      }
    } else if (f == e && a == f) {
      if (c == d) {
        console.log("It's a Draw");
      } else if (c > d) {
        return "Player 1 have won";
      } else if (d > c) {
        return "Player 2 have won";
      }
    } else if (d == e && a > d) {
      return "Player 1 have won";
    } else if (d == e && d > a) {
      return "Player 2 have won";
    } else if (d == f && a > d) {
      return "Player 1 have won";
    } else if (d == f && d > a) {
      return "Player 2 have won";
    } else if (e == f && a > e) {
      return "Player 1 have won";
    } else if (e == f && e > a) {
      return "Player 2 have won";
    } else {
      return "Player 1 have won";
    }
  } else if (a == c) {
    if (d == e && a == d) {
      if (b == f) {
        console.log("It's a Draw");
      } else if (b > f) {
        return "Player 1 have won";
      } else if (f > b) {
        return "Player 2 have won";
      }
    } else if (d == f && a == d) {
      if (b == e) {
        console.log("It's a Draw");
      } else if (b > e) {
        return "Player 1 have won";
      } else if (e > b) {
        return "Player 2 have won";
      }
    } else if (f == e && a == f) {
      if (b == d) {
        console.log("It's a Draw");
      } else if (b > d) {
        return "Player 1 have won";
      } else if (d > b) {
        return "Player 2 have won";
      }
    } else if (d == e && a > d) {
      return "Player 1 have won";
    } else if (d == e && d > a) {
      return "Player 2 have won";
    } else if (d == f && a > d) {
      return "Player 1 have won";
    } else if (d == f && d > a) {
      return "Player 2 have won";
    } else if (e == f && a > e) {
      return "Player 1 have won";
    } else if (e == f && e > a) {
      return "Player 2 have won";
    } else {
      return "Player 1 have won";
    }
  } else if (c == b) {
    if (d == e && c == d) {
      if (a == f) {
        console.log("It's a Draw");
      } else if (a > f) {
        return "Player 1 have won";
      } else if (f > a) {
        return "Player 2 have won";
      }
    } else if (d == f && c == d) {
      if (a == e) {
        console.log("It's a Draw");
      } else if (a > e) {
        return "Player 1 have won";
      } else if (e > a) {
        return "Player 2 have won";
      }
    } else if (f == e && c == f) {
      if (a == d) {
        console.log("It's a Draw");
      } else if (a > d) {
        return "Player 1 have won";
      } else if (d > a) {
        return "Player 2 have won";
      }
    } else if (d == e && c > d) {
      return "Player 1 have won";
    } else if (d == e && d > c) {
      return "Player 2 have won";
    } else if (d == f && c > d) {
      return "Player 1 have won";
    } else if (d == f && d > c) {
      return "Player 2 have won";
    } else if (e == f && c > e) {
      return "Player 1 have won";
    } else if (e == f && e > c) {
      return "Player 2 have won";
    } else {
      return "Player 1 have won";
    }
  } else if (d == e || d == f || e == f) {
    return "Player 2 have won";
  }

  // top start

  if (a > b && a > c) {
    if (d > e && d > f && a == d) {
      if (b > c) {
        if (e > f && b > e) {
          return "Player 1 have won";
        } else if (e > f && e > b) {
          return "Player 2 have won";
        } else if (f > e && f > b) {
          return "Player 2 have won";
        } else if (f > e && b > f) {
          return "Player 1 have won";
        }
      } else if (c > b) {
        if (e > f && c > e) {
          return "Player 1 have won";
        } else if (e > f && e > c) {
          return "Player 2 have won";
        } else if (f > e && c > f) {
          return "Player 1 have won";
        } else if (f > e && f > c) {
          return "Player 2 have won";
        }
      }
    } else if (d > e && d > f && a > d) {
      return "Player 1 have won";
    } else if (d > e && d > f && d > a) {
      return "Player 2 have won";
    } else if (e > d && e > f && a == e) {
      if (b > c) {
        if (d > f && b > d) {
          return "Player 1 have won";
        } else if (d > f && d > b) {
          return "Player 2 have won";
        } else if (f > d && b > f) {
          return "Player 1 have won";
        } else if (f > d && f > b) {
          return "Player 2 have won";
        }
      } else if (c > b) {
        if (d > f && c > d) {
          return "Player 1 have won";
        } else if (d > f && d > c) {
          return "Player 2 have won";
        } else if (f > d && c > f) {
          return "Player 1 have won";
        } else if (f > d && f > c) {
          return "Player 2 have won";
        }
      }
    } else if (e > d && e > f && a > e) {
      return "Player 1 have won";
    } else if (e > d && e > f && e > a) {
      return "Player 2 have won";
    } else if (f > e && f > d && a == f) {
      if (b > c) {
        if (d > e && b > d) {
          return "Player 1 have won";
        } else if (d > e && d > b) {
          return "Player 2 have won";
        } else if (e > d && b > e) {
          return "Player 1 have won";
        } else if (e > d && e > b) {
          return "Player 2 have won";
        }
      } else if (c > b) {
        if (d > e && c > d) {
          return "Player 1 have won";
        } else if (d > e && d > c) {
          return "Player 2 have won";
        } else if (e > d && c > e) {
          return "Player 1 have won";
        } else if (e > d && e > c) {
          return "Player 2 have won";
        }
      }
    } else if (f > e && f > d && a > f) {
      return "Player 1 have won";
    } else if (f > e && f > d && f > a) {
      return "Player 2 have won";
    }

    //second
  } else if (b > a && b > c) {
    if (d > e && d > f && b == d) {
      if (a > c) {
        if (e > f && a > e) {
          return "Player 1 have won";
        } else if (e > f && e > a) {
          return "Player 2 have won";
        } else if (f > e && a > f) {
          return "Player 1 have won";
        } else if (f > e && f > a) {
          return "Player 2 have won";
        }
      } else if (c > a) {
        if (e > f && c > e) {
          return "Player 1 have won";
        } else if (e > f && e > c) {
          return "Player 2 have won";
        } else if (f > e && c > f) {
          return "Player 1 have won";
        } else if (f > e && f > c) {
          return "Player 2 have won";
        }
      }
    } else if (d > e && d > f && b > d) {
      return "Player 1 have won";
    } else if (d > e && d > f && d > b) {
      return "Player 2 have won";
    } else if (e > d && e > f && c == e) {
      if (a > c) {
        if (d > f && a > d) {
          return "Player 1 have won";
        } else if (d > f && d > a) {
          return "Player 2 have won";
        } else if (f > d && a > f) {
          return "Player 1 have won";
        } else if (f > d && f > a) {
          return "Player 2 have won";
        }
      } else if (c > a) {
        if (d > f && c > d) {
          return "Player 1 have won";
        } else if (d > f && d > c) {
          return "Player 2 have won";
        } else if (f > d && c > f) {
          return "Player 1 have won";
        } else if (d > f && f > c) {
          return "Player 2 have won";
        }
      }
    } else if (e > d && e > f && b > e) {
      return "Player 1 have won";
    } else if (e > d && e > f && e > b) {
      return "Player 2 have won";
    } else if (f > e && f > d && b == f) {
      if (a > c) {
        if (d > e && a > d) {
          return "Player 1 have won";
        } else if (d > e && d > a) {
          return "Player 2 have won";
        } else if (e > d && a > e) {
          return "Player 1 have won";
        } else if (e > d && e > a) {
          return "Player 2 have won";
        }
      } else if (c > a) {
        if (d > e && c > d) {
          return "Player 1 have won";
        } else if (d > e && d > c) {
          return "Player 2 have won";
        } else if (e > d && c > e) {
          return "Player 1 have won";
        } else if (e > d && e > c) {
          return "Player 2 have won";
        }
      }
    } else if (f > e && f > d && b > f) {
      return "Player 1 have won";
    } else if (f > e && f > d && f > b) {
      return "Player 2 have won";
    }

    //third
  } else if (c > b && c > a) {
    if (d > e && d > f && c == d) {
      if (a > b) {
        if (e > f && a > e) {
          return "Player 1 have won";
        } else if (e > f && e > a) {
          return "Player 2 have won";
        } else if (f > e && a > f) {
          return "Player 1 have won";
        } else if (f > e && f > a) {
          return "Player 2 have won";
        }
      } else if (b > a) {
        if (e > f && b > e) {
          return "Player 1 have won";
        } else if (e > f && e > b) {
          return "Player 2 have won";
        } else if (f > e && b > f) {
          return "Player 1 have won";
        } else if (f > e && f > b) {
          return "Player 2 have won";
        }
      }
    } else if (d > e && d > f && c > d) {
      return "Player 1 have won";
    } else if (d > e && d > f && d > c) {
      return "Player 2 have won";
    } else if (e > d && e > f && c == e) {
      if (a > b) {
        if (d > f && a > d) {
          return "Player 1 have won";
        } else if (d > f && d > a) {
          return "Player 2 have won";
        } else if (f > d && a > f) {
          return "Player 1 have won";
        } else if (f > d && f > a) {
          return "Player 2 have won";
        }
      } else if (b > a) {
        if (d > f && b > d) {
          return "Player 1 have won";
        } else if (d > f && d > b) {
          return "Player 2 have won";
        } else if (f > d && b > f) {
          return "Player 1 have won";
        } else if (f > d && f > b) {
          return "Player 2 have won";
        }
      }
    } else if (e > d && e > f && c > e) {
      return "Player 1 have won";
    } else if (e > d && e > f && e > c) {
      return "Player 2 have won";
    } else if (f > e && f > d && c == f) {
      if (a > b) {
        if (d > e && a > d) {
          return "Player 1 have won";
        } else if (d > e && d > a) {
          return "Player 2 have won";
        } else if (e > d && a > e) {
          return "Player 1 have won";
        } else if (e > d && e > a) {
          return "Player 2 have won";
        }
      } else if (b > a) {
        if (d > e && b > d) {
          return "Player 1 have won";
        } else if (d > e && d > b) {
          return "Player 2 have won";
        } else if (e > d && b > e) {
          return "Player 1 have won";
        } else if (e > d && e > b) {
          return "Player 2 have won";
        }
      }
    } else if (f > e && f > d && c > f) {
      return "Player 1 have won";
    } else if (f > e && f > d && f > c) {
      return "Player 2 have won";
    }
  }
}

function showResult() {
  let o = mainBrain(
    a[0],
    a[1],
    a[2],
    a[3],
    a[4],
    a[5],
    p[0],
    p[1],
    p[2],
    p[3],
    p[4],
    p[5]
  );
  let player1Name = document.querySelector("#firstPlayerName").value;
  let player2Name = document.querySelector("#secondPlayerName").value;
  if (o == "Player 1 have won") {
    document.querySelector("#playButton").innerHTML = player1Name + " have WON";
  } else if (o == "Player 2 have won") {
    document.querySelector("#playButton").innerHTML = player2Name + " have WON";
  }
}

// fucntion of showing the randomly generated cards

let count = 0;

function changePathOfPhoto(idName, newPath, cardValue) {
  let storeName = document.getElementById(idName);
  storeName.src = "./" + newPath + "/" + cardValue + ".jpg";
  storeName.style.height = "200px";
  count++;
  if (count == 6) {
    showResult();
  }
}
