(function() {
    var addRoomModal = {
      templateUrl: '../scripts/components/addRoom/add-room-modal.html',
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
      },
      controller: addRoomModalCtrl
    }

    function addRoomModalCtrl() {
      var $ctrl = this;

      $ctrl.ok = function(roomName) {
        if ($ctrl.roomName !== "") {
          $ctrl.close({$value: $ctrl.roomName});
        } else {
          $ctrl.errorMessage = "Room name must include characters";
        }
      };

      $ctrl.cancel = function () {
        $ctrl.dismiss({$value: 'cancel'});
      };
    }

    angular
        .module('blocChat')
        .component('addRoomModal', addRoomModal);
})();
