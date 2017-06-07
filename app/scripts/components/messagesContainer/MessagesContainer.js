(function() {
    var messagesContainer = {
      templateUrl: '../scripts/components/messagesContainer/messages-container.html',
      bindings: {
        room: '<',
        // name: '@',
        // onMessageClick: '&?',
        // subtext: '@'
      },
      controller: messagesContainerCtrl
    }

    function messagesContainerCtrl(Message) {
      var $ctrl = this; //required for all components

      $ctrl.$onChanges = onChanges;
      // $ctrl.$onInit = onInit;
      // $ctrl.$postLink = postLink;
      // $ctrl.$onDestroy = onDestroy;

      function onChanges() {
        // console.log($ctrl.room) This is to test if $ctrl.room was updating when a new room was clicked
        if($ctrl.room) {
          $ctrl.messages = Message.getByRoomId($ctrl.room.$id);
        }
      }
    }

    angular
        .module('blocChat')
        .component('messagesContainer', messagesContainer);
})();
