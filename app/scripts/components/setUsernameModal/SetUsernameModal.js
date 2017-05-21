(function() {
    var setUsernameModal = {
      templateUrl: '../scripts/components/setUsernameModal/set-username-modal.html',
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&' // still needed since no Cancel/dismiss option?
      },
      controller: setUsernameModalCtrl
    }

    function setUsernameModalCtrl() {
      var $ctrl = this;

      $ctrl.ok = function(username) {
        // conditonal to check the username for whitespace or empty
        // in the else display an acutal error messge to the user, dont use an alert
        // "display error message to user angularjs"
        if ($ctrl.username !== "") {
          $ctrl.close({$value: $ctrl.username});
        } else {
          $ctrl.errorMessage = "Username must include characters";
        }
      };
    }

    angular
        .module('blocChat')
        .component('setUsernameModal', setUsernameModal);
})();
