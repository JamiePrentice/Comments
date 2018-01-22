const baseUrl = "http://localhost:49737/api/";

generateForm();
renderComments();
loadCss();

function postComment() {
    var commentValue = document.getElementById("comments-comment").value;
    var usernameValue = document.getElementById("comments-name").value;

    if (commentValue !== "") {
        var comment = {
            "text": commentValue,
            "username": usernameValue,
            "ipAddress": "string",
            "domain": window.location.hostname.replace("www.", ""),
            "url": window.location.pathname,
            "parentCommentId": 0,
        };

        postRequest(baseUrl + "comments", comment).then(() => {
            clearInput();
            clearComments();
            renderComments();
        });
    }

}

function incrementScore(id) {
    postRequest(baseUrl + "comments/" + id + "/up", null);
    document.getElementById("comment-score-" + id).innerHTML++;
    disableIncrementScore(id);
}

function decrementScore(id) {
    postRequest(baseUrl + "comments/" + id + "/down", null);
    document.getElementById("comment-score-" + id).innerHTML--;
    disableDecrementScore(id);
}

function disableIncrementScore(id) {
    document.getElementById("comment-up-" + id).disabled = true;
    document.getElementById("comment-down-" + id).disabled = false;
}

function disableDecrementScore(id) {
    document.getElementById("comment-up-" + id).disabled = false;
    document.getElementById("comment-down-" + id).disabled = true;
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
                JSON.parse(xhr.responseText);
            }
        };
        xhr.send(JSON.stringify(data));
    });
}

function getRequest(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("Get", url, false);
    xhr.send(null);

    return xhr.responseText;
}

function loadCss() {
    var head = document.getElementsByTagName('head')[0];
    var link = head.appendChild(document.createElement('link'));
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'stylesheet.css';
    link.media = 'all';
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

    var submitDiv = form.appendChild(document.createElement("div"));
    submitDiv.id = "comments-submitDiv";

    submitDiv.appendChild(document.createTextNode("Name: "));
    var name = submitDiv.appendChild(document.createElement("input"));
    name.id = "comments-name";
    name.name = "name";
    name.type = "text";

    var button = submitDiv.appendChild(document.createElement("button"));
    button.innerHTML = "Post";
    button.onclick = function () {
        postComment();
    };

    var list = form.appendChild(document.createElement("div"));
    list.id = "comments-list";
}

function renderComment(data) {
    var list = document.getElementById("comments-list");

    var comment = list.appendChild(document.createElement("div"));
    comment.id = "comment-" + data.id;

    comment.appendChild(document.createTextNode(data.text));
    comment.appendChild(document.createElement("br"));

    var up = comment.appendChild(document.createElement("button"));
    up.id = "comment-up-" + data.id;
    up.innerHTML = "&#9650;";
    up.onclick = function () {
        incrementScore(data.id);
    };

    var score = comment.appendChild(document.createElement("div"));
    score.innerHTML = data.score;
    score.id = "comment-score-" + data.id;

    var down = comment.appendChild(document.createElement("button"));
    down.id = "comment-down-" + data.id;
    down.innerHTML = "&#9660;";
    down.onclick = function () {
        decrementScore(data.id);
    };

    comment.appendChild(document.createTextNode(data.username + " @ " + timeSince(data.createdTime)));

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
    document.getElementById("comments-list").innerHTML = "";
}

function clearInput() {
    document.getElementById("comments-comment").value = "";
    document.getElementById("comments-name").value = "";
}


function timeSince(date) {
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}