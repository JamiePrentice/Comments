generateForm();

function submitForm() {
    alert("Well hello there");
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
}

function generateForm() {

    var form = document.getElementById('comments');
    form.appendChild(document.createTextNode('Comment:'));
    form.appendChild(document.createElement("br"))

    var comment = form.appendChild(document.createElement('textarea'));
    comment.name = 'comment';
    comment.type = 'text';
    comment.rows = "4";
    comment.cols = "50"

    form.appendChild(document.createElement("br"))

    form.appendChild(document.createTextNode('Name:'));

    var name = form.appendChild(document.createElement('input'));
    name.name = 'name';
    name.type = 'text';

    var button = form.appendChild(document.createElement('button'));
    button.innerHTML = 'Submit';
    button.onclick = function () {
        submitForm();
    };
}