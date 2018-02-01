# Comments

### About

A tiny (17.44 KB) comments framework that can be used on any webpage. 



TL:DR;

- Not for profit.


- No Ads.
- No tracking.
- No bloatware.
- No logins.
  - Get straight to ~~trolling~~ civilised discussion!
- All Vanilla Javascript. 
  - No jQuery or other dependancies! 



### Usage

Add the two lines of code to where you'd like comments on your website.

```html
<div id="brandname"></div>
<script src="https://linktoacnd/brandname.js" type="text/javascript" integrity="abc123"></script>
```

Something common like a footer would be best. 

We'll work out where we are and what comments to load based on the URL. Magic.



### Design

We're using [milligram.css](https://github.com/milligram/milligram) to make brandname look great. We love it, but if you're not a big fan of the purple here's how to change the look:





### ToDo

##### General

- [ ] Voting - 1 up / 1 down per reload.
- [ ] Come up with a good name. Replace all the instances of brand name with it.
- [ ] Domain + Deploy.
      - [ ] Deployed with versioning and integrity.

##### ReadMe

- [ ] Write overwrite template for CSS.
- [ ] Update the file size after optimisations.
- [ ] Add a screenshot and a working demo to a CodePen or similar.

##### Size

- [ ] Only load the CSS that we need.
- [ ] Reduce duplication in the JS.

##### Performance

- [ ] Now that it's working optimise the JS.
- [ ] gZip.
