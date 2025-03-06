const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target.id);

        const targetId = e.target.id
        switch(targetId){
            case 'grey' : console.log("Btn 1 clicked");
            body.style.backgroundColor = targetId
            break;
            case 'orange' : console.log("Btn 2 clicked");
            body.style.backgroundColor = targetId
            break;
            case 'blue' : console.log("Btn 3 clicked");
            body.style.backgroundColor = targetId
            break;
            case 'yellow' : console.log("Btn 4 clicked");
            body.style.backgroundColor = targetId
            break;
        }

    });
});
