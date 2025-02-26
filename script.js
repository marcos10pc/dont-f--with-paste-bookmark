function remove_block(){
    const forceBrowserDefault = function(e){
      e.stopImmediatePropagation();
      return true;
    };

    document.addEventListener('copy', forceBrowserDefault, true);
    document.addEventListener('cut', forceBrowserDefault, true);
    document.addEventListener('paste', forceBrowserDefault, true);
    alert("Block Removed!")
}

remove_block();
