# Don't F**** With Paste (Bookmark)
A bookmark script that re-enables paste on blocked websites.
Um script bookmark que reativa paste em sites bloqueados.

## Como usar | How to use:
Copie o script e coloque no favorito igual qualquer outro script bookmark e ative ele.
Copy the script and add it to your bookmarks like any other bookmark script and activate it.

### Script
```javascript
javascript:function remove_block(){const e=function(e){return e.stopImmediatePropagation(),!0};document.addEventListener("copy",e,!0),document.addEventListener("cut",e,!0),document.addEventListener("paste",e,!0),alert("Block Removed!")}remove_block();
```
