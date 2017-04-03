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

      $ctrl.ok = function () {
        $ctrl.close({$value: $ctrl.username});
      };
    }

    angular
        .module('blocChat')
        .component('setUsernameModal', setUsernameModal);
})();
