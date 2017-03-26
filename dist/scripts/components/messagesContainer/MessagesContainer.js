(function() {
    var messagesContainer = {
      templateUrl: '../scripts/components/messagesContainer/messages-container.html',
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
      },
      controller: messagesContainerCtrl
    }

    function messagesContainerCtrl() {
      var $ctrl = this;

      // $ctrl.ok = function () {
      //   $ctrl.close({$value: $ctrl.roomName});
      // };
      //
      // $ctrl.cancel = function () {
      //   $ctrl.dismiss({$value: 'cancel'});
      // };
    }

    angular
        .module('blocChat')
        .component('messagesContainer', messagesContainer);
})();
