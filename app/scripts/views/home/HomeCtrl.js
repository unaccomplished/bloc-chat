(function() {
    function HomeCtrl(Room, $uibModal) {
        var $ctrl = this;

        $ctrl.rooms = Room.all;

        $ctrl.openComponentModal = function () {
          var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            component: 'AddRoomModal'
          });

          modalInstance.result.then(function (roomName) {
            Room.addRoom(roomName);
          })
        };

        $ctrl.showRoom = function(room) {
          // Updated this to just be the room so we could access the name as well
          $ctrl.currentRoom = room;
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
