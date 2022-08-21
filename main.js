let text = document.querySelector('#text');
let btn = document.querySelector('#btn');

let list = document.querySelector('.list');


btn.addEventListener('click', to_do);


function to_do() {
    let text_value = text.value;
    let li = document.createElement('li');
    li.textContent = `${text_value} `;

    text.value = null;
    let done = document.createElement('input');
    done.id = "done";
    done.type = 'submit';
    done.value = 'Done';

    let remove = document.createElement('input');
    remove.id = "remove";
    remove.type = 'submit';
    remove.value = 'Delete';


    //li.style.border = "2px solid black";
    li.style.borderWidth = "100%";
    // li.style.marginTop = "3%";
    li.appendChild(done);

    //li.appendChild(done).style.marginRight = "10px"
    li.appendChild(remove);
    //li.appendChild(remove).style.marginRight = "0px";
    insertAfter(li, list.lastElementChild);


    done.addEventListener('click', () => {
        console.log(li.textContent);
        li.style.textDecoration = "line-through";
        li.style.textDecorationColor = "rgba(255,0,0,0.5)";
        li.style.textDecorationThickness = "4px";



    });
    remove.addEventListener('click', () => {

        list.removeChild(li);
    });
}

function insertAfter(neewelement, oldelement) {
    oldelement.parentNode.insertBefore(neewelement, oldelement.nextElementSibling);
}