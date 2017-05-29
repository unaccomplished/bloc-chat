(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        function getByRoomId(roomId) {
          console.log(roomId)
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        }

        function send(newMessage, currentRoomId) {
          messages.$add({
            content: newMessage,
            roomId: currentRoomId,
            sentAt: Date(),
            username: $cookies.get('blocChatCurrentUser')
          });
        }

        // function nameInsideOfThisService() {
        //
        // }

        // Somewhere else:
        // Message.nameThatEveryoneElseSees()


        return {
            getByRoomId: getByRoomId,
            send: send
            // nameThatEveryoneElseSees: nameInsideOfThisService
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
