const baseUrl = "http://localhost:5000/api/";

loadCss();
generateForm();
renderComments();

function sendRequest (method, url, data) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        if(data != null){
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify(data));
        }else{
            xhr.open(method, url);
            xhr.send();
        }

    });
}

function loadCss() {
    let head = document.getElementsByTagName("head")[0];
    let link = head.appendChild(document.createElement("link"));
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "./dist/output.css";
}

function generateForm() {
    let form = document.getElementById("brandname");

    let comment_label = form.appendChild(document.createElement("label"));
    comment_label.innerHTML = "Comment:";

    let wrap = form.appendChild(document.createElement("div"));
    wrap.className = "wrap";

    let comment = wrap.appendChild(document.createElement("textarea"));
    comment.id = "brandname-comment";
    comment.type = "text";
    comment.maxLength = 5000;
    comment.onkeypress = function () {
        getRemainingCharacters(comment.value, comment.maxLength, counter)
    };

    let counter = wrap.appendChild(document.createElement("span"));

    let float_right = form.appendChild(document.createElement("div"));
    float_right.className = "float-right";

    let row = float_right.appendChild(document.createElement("div"));
    row.className = "row";

    let label = row.appendChild(document.createElement("label"));
    label.innerHTML = "Name:";

    let name = row.appendChild(document.createElement("input"));
    name.id = "brandname-name";
    name.type = "text";

    let button = row.appendChild(document.createElement("input"));
    button.value = "Post";
    button.type = "submit";
    button.className = "button";
    button.onclick = function () {
        postComment();
    };

    let list = form.appendChild(document.createElement("div"));
    list.id = "brandname-comments-list";
}

function renderComment(data) {
    let comment;
    if (data.parentCommentId !== 0) {
        let parent = document.getElementById("comment-" + data.parentCommentId);

        comment = parent.appendChild(document.createElement("div"));
        comment.id = "comment-" + data.id;
        comment.className = "reply";
    } else {
        let list = document.getElementById("brandname-comments-list");
        comment = list.appendChild(document.createElement("div"));
        comment.id = "comment-" + data.id;
    }

    let row = comment.appendChild(document.createElement("div"));
    row.className = "row";

    let controls = row.appendChild(document.createElement("div"));
    controls.className = "column column-4 center";

    let up = controls.appendChild(document.createElement("button"));
    up.id = "comment-up-" + data.id;
    up.className = "vote";
    up.innerHTML = "&#9650;";
    up.onclick = function () {
        incrementScore(data.id);
    };

    let score = controls.appendChild(document.createElement("div"));
    score.id = "comment-score-" + data.id;
    score.className = "score";
    score.innerHTML = data.score;

    let down = controls.appendChild(document.createElement("button"));
    down.id = "comment-down-" + data.id;
    down.className = "vote";
    down.innerHTML = "&#9660;";
    down.onclick = function () {
        decrementScore(data.id);
    };

    let text = row.appendChild(document.createElement("div"));
    text.className = "column comment-text";
    text.innerHTML = data.text;

    let footer = comment.appendChild(document.createElement("div"));
    footer.id = "comment-footer-" + data.id;
    footer.className = "footer";

    let links = footer.appendChild(document.createElement("a"));
    links.className = "column column-offset-4";
    links.innerHTML = "Reply";
    links.onclick = function () {
        generateReplyInput(data.id);
    };

    let author = footer.appendChild(document.createElement("div"));
    author.className = "float-right";
    author.innerHTML = "by " + data.username + " - " + timeSince(data.createdTime) + " ago";
}

function postComment() {
    let commentValue = document.getElementById("brandname-comment").value;

    if (commentValue !== "") {
        let comment = {
            "text": commentValue,
            "username": document.getElementById("brandname-name").value,
            "ipAddress": "string",
            "domain": window.location.hostname.replace("www.", ""),
            "url": window.location.pathname,
            "parentCommentId": 0
        };

        requestComment(comment);
    }
}

function postReply(id) {
    let commentValue = document.getElementById("comment-" + id + "-reply").value;

    if (commentValue !== "") {
        let comment = {
            "text": commentValue,
            "username": document.getElementById("comment-" + id + "-name").value,
            "ipAddress": "string",
            "domain": window.location.hostname.replace("www.", ""),
            "url": window.location.pathname,
            "parentCommentId": document.getElementById("comment-" + id + "-parentid").value
        };

        requestComment(comment);
    }
}

function requestComment(comment){
    sendRequest("POST", baseUrl + "comments", comment).then(() => {
        clearInput();
        clearComments();
        renderComments();
    });
}

function incrementScore(id) {
    sendRequest("POST", baseUrl + "comments/" + id + "/up", null);
    let score = document.getElementById("comment-score-" + id);
    score.innerHTML++;
}

function decrementScore(id) {
    sendRequest("POST", baseUrl + "comments/" + id + "/down", null);
    let score = document.getElementById("comment-score-" + id);
    score.innerHTML--;
}

function renderComments() {
    let comments = sendRequest("GET", baseUrl + "comments", null);
    comments.then(function(comments){
        comments = JSON.parse(comments);
        comments.forEach(comment => {
            if (comment.parentCommentId === 0) {
                renderComment(comment)
            }
        });
        renderChildren(comments);
    })
}

function renderChildren(comments) {
    let arrayLength = comments.length;

    for (let i = 0; i < arrayLength; i++) {
        if (comments[i] && comments[i].parentCommentId !== 0) {
            if (document.getElementById("comment-" + comments[i].parentCommentId) !== null) {
                renderComment(comments[i]);
            } else {
                comments.push(comments[i]);
                arrayLength++;
            }
        }
    }
}

function clearComments() {
    document.getElementById("brandname-comments-list").innerHTML = "";
}

function clearInput() {
    document.getElementById("brandname-comment").value = "";
    document.getElementById("brandname-name").value = "";
}

function generateReplyInput(id) {

    if (document.getElementById("comment-" + id + "-parentid") !== null) {
        return;
    }

    let parentComment = document.getElementById("comment-footer-" + id);

    let parentid = parentComment.appendChild(document.createElement("div"));
    parentid.id = "comment-" + id + "-parentid";
    parentid.value = id;

    let reply = parentComment.appendChild(document.createElement("div"));
    reply.className = "reply";

    let wrap = reply.appendChild(document.createElement("div"));
    wrap.className = "wrap";

    let comment = wrap.appendChild(document.createElement("textarea"));
    comment.id = "comment-" + id + "-reply";
    comment.type = "text";
    comment.maxLength = 5000;
    comment.onkeypress = function () {
        getRemainingCharacters(comment.value, comment.maxLength, counter)
    };

    let counter = wrap.appendChild(document.createElement("span"));

    let float_right = reply.appendChild(document.createElement("div"));
    float_right.className = "float-right";

    let row = float_right.appendChild(document.createElement("div"));
    row.className = "row";

    let label = row.appendChild(document.createElement("label"));
    label.innerHTML = "Name:";

    let name = row.appendChild(document.createElement("input"));
    name.id = "comment-" + id + "-name";
    name.type = "text";

    let button = row.appendChild(document.createElement("input"));
    button.value = "Reply";
    button.type = "submit";
    button.className = "button";
    button.onclick = function () {
        postReply(id);
    };
}

function getRemainingCharacters(text, max, counter) {
    counter.innerHTML = max - text.length;
}

function timeSince(date) {
    let seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
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