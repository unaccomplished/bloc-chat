(function() {
    var messagesContainer = {
      templateUrl: '../scripts/components/messagesContainer/messages-container.html',
      bindings: {
        roomId: '='
      },
      controller: messagesContainerCtrl
    }

    function messagesContainerCtrl() {
      var $ctrl = this; //required for all components

      $ctrl.$onChange = onChange;
      function onChange() {
          $ctrl.messages = Message.getByRoomId($ctrl.roomId);
      }
    }

    angular
        .module('blocChat')
        .component('messagesContainer', messagesContainer);
})();
