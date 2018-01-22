const baseUrl = "http://localhost:5000/api/";

generateForm();

renderComments();

function postComment() {
    var comment = {
        "text": document.getElementById("comments-comment").value,
        "username": document.getElementById("comments-name").value,
        "ipAddress": "string",
        "domain": "string",
        "url": "string",
        "parentCommentId": 0,
    };

    postRequest(baseUrl + "comments", comment).then(() => {
        clearComments();
        renderComments();
    });

}

function incrementScore(id) {
    postRequest(baseUrl + "comments/" + id + "/up", null);
}

function decrementScore(id) {
    postRequest(baseUrl + "comments/" + id + "/down", null);
}

function postRequest(url, data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
            }
        };
        xhr.send(JSON.stringify(data));
    });
}

function getRequest(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("Get", url, false);
    xhr.send(null);

    return xhr.responseText
}

function generateForm() {
    var form = document.getElementById("comments");
    form.appendChild(document.createTextNode("Comment:"));
    form.appendChild(document.createElement("br"));

    var comment = form.appendChild(document.createElement("textarea"));
    comment.id = "comments-comment";
    comment.name = "comment";
    comment.type = "text";
    comment.rows = "4";
    comment.cols = "50";

    form.appendChild(document.createElement("br"));

    form.appendChild(document.createTextNode("Name:"));

    var name = form.appendChild(document.createElement("input"));
    name.id = "comments-name";
    name.name = "name";
    name.type = "text";

    var button = form.appendChild(document.createElement("button"));
    button.innerHTML = "Submit";
    button.onclick = function () {
        postComment();
    };

    var list = form.appendChild(document.createElement("div"));
    list.id = "comments-list"
}

function renderComment(data) {
    var list = document.getElementById("comments-list");

    var comment = list.appendChild(document.createElement("div"));
    comment.id = "comment-" + data.id

    comment.appendChild(document.createTextNode(data.text));
    comment.appendChild(document.createElement("br"));

    var up = comment.appendChild(document.createElement("button"));
    up.innerHTML = "Up";
    up.onclick = function () {
        incrementScore(data.id);
    };

    var score = comment.appendChild(document.createElement("div"));
    score.innerHTML = data.score;
    score.id = "comment-score-" + data.id;

    var down = comment.appendChild(document.createElement("button"));
    down.innerHTML = "Down";
    down.onclick = function () {
        decrementScore(data.id);
    };

    comment.appendChild(document.createTextNode(data.username + " @ " + data.createdTime));

    comment.appendChild(document.createElement("hr"));
}

function renderComments() {
    var comments = getRequest(baseUrl + "comments");
    comments = JSON.parse(comments);
    comments.forEach(comment => {
        renderComment(comment);
    });
}

function clearComments() {
    var list = document.getElementById("comments-list");
    list.innerHTML = "";
}