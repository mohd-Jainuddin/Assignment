let td = Array.from(document.querySelectorAll("td"));
let continueBtn = document.querySelector("#click");
let count = 0;
let colorChange = "";

td.map((e) => {
  e.addEventListener("click", () => {
    if (count) {
      colorChange.style.backgroundColor = "white";
      colorChange.style.color = "black";
      e.style.backgroundColor = "green";
      e.style.color = "white";
      colorChange = e;
    } else {
      e.style.backgroundColor = "green";
      e.style.color = "white";
      count = 1;
      colorChange = e;
      continueBtn.classList.add("btn");
      continueBtn.removeAttribute("disabled");
    }
  });
});

let firstDate = document.getElementById("firstDate");
let secondDate = document.getElementById("secondDate");
let thirdDate = document.getElementById("thirdDate");
let tableData = document.getElementById("tableData");



firstDate.addEventListener("click", () => {
  colorChange = "";
  count = 0;
  secondDate.classList.remove("active");
  thirdDate.classList.remove("active");
  firstDate.classList.add("active");
  tableData.innerHTML = `<table border="1">
          <tr>
            <td id="fourth">10:45 AM</td>
            <td id="five">11:00 AM</td>
            <td id="six">11:15 AM</td>
          </tr>
          <tr>
            <td id="fourth">10:45 AM</td>
            <td id="five">11:00 AM</td>
            <td id="six">11:15 AM</td>
          </tr>
          <tr>
            <td id="seven">11:30 AM</td>
            <td id="eight">11:45 AM</td>
          </tr>
        </table>
        <a href="otp.html">
          <button class="continue" disabled id="click">CONTINUE</button>
        </a>`;

  let td = Array.from(document.querySelectorAll("td"));
  let continueBtn = document.querySelector("#click");

  td.map((e) => {
    e.addEventListener("click", () => {
      if (count) {
        colorChange.style.backgroundColor = "white";
        colorChange.style.color = "black";
        e.style.backgroundColor = "green";
        e.style.color = "white";
        colorChange = e;        
      } else {
        e.style.backgroundColor = "green";
        e.style.color = "white";
        count = 1;
        colorChange = e;
        continueBtn.classList.add("btn");
        continueBtn.removeAttribute("disabled");
      }
    });
  });
});

secondDate.addEventListener("click", () => {
  colorChange = "";
  count = 0;
  firstDate.classList.remove("active");
  thirdDate.classList.remove("active");
  secondDate.classList.add("active");
  tableData.innerHTML = `<table border="1">
          <tr>
            <td id="fourth">10:45 AM</td>
            <td id="five">11:00 AM</td>
            <td id="six">11:15 AM</td>
          </tr>
          <tr>
            <td id="seven">11:30 AM</td>
            <td id="eight">11:45 AM</td>
          </tr>
        </table>
        <a href="otp.html">
          <button class="continue" disabled id="click">CONTINUE</button>
        </a>`;

  let td = Array.from(document.querySelectorAll("td"));
  let continueBtn = document.querySelector("#click");

  td.map((e) => {
    e.addEventListener("click", () => {
      if (count) {
        colorChange.style.backgroundColor = "white";
        colorChange.style.color = "black";
        e.style.backgroundColor = "green";
        e.style.color = "white";
        colorChange = e;
      } else {
        e.style.backgroundColor = "green";
        e.style.color = "white";
        count = 1;
        colorChange = e;
        continueBtn.classList.add("btn");
        continueBtn.removeAttribute("disabled");
      }
    });
  });
});

thirdDate.addEventListener("click", () => {
  colorChange = "";
  count = 0;
  secondDate.classList.remove("active");
  firstDate.classList.remove("active");
  thirdDate.classList.add("active");
  tableData.innerHTML = `<table border="1">
          <tr>
            <td id="fourth">10:45 AM</td>
            <td id="five">11:00 AM</td>
            <td id="six">11:15 AM</td>
          </tr>
          <tr>
            <td id="seven">11:30 AM</td>
            <td id="eight">11:45 AM</td>
            <td id="eight">12:00 AM</td>
          </tr>
          <tr>
            <td id="eight">12:00 AM</td>
          </tr>
        </table>
        <a href="otp.html">
          <button class="continue" disabled id="click">CONTINUE</button>
        </a>`;

  let td = Array.from(document.querySelectorAll("td"));
  let continueBtn = document.querySelector("#click");

  td.map((e) => {
    e.addEventListener("click", () => {
      if (count) {
        colorChange.style.backgroundColor = "white";
        colorChange.style.color = "black";
        e.style.backgroundColor = "green";
        e.style.color = "white";
        colorChange = e;
      } else {
        e.style.backgroundColor = "green";
        e.style.color = "white";
        count = 1;
        colorChange = e;
        continueBtn.classList.add("btn");
        continueBtn.removeAttribute("disabled");
      }
    });
  });
});

