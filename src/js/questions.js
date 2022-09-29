window.onload = () => {
  $.getJSON("https://script.google.com/macros/s/AKfycbxekf4npZOTDMwYJgTqsBYkgsn45lYHY97x8fagunJ4sIrdam_qsdXy9reCDsEDTWzM/exec?action=getData", (res) => {
    $.each(res, (i, data) => {
      $("#Data").append(`<div class="card border-info mb-3 text-center mt-3">
    <div class="card-header bg-transparent borderdark">" 🙂 "</div>
    <div class="card-body" >
      <h5 class="card-text">${data.message}</h5>
    </div>
    </div>`);
      if (data.person) {
        $(".card-body").append(`<div class="card-footer bg-transparent border-">${data.person} : <p>" ${data.reply}"</p></div>`);
      }
    });
  });
};
