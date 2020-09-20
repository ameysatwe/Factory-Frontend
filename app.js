const ulList = document.getElementById("status");

const url = "http://localhost:5000/status";

var mno = [];
for (let i = 0; i < 10; i++) {
  mno.push(i);
}

mno.forEach((mno) => {
  axios.get(url + `/${mno}`).then((res) => {
    var li = document.createElement("p");
    if (res.data["code"] == "ON") {
      li.classList.add("onClass");
    } else if (res.data["code"] == "OFF") {
      li.classList.remove("onClass");
    }
    li.innerHTML += `Status of Machine ${res.data["no"]} is ${res.data["code"]}<br>`;
    li.classList.add("list-menu-item;title");
    ulList.appendChild(li);
  });
});
