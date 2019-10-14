
angular.module('app').config(function ($routeProvider) {
  var routeResolvers = {
    loggedIn: function (auth) {
      return auth.requireLogin();
    },
    waitForAuth: function (auth) {
      return auth.waitForAuth();
    },
    requireAdmin: function (auth) {
      return auth.requireAdmin();
    },
    userSessions: function (sessions_v2, currentIdentity, auth) {
      return auth.requireLogin().then(function () {
        return sessions_v2.getSessionsByUser(currentIdentity.currentUser.id);
      });
    },
    allUsers: function (users, auth) {
      return auth.requireLogin().then(function () {
        return users.getAllUsers();
      });
    }

  }

  $routeProvider
    .when('/admin/login', {
      template: '<admin-login></admin-login>',
      resolve: {
        currentAuth: routeResolvers.waitForAuth
      }
    })
    .when('/admin/users/:id', {
      template: '<user-details all-users="$resolve.allUsers"></user-details>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers
      }
    })
    .when('/users', {
      template: '<user-list all-users="$resolve.allUsers"></user-list>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers
      }
    })
    .when('/admin/createusers', {
      template: '<create-users></create-users>',
      resolve: {
        admin: routeResolvers.requireAdmin
      }
    })
    .when('/home', {
      template: '<home user-sessions="$resolve.userSessions"></home>',
      resolve: {
        login: routeResolvers.loggedIn,
        userSessions: routeResolvers.userSessions
      }
    })
    .when('/profile', {
      template: '<profile></profile>',
      resolve: {
        userProfile: routeResolvers.loggedIn,
      }
    })
    .when('/createsession', {
      template: '<create-new-session user-sessions="$resolve.userSessions"></create-new-user>',
      resolve: {
        userSessions: routeResolvers.userSessions,
      }
    })
    .when('/login', {
      template: '<login></login>',
      resolve: {
        currentAuth: routeResolvers.waitForAuth
      }
    })
    .when('/logout', {
      template: '<logout></logout>'
    })
    .when('/', {
      redirectTo: '/home'
    });
})