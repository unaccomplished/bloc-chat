(function() {
    function BlocChatCookies($cookies, $uibModal, $rootScope) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser)

        if (!currentUser || currentUser === '') {
            //Do something to allow users to set their username
            var modalInstance = $uibModal.open({
              component: 'setUsernameModal',
              //options for not letting the modal close
            });

            modalInstance.result.then(function (username) {
              $cookies.put('blocChatCurrentUser', username)
              $rootScope.$broadcast('userChanged');
              // Updates to Username go here ==> update cookies and set the username
            })
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', '$rootScope', BlocChatCookies]);
})();

// var allTheCookies = {
//   blocChatCurrentUser:'myusername'
// }
