webpackJsonp([2],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toastr_toastr__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toastr_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__toastr_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_adminLogin__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_adminLogin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__admin_adminLogin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_results__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_results___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__admin_results__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_createUsers__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_createUsers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__admin_createUsers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_userList__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_userList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__admin_userList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_userDetails__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_userDetails___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__admin_userDetails__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_nav__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_nav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__nav_nav__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__security_logout__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__security_logout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__security_logout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__security_login__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__security_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__security_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__security_auth__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__security_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__security_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__security_currentIdentity__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__security_currentIdentity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__security_currentIdentity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__security_users__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__security_users___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__security_users__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__home_home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_createNewSession__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_createNewSession___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__home_createNewSession__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sessions_unreviewedSessionCount__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sessions_unreviewedSessionCount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__sessions_unreviewedSessionCount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sessions_sessionDetail__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sessions_sessionDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__sessions_sessionDetail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sessions_sessionDetailWithVotes__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sessions_sessionDetailWithVotes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__sessions_sessionDetailWithVotes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_detailPanel__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_detailPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__components_detailPanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_zoomIn__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_zoomIn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__components_zoomIn__);























/***/ }),

/***/ 303:
/***/ (function(module, exports) {

(function () {
    var toastrModule = angular.module('toastr', []);
    toastr.options.timeOut = 1000;
    toastrModule.value('toastr', toastr);
}());


/***/ }),

/***/ 304:
/***/ (function(module, exports) {

var app = angular.module('app', ['ngRoute', 'toastr']);
app.run(function ($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function (e, next, prev, err) {
        if (err === "AUTH_REQUIRED") {
            $location.path("/login");
        }
        if (err === 'NOT_AUTHORIZED') {
            $location.path("/home");
        }
    });
});
app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);


/***/ }),

/***/ 305:
/***/ (function(module, exports) {

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
        allSessions: function (sessions_v2, auth) {
            return auth.requireLogin().then(function () {
                return sessions_v2.getAllSessions();
            });
        },
        allUsers: function (users, auth) {
            return auth.requireLogin().then(function () {
                return users.getAllUsers();
            });
        }
    };
    $routeProvider
        .when('/admin/login', {
        template: '<admin-login></admin-login>',
        resolve: {
            currentAuth: routeResolvers.waitForAuth
        }
    })
        .when('/admin/results', {
        template: '<results all-sessions="$resolve.allSessions"></results>',
        resolve: {
            admin: routeResolvers.requireAdmin,
            allSessions: routeResolvers.allSessions
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
        .otherwise('/home');
});


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('adminLogin', {
    template: __webpack_require__(307),
    bindings: {},
    controller: function ($location, currentIdentity, auth, toastr) {
        this.loggedIn = currentIdentity.authenticated();
        if (this.loggedIn) {
            $location.path('/home');
        }
        this.login = function () {
            auth.login({
                username: this.email,
                password: this.password
            }).then(function () {
                $location.path('/home');
            }, function (err) {
                toastr.error(err);
            });
        };
    }
});


/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "<h1>Admin Login</h1>\r\n\r\n<form class=\"form\">\r\n  <div class=\"row\">\r\n  <div class=\"form-group col-sm-6\">\r\n    <input type=\"text\" autofocus placeholder=\"Email Address\" ng-model=\"$ctrl.email\" class=\"form-control\">\r\n  </div>\r\n  </div>\r\n  <div class=\"row\">\r\n  <div class=\"form-group col-sm-6\">\r\n    <input type=\"password\" placeholder=\"Password\" ng-model=\"$ctrl.password\" class=\"form-control\">\r\n  </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n    <button class=\"btn btn-primary\" ng-click=\"$ctrl.login()\">Login</button>\r\n    </div>\r\n  </div>\r\n</form>";

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('results', {
    template: __webpack_require__(309),
    bindings: {
        sessionsByVoteDesc: '=allSessions'
    },
    controller: function () {
        this.$onInit = function () {
            this.sessionsByVoteDesc.sort(function (session1, session2) {
                // reverse order
                return session2.voteCount - session1.voteCount;
            });
        };
    }
});


/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports = "<nav></nav>\r\n<h1>Results</h1>\r\n\r\n<session-detail-with-votes session=\"session\" ng-repeat=\"session in $ctrl.sessionsByVoteDesc\"></session-detail-with-votes>\r\n\r\n";

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('createUsers', {
    template: __webpack_require__(311),
    bindings: {},
    controller: function (nameParser, users, toastr) {
        this.import = function () {
            var people = nameParser.parse(this.namesblob);
            people.forEach((function (person) {
                users.createNewUser({
                    email: person.email,
                    password: "pass",
                    firstName: person.firstName,
                    lastName: person.lastName
                }).catch(function (error) {
                    toastr.error("User already exists: " + person.email);
                }.bind(this));
            }).bind(this));
            toastr.success("Users Created!");
        };
    }
});


/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports = "<nav></nav>\r\n\r\n<h1>Create Users</h1>\r\n<p>Enter Email Addresses here. One on each line, First and Last Name Pipe Separated</p>\r\n<textarea name=\"emailAddresses\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\" \r\n  placeholder=\"Email Addresses\" ng-model=\"$ctrl.namesblob\"></textarea>\r\n<br>\r\n<button class=\"btn btn-primary\" ng-click=\"$ctrl.import()\">Create Users</button>\r\n";

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('userList', {
    template: __webpack_require__(313),
    bindings: {
        users: '=allUsers'
    },
    controller: function () {
        this.$onInit = function () {
            this.users.sort(function (user1, user2) {
                if (user1.firstName < user2.firstName)
                    return -1;
                if (user1.firstName === user2.firstName)
                    return 0;
                if (user1.firstName > user2.firstName)
                    return 1;
            });
        };
    }
});


/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "<nav></nav>\r\n<h1>User List</h1>\r\n\r\n<a ng-href=\"#/admin/users/{{user.id}}\" zoom-in \r\n  class=\"btn btn-primary btn-spaced\" \r\n  ng-repeat=\"user in $ctrl.users\">\r\n  {{user.firstName}}\r\n  {{user.lastName}}\r\n</a>\r\n";

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('userDetails', {
    template: __webpack_require__(315),
    bindings: {
        allUsers: '='
    },
    controller: function ($routeParams) {
        this.$onInit = function () {
            this.user = this.allUsers.find(function (user) {
                return user.id === parseInt($routeParams.id);
            });
        };
    }
});


/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<nav></nav>\r\n<div class=\"jumbotron\">\r\n  <h1>{{$ctrl.user.firstName}} {{$ctrl.user.lastName}}\r\n    <span class=\"badge\" ng-show=\"$ctrl.user.isAdmin\">Admin</span>\r\n  </h1>\r\n  <p>{{$ctrl.user.email}}</p>\r\n</div>";

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('nav', {
    template: __webpack_require__(317),
    bindings: {},
    controller: function (currentIdentity, unreviewedSessionCount) {
        this.currentUser = currentIdentity.currentUser;
        unreviewedSessionCount.updateUnreviewedSessionCount();
        this.unreviewedSessionCount = unreviewedSessionCount;
    }
});


/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<div \r\n  class=\"navbar navbar-fixed-top navbar-inverse\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\"><a href=\"/\" class=\"navbar-brand\">Lightning Talks</a></div>\r\n    <div class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a href=\"#/\">Home <span class=\"badge\">{{$ctrl.unreviewedSessionCount.value}}</span> </a></li>\r\n        <li><a href=\"#/createsession\">Create Session</a></li>\r\n        <li><a href=\"#/profile\">Profile</a></li>\r\n        <li><a href=\"#/admin/createusers\" ng-show=\"$ctrl.currentUser.isAdmin\">Create Users</a></li>\r\n        <li><a href=\"#/admin/results\" ng-show=\"$ctrl.currentUser.isAdmin\">Results</a></li>\r\n        <li><a href=\"#/users\" ng-show=\"$ctrl.currentUser.isAdmin\">Users</a></li>\r\n        <li><a href=\"#/logout\">Logout</a></li>\r\n      </ul>\r\n      \r\n      <ul class=\"nav navbar-right navbar nav\">\r\n        <li class=\"navbar-text\">\r\n          Welcome {{$ctrl.currentUser.firstName}} {{$ctrl.currentUser.lastName}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

angular.module('app').component('logout', {
    controller: function ($location, auth) {
        auth.logout();
        $location.path('/login');
    }
});


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('login', {
    template: __webpack_require__(320),
    bindings: {},
    controller: class LoginCtrl {
        constructor($location, currentIdentity, auth, toastr) {
            this.$location = $location;
            this.auth = auth;
            this.toastr = toastr;
            if (currentIdentity.authenticated()) {
                $location.path('/home');
            }
        }
        login() {
            this.auth.login({
                username: this.email,
                password: "pass"
            }).then(() => {
                this.$location.path('/home');
            }, (err) => {
                this.toastr.error(err);
            });
        }
    }
});


/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<h1>Please Login</h1>\r\n\r\n<p>Enter your attendee email address</p>\r\n<form class=\"form\">\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-sm-6\">\r\n      <input type=\"text\" autofocus placeholder=\"Email Address\" ng-model=\"$ctrl.email\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <button class=\"btn btn-primary\" ng-click=\"$ctrl.login()\">Login</button>\r\n    </div>\r\n  </div>\r\n</form>";

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

angular.module('app').service('auth', class Auth {
    constructor($q, $http, currentIdentity) {
        this.$q = $q;
        this.$http = $http;
        this.currentIdentity = currentIdentity;
    }
    login(credentials) {
        var dfd = this.$q.defer();
        this.$http.post('/api/login', credentials).then(response => {
            this.currentIdentity.setUser(response.data.user);
            dfd.resolve();
        }, response => {
            dfd.reject("Invalid Credentials");
        });
        return dfd.promise;
    }
    logout() {
        var dfd = this.$q.defer();
        this.$http.post('/api/logout').then(response => {
            this.currentIdentity.clearUser();
            dfd.resolve();
        }, response => {
            dfd.reject("Error Logging Out");
        });
        return dfd.promise;
    }
    waitForAuth() {
        var dfd = this.$q.defer();
        this.$http.get('/api/currentIdentity').then(response => {
            if (!!response.data) {
                this.currentIdentity.setUser(response.data);
            }
            dfd.resolve(this.currentIdentity);
        });
        return dfd.promise;
    }
    requireLogin() {
        return this.waitForAuth().then(() => {
            if (this.currentIdentity.authenticated()) {
                return true;
            }
            else {
                return this.$q.reject('AUTH_REQUIRED');
            }
        });
    }
    requireAdmin() {
        return this.waitForAuth().then(() => {
            if (this.currentIdentity.authenticated() && this.currentIdentity.currentUser.isAdmin) {
                return true;
            }
            else {
                return this.$q.reject('AUTH_REQUIRED');
            }
        });
    }
});


/***/ }),

/***/ 322:
/***/ (function(module, exports) {

angular.module('app').service('currentIdentity', class CurrentIdentity {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.currentUser = null;
    }
    setUser(user) {
        this.currentUser = user;
    }
    clearUser() {
        this.currentUser = null;
    }
    authenticated() {
        return !!this.currentUser;
    }
    updateUser(newUserObj) {
        var dfd = this.$q.defer();
        this.$http.put('/api/users/' + this.currentUser.id, newUserObj).then(response => {
            this.currentUser.firstName = newUserObj.firstName;
            this.currentUser.lastName = newUserObj.lastName;
            dfd.resolve();
        }, response => {
            dfd.reject("Error Logging Out");
        });
        return dfd.promise;
    }
});


/***/ }),

/***/ 323:
/***/ (function(module, exports) {

angular.module('app').service('users', class Users {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    createNewUser(newUser) {
        return this.$http.post('/api/users', newUser);
    }
    getAllUsers() {
        var dfd = this.$q.defer();
        this.$http.get('/api/users').then(response => {
            dfd.resolve(response.data);
        });
        return dfd.promise;
    }
});


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('home', {
    template: __webpack_require__(325),
    bindings: {
        userSessions: '='
    },
    controller: function (currentIdentity, sessions, sessions_v2, toastr, unreviewedSessionCount) {
        this.currentUser = currentIdentity.currentUser;
        this.setNextSessionToReview = function () {
            sessions_v2.getNextUnreviewedSession(currentIdentity.currentUser.id).then((data) => {
                this.currentSessionToReview = data;
            });
        };
        this.setNextSessionToReview();
        this.voteYes = function () {
            sessions_v2.incrementVote(this.currentSessionToReview.id)
                .then(() => sessions_v2.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id))
                .then(function () {
                this.setNextSessionToReview();
                // pull updated value
                unreviewedSessionCount.updateUnreviewedSessionCount();
            }.bind(this));
        };
        this.voteNo = function () {
            sessions_v2.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
                .then(function () {
                this.setNextSessionToReview();
                // pull updated value
                unreviewedSessionCount.updateUnreviewedSessionCount();
            }.bind(this));
        };
    }
});


/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<nav></nav>\r\n\r\n<h2 style=\"margin-top:30px\">Unreviewed Sessions</h2>\r\n<unreviewed-talk [session]=\"$ctrl.currentSessionToReview\" (vote-no)=\"$ctrl.voteNo()\" (vote-yes)=\"$ctrl.voteYes()\"></unreviewed-talk>\r\n<hr style=\"margin-top:20px\">\r\n<h3>Your Sessions\r\n<a zoom-in class=\"btn btn-primary btn-xs\" href=\"#/createsession\">Create a New Session</a>\r\n</h3>\r\n\r\n<div ng-repeat=\"session in $ctrl.userSessions\">\r\n  <session-detail session=\"session\" initial-collapsed=\"true\"></session-detail>\r\n</div>\r\n";

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('createNewSession', {
    template: __webpack_require__(327),
    bindings: {
        userSessions: '='
    },
    controller: function (toastr, currentIdentity, sessions_v2) {
        this.create = function () {
            let newUserSession = {
                title: this.title,
                length: parseInt(this.length),
                abstract: this.abstract,
                userFirstName: currentIdentity.currentUser.firstName,
                userLastName: currentIdentity.currentUser.lastName,
                userId: currentIdentity.currentUser.id,
            };
            sessions_v2.createNewSession(newUserSession).then(function (data) {
                this.userSessions.push(data);
            }.bind(this));
        };
    }
});


/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "<nav></nav>\r\n\r\n<h1>Create New Session</h1>\r\n\r\n<form class=\"form\">\r\n  <div class=\"form-group\">\r\n    Give your session a title\r\n    <input required type=\"text\" placeholder=\"Title\" ng-model=\"$ctrl.title\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    Enter a length, from 2 minutes to 30 minutes\r\n    <input required type=\"number\" placeholder=\"Length in Minutes\" \r\n      ng-model=\"$ctrl.length\" class=\"form-control\" min=\"2\" max=\"30\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    Describe your session\r\n    <textarea required name=\"\" id=\"\" cols=\"30\" rows=\"4\" \r\n      ng-model=\"$ctrl.abstract\" class=\"form-control\"\r\n      placeholder=\"Abstract\"></textarea>\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <button class=\" btn btn-primary btn-sm\" ng-click=\"$ctrl.create()\">Create</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<h2>Your Other Sessions</h2>\r\n<div ng-repeat=\"session in $ctrl.userSessions\">\r\n  <session-detail session=\"session\" initial-collapsed=\"false\"></session-detail>\r\n</div>";

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
    constructor(sessions_v2, currentIdentity) {
        this.sessions_v2 = sessions_v2;
        this.currentIdentity = currentIdentity;
        this.value = 0;
        sessions_v2;
        currentIdentity;
    }
    updateUnreviewedSessionCount() {
        this.sessions_v2.getUnreviewedCount(this.currentIdentity.currentUser.id)
            .then(data => {
            this.value = data.count;
        });
    }
});


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('sessionDetail', {
    template: __webpack_require__(331),
    bindings: {
        session: '=',
        initialCollapsed: '@'
    },
    controller: function () {
    }
});


/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "<detail-panel collapsed=\"{{$ctrl.initialCollapsed}}\" title=\"{{$ctrl.session.title}}\">\r\n  <strong>{{$ctrl.session.length | talkDuration}}</strong>\r\n  <p><small>{{$ctrl.session.abstract}}</small></p>  \r\n</detail-panel>\r\n";

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('sessionDetailWithVotes', {
    template: __webpack_require__(333),
    bindings: {
        session: '=',
        initialCollapsed: '@'
    },
    controller: function () {
    }
});


/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "<detail-panel collapsed=\"{{$ctrl.initialCollapsed}}\" title=\"{{$ctrl.session.title}}\">\r\n  <strong>{{$ctrl.session.voteCount}} votes</strong>\r\n  <p>{{$ctrl.session.length | talkDuration}}</p>\r\n  <p><small>{{$ctrl.session.abstract}}</small></p>  \r\n</detail-panel>\r\n";

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

angular.module('app').component('detailPanel', {
    transclude: true,
    template: __webpack_require__(335),
    bindings: {
        title: '@',
        initialCollapsed: '@collapsed'
    },
    controller: function () {
        this.collapsed = (this.initialCollapsed === 'true');
        this.collapse = function () {
            this.collapsed = !this.collapsed;
        };
    }
});


/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading pointable\" ng-click=\"$ctrl.collapse()\">\r\n    <span>{{$ctrl.title}}</span>\r\n  </div>\r\n  <div class=\"panel-body\" ng-hide=\"$ctrl.collapsed\" ng-transclude>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

angular.module('app').directive('zoomIn', function () {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {
            el.on('mouseenter', function () {
                el[0].style.transform = "scale(1.1,1.1)";
            });
            el.on('mouseleave', function () {
                el[0].style.transform = "scale(1,1)";
            });
        }
    };
});


/***/ })

},[302]);
//# sourceMappingURL=ng1.bundle.js.map