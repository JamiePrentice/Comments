# Comments

### About

A tiny (3.83 KB gzipped) comments framework that can be dropped on to any webpage with two lines of HTML.


TL:DR;

- No Ads.
- No tracking.
- No bloatware.
- No logins with facebook, google... no logins at all.
  - Get straight to ~~trolling~~ civilised discussion!
- All Vanilla Javascript. 
  - No jQuery or other dependancies! 


---


### Demo

[Fresh Demo](https://codepen.io/JamiePrentice/pen/Zrxgxe)


[Persisted Demo](https://codepen.io/JamiePrentice/full/Zrxgxe/)


### Usage

Add the two lines of code to where you'd like comments on your website.

```html
<div id="brandname"></div>
<script src="https://brandname.ams3.digitaloceanspaces.com/brandname_latest.js" type="text/javascript"></script>
```

Something common like a footer would be best. 

We'll work out where we are and what comments to load based on the URL. Magic.


---


### Design

We're using [milligram.css](https://github.com/milligram/milligram) to make brandname look great. We love it, but if you're not a big fan of the purple here's how to change the look:

Add a .css file and import it after the javascript file.

```html
<div id="brandname"></div>
<script src="https://brandname.ams3.digitaloceanspaces.com/brandname_latest.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="https://example.com/your-styles-overrides.css" />
```

**OR**

If you don't want to host a file, include the css in style tags after the javascript file.
```html
<div id="brandname"></div>
<script src="https://brandname.ams3.digitaloceanspaces.com/brandname_latest.js" type="text/javascript"></script>
<style>
  ... Add CSS from below here ...
</style?
```

```css
/* Button color */
.button,
button,
input[type=button],
input[type=submit] {
    background-color: #303F9F;
    border: #303F9F;
}

/* Button hover / focus color */
button:hover,
button:focus,
input[type=submit]:focus,
input[type=submit]:hover {
    background-color: #9FA8DA;
    border-color: #9FA8DA;
}

/* Input border focus colors */
input[type=text]:focus,
textarea:focus {
    border-color: #1A237E;
}

/* Text color */
textarea,
.comment-text,
input[type=text] {
    color: #0D47A1;
}

/* Comment background */
.comment-text {
    background: #E3F2FD;
}

/* Comment name and time text color */
.footer{
    color: #90A4AE;
}

/* Reply link text color */
a {
    color: #1565C0;
}

```


---


### ToDo

##### General

- [ ] Come up with a good name. Replace all the instances of brand name with it.
- [ ] Domain.
- [ ] Versioning - Versions with an integrity tag - latest without.
- [ ] CI + CD

##### ReadMe

- [ ] Add a screenshot and a working demo to a CodePen or similar...

##### Size

- [ ] Reduce duplication in the JS.

##### Performance

- [ ] gZip.
