import data from "./scrims/scrims.json" assert { type: "json" };

// document.getElementById("content").innerText = JSON.stringify(data);

console.log(data);

var html = "";

for (var date of data) {

    html += `<h3>${date["date"]}</h3>`;

    for (var map of date["matches"]) {

        html += `<h4>${map["map"]}</h4>`;

        for (var log in map["logs"]) {

            html += `<h5><a href="https://logs.tf/${map["logs"][log]}">Logs</a>&nbsp;&nbsp;&nbsp;&nbsp;`;

            html += `<a href="https://demos.tf/${map["demos"][log]}">Demos</a></h5>`;

        }

    }

}

document.getElementById("scrims").innerHTML = html;