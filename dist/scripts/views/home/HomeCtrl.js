(function() {
    function HomeCtrl(
      Room,
      $uibModal,
      $cookies,
      $location,
      $window,
      $rootScope
    ) {
        var $ctrl = this;

        $ctrl.rooms = Room.all;

        $ctrl.currentUser = $cookies.get('blocChatCurrentUser');

        $rootScope.$on('userChanged', function() {
          $ctrl.currentUser = $cookies.get('blocChatCurrentUser');
        });

        $ctrl.logout = function() {
          $cookies.remove('blocChatCurrentUser');
          $window.location.href = $location.absUrl();
        }

        $ctrl.openComponentModal = function () {
          var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            component: 'AddRoomModal'
          });

          modalInstance.result
            .then(function (roomName) {
              Room.addRoom(roomName);
            })
            .catch(function() {
               // Do Nothings
            });
        };

        $ctrl.showRoom = function(room) {
          $ctrl.currentRoom = room;
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', [
          'Room',
          '$uibModal',
          '$cookies',
          '$location',
          '$window',
          '$rootScope',
          HomeCtrl
        ]);
})();
