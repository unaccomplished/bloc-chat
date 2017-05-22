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

      $ctrl.newMessage = null;
      $ctrl.send = send;

      function send() {
        Message.send($ctrl.newMessage);
        $ctrl.newMessage = null;
      }
    }

    angular
        .module('blocChat')
        .component('sendMessage', sendMessage);
})();
