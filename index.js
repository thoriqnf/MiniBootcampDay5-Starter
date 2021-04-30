let listExperience = document.querySelector("#listExperience");

let dataExperience = [
  {
    title: "Mentor",
    desc: "ngajar",
  },
];
const addExperience = (event) => {
  event.preventDefault();

  let messageTitle = prompt("Tambahkan pekerjaan anda");
  let messageDesc = prompt("Tambahkan deskripsi pekerjaan anda");

  let newData = {
    title: messageTitle,
    desc: messageDesc,
  };

  dataExperience.push(newData);

  newData = {
    title: "",
    desc: "",
  };

  dataExperience.map((item) => {
    let displayList = document.createElement("li");
    let displayTitle = document.createElement("p");

    // tampilkan <p></p>
    displayTitle.innerHTML = `<p class="tags">${item.title}<br /><span>${item.desc} </span><span>January, 2019 - now</span></span></p>`;
    displayList.appendChild(displayTitle);
    listExperience.appendChild(displayList);
  });
};
