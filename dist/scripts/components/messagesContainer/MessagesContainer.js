(function() {
    var messagesContainer = {
      templateUrl: '../scripts/components/messagesContainer/messages-container.html',
      bindings: {
        room: '='
      },
      controller: messagesContainerCtrl
    }

    function messagesContainerCtrl(Message) {
      var $ctrl = this; //required for all components

      $ctrl.$onChanges = onChanges;

      function onChanges() {
        if($ctrl.room) {
          $ctrl.messages = Message.getByRoomId($ctrl.room.$id);
        }
      }
    }

    angular
        .module('blocChat')
        .component('messagesContainer', messagesContainer);
})();
