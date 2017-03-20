(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        var addRoom = function(roomName) {
            rooms.$add(roomName);
        };

        return {
            addRoom: addRoom,
            all: rooms
        };
    };

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
