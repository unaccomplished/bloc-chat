(function() {
    var sendMessage = {
      templateUrl: '../scripts/components/sendMessage/send-message.html',
      bindings: {
        roomId: '<'
      },
      controller: sendMessageCtrl
    }

    function sendMessageCtrl(Message) {
      var $ctrl = this; //required for all components
      // 
      // $ctrl.$onChanges = onChanges;
      //
      // function onChanges() {
      //   if($ctrl.roomId) {
      //     $ctrl.messages = Message.getByRoomId($ctrl.roomId);
      //   }
      // }
    }

    angular
        .module('blocChat')
        .component('sendMessage', sendMessage);
})();
