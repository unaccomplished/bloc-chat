(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            //Do something to allow users to set their username
            var modalInstance = $uibModal.open({
              component: 'setUsernameModal'
            });

            modalInstance.result.then(function (username) {
              // Updates to Username go here
            })
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
