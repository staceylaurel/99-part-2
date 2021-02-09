///Friends from 99-Lines-of-Code project
let friends = ["Tony", "Bruce", "Steve", "Natasha", "Wanda"];

///Sing! button on HTML button
document.getElementsByClassName("btn")[0].addEventListener("click", function () {
    
    friends.forEach((friend) => {
      ///div for friends and h3 containing friends
      const div = document.createElement("div");
      const heading = document.createElement("h3");
      document.body.appendChild(div);
      div.className = "friend";
      const headingText = document.createTextNode(friend.toUpperCase());
      heading.appendChild(headingText);
      div.appendChild(heading);
      ///(p) for the song lyrics, including friends
      for (let j = 99; j > 0; j--) {
        const p = document.createElement("p");
        if (j === 1) {
          p.textContent =
            j +
            " line of code in the file, " +
            j +
            " line of code; " +
            friend +
            " strikes one out, clears it all out, no more lines of code in the file";
        } else if (j == 2) {
          p.textContent =
            j +
            " lines of code in the file, " +
            j +
            " lines of code; " +
            friend +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " line of code in the file";
        } else {
          p.textContent =
            j +
            " lines of code in the file, " +
            j +
            " lines of code; " +
            friend +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " lines of code in the file";
        }
        div.appendChild(p);
      }
    });
  });