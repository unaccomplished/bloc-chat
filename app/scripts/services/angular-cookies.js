(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            //Do something to allow users to set their username
            var modalInstance = $uibModal.open({
              component: 'setUsernameModal'
            });

            modalInstance.result.then(function (username) {
              currentUser = $cookies.put('blocChatCurrentUser', username)
              // Updates to Username go here ==> update cookies and set the username
            })
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

// var allTheCookies = {
//   blocChatCurrentUser:'myusername'
// }
