const title = document.createElement("h1");
title.textContent = "Dog Image Generator";
document.body.append(title);

title.style.color = "#240046";
title.style.textAlign = "center";
title.style.fontFamily = "system-ui";



const dogImgBtn = document.createElement("button");
dogImgBtn.textContent = "Hit me!";
title.after(dogImgBtn);

dogImgBtn.style.color = "#ffd6ff";
dogImgBtn.style.backgroundColor = "#643df1";
dogImgBtn.style.fontWeight = "bold"
dogImgBtn.style.fontSize = "large";
dogImgBtn.style.width = "100px";
dogImgBtn.style.height = "60px"
dogImgBtn.style.display = "block";
dogImgBtn.style.margin = "90px auto 40px auto";
dogImgBtn.style.borderRadius = "5px";
dogImgBtn.style.borderWidth = "medium";
dogImgBtn.style.borderColor = "#240046";



const dogImg = document.createElement("img");
dogImg.src = "";
dogImgBtn.after(dogImg);

dogImg.style.display = "block";
dogImg.style.margin = "40px auto";
dogImg.style.width = "400px";
dogImg.style.height = "400px";



document.body.style.backgroundColor = "#cdb4db";



async function dogImgGenerator() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
            throw new Error(`HTTP Error! ${response.status}`);
        }
        const data = await response.json();
        dogImg.src = data.message;
    } catch(error) {
        console.error(`Network error. Try again. ${error}`);

    }
}

dogImgBtn.addEventListener("click", dogImgGenerator);

