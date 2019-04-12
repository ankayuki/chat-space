  function buildHTML(message){
    var insertImage = ' ';
    if (message.image) {
      insertImage = `<img src="${message.image}">`;
    };
