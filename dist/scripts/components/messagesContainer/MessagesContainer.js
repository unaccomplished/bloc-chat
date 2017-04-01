(function() {
    var messagesContainer = {
      templateUrl: '../scripts/components/messagesContainer/messages-container.html',
      bindings: {
        roomId: '<'
      },
      controller: messagesContainerCtrl
    }

    function messagesContainerCtrl(Message) {
      var $ctrl = this; //required for all components

      $ctrl.$onChanges = onChanges;

      function onChanges() {
        if($ctrl.roomId) {
          $ctrl.messages = Message.getByRoomId($ctrl.roomId);
        }
      }
    }

    angular
        .module('blocChat')
        .component('messagesContainer', messagesContainer);
})();
