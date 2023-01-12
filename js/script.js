// Rad 1-5
let b = 6;
let j = (200 - 80) / (b - 1)
for (let i = 1; i < b; i++) {
    const p = document.createElement('p');
    document.body.append(p);
    console.log(40 + (i * j));
    const bigger = 5 + (i * 8);
    p.style.display = 'flex';
    p.style.flexDirection = 'column';
    p.style.justifyContent = 'center';
    p.style.background = `hsl(${80 + (i * j)}, 90%, 85%)`;
    p.style.textAlign = 'center';
    p.style.color = '#6E6EF7';
    p.style.fontSize = `${bigger}px`
    p.style.fontWeight = 'bold';
    p.style.width = '800px'
    p.style.marginLeft = `350px`;
    p.innerText = 'Rad ' + i;
}
// Arrays (Bakgrundsfärg Box 1-3 & Siffror Box 3)
const arrayFirstBackground = ['black', 'white', 'black', 'white', '#A8A8F0', 'white', 'black', 'white', 'black', 'white'];
const arraySecondBackground = ['black', 'white', 'black', 'white', 'black', 'white', 'black', 'white', '#A8A8F0', 'white'];
const arrayThirdBackground = ['black', 'white', 'black', 'white', 'black', '#A8A8F0', 'black', 'white', 'black', 'white'];
const arrayListLetters = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

// Box (Svart ram)
const container = document.createElement('container');
document.body.append(container);
container.style.display = 'flex';
container.style.justifyContent = 'space-around';
container.style.marginLeft = '350px';
container.style.padding = '2rem';
container.style.border = '1px solid black';
container.style.width = '730px';

// Box 1-3
for (let i = 0; i < 3; i++) {
    const row = document.createElement('ol');
    container.append(row);
    row.style.display = 'flex';
    row.style.flexDirection = `row`;
    row.style.border = `6px solid #A8A8F0`;
    row.style.padding = `0`
    row.style.width = '40px'
    row.style.height = '185px'

    // Box 1
    if (i == 0) {
        for (let j = 0; j < 10; j++) {
            const li = document.createElement('li');
            row.append(li);
            li.innerText = j;
            row.style.listStyleType = `none`;
            row.style.flexDirection = 'column';
            li.style.background = arrayFirstBackground[j];

            if (j % 2 == 1) {
                li.style.color = 'black';
            } else {
                li.style.color = 'white';
            }
        }
    }

    // Box 2
    else if (i == 1) {
        for (let z = 9; z > -1; z--) {
            const li = document.createElement('li');
            row.append(li);
            li.innerText = z;
            row.style.listStyleType = `none`;
            row.style.flexDirection = 'column';
            row.style.textAlign = 'center';
            li.style.background = arraySecondBackground[z];

            if (z % 2 == 1) {
                li.style.color = 'black';
            } else {
                li.style.color = 'white';
            }
        }
    }

    // Box 3
    else if (i == 2) {
        for (let v = 0; v < arrayListLetters.length; v++) {
            const li = document.createElement('li');
            row.append(li);
            li.innerText = arrayListLetters[v];
            row.style.listStyleType = `none`;
            row.style.flexDirection = 'column';
            row.style.textAlign = 'right';
            li.style.background = arrayThirdBackground[v];

            if (v % 2 == 1) {
                li.style.color = 'black';
            } else {
                li.style.color = 'white';
            }
        }
    }

    const list = document.createElement("ol");
    document.body.append(list);

    const liElements = document.querySelectorAll
        ('li');
    console.log(liElements);
}

