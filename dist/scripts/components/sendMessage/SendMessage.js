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
      // $ctrl.send is equal to send function below so $ctrl.send() can be called in send-message.html

      function send() {
        Message.send($ctrl.newMessage, $ctrl.roomId);
        //Message.send is referencing Message.js's send function in the object being returned
        $ctrl.newMessage = null;
      }
    }

    angular
        .module('blocChat')
        .component('sendMessage', sendMessage);
})();
