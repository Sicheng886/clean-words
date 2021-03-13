# Clean-nodes

Clean rich text copied from MS Word to pure HTML nodes.

## Get Started

We use `contenteditable="true"` attribute to obtain rich text HTML piece.

Download `cleanHTM.js` and put it in your project folder.

In your page:

```html
<div contenteditable="true" id="inputDiv"></div>
<script src="./cleanHTML.js"></script>
```

In your script:

```js
document.querySelector('#inputDiv').addEventListener('keyup', () => {
  const clean = new CleanHTML();
  const reult = clean.cleanHTML(document.querySelector('#inputDiv').innerHTML);
});
```

Then you can get clean HTML result and output it wherever you want.
