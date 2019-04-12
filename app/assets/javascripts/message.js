  function buildHTML(message){
    var insertImage = ' ';
    if (message.image) {
      insertImage = `<img src="${message.image}">`;
    };
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    <div class="lower-message__image">
                      ${insertImage}
                    </div>
                  </div>
                </div>`;
