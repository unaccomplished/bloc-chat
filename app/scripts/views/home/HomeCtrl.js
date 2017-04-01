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

        $ctrl.showRoom = function(roomId) {
          $ctrl.currentRoomId = roomId;
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
