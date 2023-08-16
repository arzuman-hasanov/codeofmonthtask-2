const url = "https://countryapi.io/api/all";
const apiKey = "VTrqSDezSLqGoZFzWzvPpwpdBwETZ57bDXwL7ccx";

const container = document.querySelector(".container");
const tbody = document.querySelector("tbody");

fetch(`${url}?apikey=${apiKey}`)
  .then((res) => res.json())
  .then((data) => {

    for (let i = 0; i < 250; i++) {
      if (data[Object.keys(data)[i]].name !== "Armenia") {
        const tr = document.createElement("tr");

        tr.innerHTML = `
          <td>
            <img src=${data[Object.keys(data)[i]].flag.large}  alt="flag"/>
          </td>
          <td>${data[Object.keys(data)[i]].name}</td>
          <td>${data[Object.keys(data)[i]].population}</td>

          <td>${data[Object.keys(data)[i]].capital}</td>
          <td>${
            data[Object.keys(data)[i]].currencies[
              Object.keys(data[Object.keys(data)[i]].currencies)[0]
            ].name
          }</td>
          <td>${data[Object.keys(data)[i]].region}</td>
        `;

        tbody.appendChild(tr);
      }
    }
  });
  
table.appendChild(tbody);
