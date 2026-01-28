fetch('student-score.json')
    .then(response => response.json())
    .then(data => intiCard(data))
    .catch(err => console.log('err', err));

function intiCard(data) {
    const body = document.querySelector('body');
    const main = document.createElement('main');
    main.style.display = 'grid';
    const dataLen = Object.keys(data).length;
    main.style.gridTemplateColumns = `repeat(4, 1fr)`;
    main.style.gridTemplateRows = `repeat(${Math.ceil(dataLen / 4)}, 1fr)`;
    main.style.justifyItems = `center`;
    main.style.marginBottom = `2vh`;
    main.style.marginTop = `2vh`;
    main.style.rowGap = `10px`;

    data.forEach((element, index) => {
        const art = document.createElement('article');
        art.style.width = `18vw`;
        art.style.height = `45vh`;
        art.style.border = `1px solid #eeeeee`;
        art.style.borderRadius = `20px`;
        art.style.boxShadow = `1px 1px 1px 1px #b8b8b8`;
        art.style.padding = `40px`;
        art.style.display = `flex`;
        art.style.flexDirection = `column`;

        const gender = element.gender;
        let imgSrc = "";
        if (gender[0].toLowerCase() === "m") {
            imgSrc = "img_male.png";
        }
        else {
            imgSrc = "img_female.png"
        }

        const imgWrapper = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute("class", "profile-img");
        img.setAttribute("src", `${imgSrc}`);
        imgWrapper.style.width = `100%`;
        imgWrapper.style.height = `100%`;
        imgWrapper.style.borderRadius = `10px`;
        img.style.borderRadius = `10px`;
        img.style.objectFit = `contain`;
        img.style.width = `100%`;
        img.style.height = `100%`;

        imgWrapper.appendChild(img);

        const mainContext = document.createElement('div');
        mainContext.setAttribute("class", "content");

        const Name = document.createElement('h2');
        const nameText = document.createTextNode(`${index + 1}. ${element.name}`);
        Name.appendChild(nameText);
        Name.style.marginBottom = `5px`;
        Name.style.marginTop = `5px`;
        mainContext.appendChild(Name);

        for (let i = 2; i < Object.keys(element).length; i++) {
            const score = document.createElement('p');
            const key = Object.keys(element)[i];
            score.appendChild(document.createTextNode(
                `${key[0].toUpperCase()}${key.slice(1).toLowerCase()}: ${element[key]}`
            ));
            score.style.marginBottom = `10px`;
            mainContext.appendChild(score);
        }

        art.appendChild(imgWrapper);
        art.appendChild(mainContext);
        main.appendChild(art);
    });
    body.append(main);
}