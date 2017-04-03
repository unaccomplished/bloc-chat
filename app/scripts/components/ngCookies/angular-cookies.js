(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            //Do something to allow users to set their username
            $uibModal.open({
                // Modal configuration object properties
                animation: $ctrl.animationsEnabled,
                templateUrl: '../scripts/components/setUsernameModal/set-username-modal.html',
                controller: '../scripts/components/setUsernameModal/SetUsernameModalCtrl.js'
            })
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
