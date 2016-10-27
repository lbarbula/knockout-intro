$(document).ready(function (){
  var viewModel = {
    name: ko.observable("Bob"),
    changeName: function () {
      this.name("Lucas");
    },
    nameVisible: ko.observable(true)
  }
  ko.applyBindings(viewModel)
})
