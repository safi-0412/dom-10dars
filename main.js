// const userName = prompt("Ism kiriting")
// const newTag = document.createElement("h1")
// newTag.textContent = userName;
// newTag.style.background = "red";
// newTag.style.color = "white";
// newTag.style.alignItems = "center";

// const userBg = prompt("Rang kirirting")
// const userWid = prompt("Shirina kirirting")
// const userHey = prompt("Visota kirirting")
// const newTag = document.createElement("div")
// newTag.style.width = `${userWid}px`;
// newTag.style.height = `${userHey}px`;
// newTag.style.background = `${userBg}px`;
// document.body.append(newTag);

// const botlar = [
//     {
//       ism: "Safina",
//       familiya: "Bot",
//       yosh: 19,
//       tugilgan_yil: 2002,
//       turi: "chirigan"
//     },
//     {
//       ism: "Sitora",
//       familiya: "Bot",
//       yosh: 18,
//       tugilgan_yil: 2003,
//       turi: "chirigan"
//     },
//     {
//       ism: "Gulzoda",
//       familiya: "Bot",
//       yosh: 17,
//       tugilgan_yil: 2004,
//       turi: "chirigan"
//     },
//     {
//       ism: "Dilmuhammad",
//       familiya: "Bot",
//       yosh: 16,
//       tugilgan_yil: 2005,
//       turi: "chirigan"
//     },
//     {
//       ism: "Mahmud",
//       familiya: "Bot",
//       yosh: 15,
//       tugilgan_yil: 2006,
//       turi: "chirigan"
//     },
//     {
//       ism: "Shahzoda",
//       familiya: "Bot",
//       yosh: 14,
//       tugilgan_yil: 2007,
//       turi: "chirigan"
//     }
//   ];
  
//   const userDate = prompt("Enter your date");
//   const userAge = +prompt("enter your age");

//   botlar.forEach(objectlar => {
//     const newTag = document.createElement("h1")

    
//     if(objectlar.yosh == userAge && objectlar.tugilgan_yil == userDate){
//         newTag.textContent = objectlar.ism;
//        document.body.append(newTag) 
//     }else{
//         alert("Notogri")
//     }
//   })

const bg = prompt("Rang kiriting")
const name = prompt("Ismingizni kiriting");
const color = prompt("Color kriting")

const nameElement = document.createElement("div");
document.body.style.backgroundColor = bg;
nameElement.textContent = name;
nameElement.className = "name";
nameElement.style.color = color;
document.body.append(nameElement);
  