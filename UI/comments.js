generateForm();

function postComment() {
    alert('Well hello there');
    var comment = {
        "text": document.getElementById('comments-comment').value,
        "username": document.getElementById('comments-comment').value,
        "ipAddress": "string",
        "domain": "string",
        "url": "string",
        "parentCommentId": 0,
    }
}

function postRequest(url, data){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
        }
    };
    xhr.send(data);
}

function generateForm() {

    var form = document.getElementById('comments');
    form.appendChild(document.createTextNode('Comment:'));
    form.appendChild(document.createElement('br'))

    var comment = form.appendChild(document.createElement('textarea'));
    comment.id = 'comments-comment'
    comment.name = 'comment';
    comment.type = 'text';
    comment.rows = '4';
    comment.cols = '50'

    form.appendChild(document.createElement('br'))

    form.appendChild(document.createTextNode('Name:'));

    var name = form.appendChild(document.createElement('input'));
    name.name = 'name';
    name.type = 'text';

    var button = form.appendChild(document.createElement('button'));
    button.innerHTML = 'Submit';
    button.onclick = function () {
        postComment();
    };
}