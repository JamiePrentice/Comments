const baseUrl = "http://localhost:5000/api/";

loadCss();
generateForm();
renderComments();

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
    link.href = './dist/output.css';
    link.media = 'all';
}

function generateForm() {
    var form = document.getElementById("brandname");

    var comment_label = form.appendChild(document.createElement("label"));
    comment_label.innerHTML = "Comment:";

    var comment = form.appendChild(document.createElement("textarea"));
    comment.id = "brandname-comment";
    comment.type = "text";
    comment.maxLength = 5000;

    var float_right = form.appendChild(document.createElement("div"));
    float_right.className = "float-right";

    var row = float_right.appendChild(document.createElement("div"));
    row.className = "row";

    var label = row.appendChild(document.createElement("label"));
    label.innerHTML = "Name:";

    var name = row.appendChild(document.createElement("input"));
    name.id = "brandname-name";
    name.type = "text";

    var button = row.appendChild(document.createElement("input"));
    button.value = "Post";
    button.type = "submit";
    button.className = "button";
    button.onclick = function () {
        postComment();
    };

    var list = form.appendChild(document.createElement("div"));
    list.id = "brandname-comments-list";
}

function renderComment(data) {
    var list = document.getElementById("brandname-comments-list");

    var comment = list.appendChild(document.createElement("div"));
    comment.id = "comment-" + data.id;
    comment.setAttribute('up', false);
    comment.setAttribute('down', false);

    var row = comment.appendChild(document.createElement("div"));
    row.className = "row";

    var controls = row.appendChild(document.createElement("div"));
    controls.className = "column column-8 center";

    var up = controls.appendChild(document.createElement("button"));
    up.id = "comment-up-" + data.id;
    up.className = "vote";
    up.innerHTML = "&#9650;";
    up.onclick = function () {
        incrementScore(data.id);
    };

    var score = controls.appendChild(document.createElement("div"));
    score.id = "comment-score-" + data.id;
    score.className = "score";
    score.innerHTML = data.score;

    var down = controls.appendChild(document.createElement("button"));
    down.id = "comment-down-" + data.id;
    down.className = "vote";
    down.innerHTML = "&#9660;";
    down.onclick = function () {
        decrementScore(data.id);
    };

    var text = row.appendChild(document.createElement("div"));
    text.id = "comment-text";
    text.className = "column comment-text";
    text.innerHTML = data.text;

    var footer = comment.appendChild(document.createElement("div"));
    footer.className = "footer";

    var links = footer.appendChild(document.createElement("a"));
    links.className = "column column-offset-8 inline";
    links.innerHTML = "Reply";
    links.onclick = function () {
        generateReplyInput(data.id);
    };

    var author = footer.appendChild(document.createElement("div"));
    author.className = "float-right inline";
    author.innerHTML = "by " + data.username + " - " + timeSince(data.createdTime) + " ago";
}

function postComment() {
    var commentValue = document.getElementById("brandname-comment").value;
    
    if (commentValue !== "") {
        var comment = {
            "text": commentValue,
            "username": document.getElementById("brandname-name").value,
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
    var score = document.getElementById("comment-score-" + id);
    score.innerHTML++;
}

function decrementScore(id) {
    postRequest(baseUrl + "comments/" + id + "/down", null);
    var score = document.getElementById("comment-score-" + id);
    score.innerHTML--;
}

function renderComments() {
    var comments = getRequest(baseUrl + "comments");
    comments = JSON.parse(comments);
    comments.forEach(comment => {
        renderComment(comment);
    });
}

function clearComments() {
    document.getElementById("brandname-comments-list").innerHTML = "";
}

function clearInput() {
    document.getElementById("brandname-comment").value = "";
    document.getElementById("brandname-name").value = "";
}

function generateReplyInput(id) {
    var list = document.getElementById("comment-" + id);
    alert("This will render a comment under comment-" + id);
}

function timeSince(date) {
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return interval + "y";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval + "mo";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval + "d";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + "h";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + "m";
    }
    return Math.floor(seconds) + "s";
}