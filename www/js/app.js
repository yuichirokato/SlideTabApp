angular.module('slideTabApp', ['ionic', 'slideTabApp.controller', 'slideTabApp.services', 'tabSlideBox']).value("$initConstant", {
  'tagNames': ["swift", "scala", "ios", "android", "haskell", "python", "coffeescript", "nginx", "shellscript", "git"],
  'qiitaApiEndPoint': "https://qiita.com/api/v1"
}).run(function($ionicPlatform, $data, $initConstant) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  setTimeout(function() {
    $initConstant.tagNames.forEach(function(tag) {
      var apiPath, res;
      apiPath = "/tags/" + tag + "/items";
      res = $data.feedRead($initConstant.qiitaApiEndPoint + apiPath);
      res.success(function(data) {
        console.log('tag is: ' + tag);
        window.localStorage.setItem(tag, JSON.stringify(data));
        if (tag === "git") {
          navigator.splashscreen.hide();
        }
      }).error(function(data, status, headers, config) {
        alert('error! statuscode: ' + status);
      });
    });
  }, 5000);
}).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('tabs', {
    url: "/tabs",
    templateUrl: "templates/tabs.html",
    controller: 'AppController'
  });
  $urlRouterProvider.otherwise('/tabs');
});

angular.module('slideTabApp.controller', []).controller('AppController', [
  "$scope", '$location', function($scope, $location) {
    $scope.tabItems = [
      {
        text: "Swift"
      }, {
        text: "Scala"
      }, {
        text: "iOS"
      }, {
        text: "Android"
      }, {
        text: "Haskell"
      }, {
        text: "Python"
      }, {
        text: "CoffeeScript"
      }, {
        text: "nginx"
      }, {
        text: "ShellScript"
      }, {
        text: "Git"
      }
    ];
  }
]).controller('SwiftController', function($scope, $data) {
  var callAPIUrl, posts;
  callAPIUrl = "https://qiita.com/api/v1/tags/swift/items";
  posts = JSON.parse(window.localStorage.getItem("swift"));
  console.log("posts = " + posts);
  $scope.articles = posts;
  $scope.showArticle = function(index) {
    var article;
    article = $scope.articles[index];
    window.open(article.url, "_blank", "location=no");
  };
  $scope.populateList = function() {
    var res;
    res = $data.feedRead(callAPIUrl);
    res.success(function(data) {
      $scope.articles = data;
    }).error(function(data, status, header, config) {
      alert('error! status code: ' + status);
    })["finally"](function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
}).controller("ScalaController", function($scope, $data) {
  var callAPIUrl, posts;
  callAPIUrl = "https://qiita.com/api/v1/tags/scala/items";
  posts = JSON.parse(window.localStorage.getItem("scala"));
  $scope.articles = posts;
  $scope.showArticle = function(index) {
    var article;
    article = $scope.articles[index];
    window.open(article.url, "_blank", "location=no");
  };
  $scope.populateList = function() {
    var res;
    res = $data.feedRead(callAPIUrl);
    res.success(function(data) {
      $scope.articles = data;
    }).error(function(data, status, header, config) {
      alert('error! status code: ' + status);
    })["finally"](function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
}).controller("iOSController", function($scope, $data) {
  var callAPIUrl, posts;
  callAPIUrl = "https://qiita.com/api/v1/tags/ios/items";
  posts = JSON.parse(window.localStorage.getItem("ios"));
  $scope.articles = posts;
  $scope.showArticle = function(index) {
    var article;
    article = $scope.articles[index];
    window.open(article.url, "_blank", "location=no");
  };
  $scope.populateList = function() {
    var res;
    res = $data.feedRead(callAPIUrl);
    res.success(function(data) {
      $scope.articles = data;
    }).error(function(data, status, header, config) {
      alert('error! status code: ' + status);
    })["finally"](function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
}).controller("AndroidController", function($scope, $data) {
  var callAPIUrl, posts;
  callAPIUrl = "https://qiita.com/api/v1/tags/android/items";
  posts = JSON.parse(window.localStorage.getItem("android"));
  $scope.articles = posts;
  $scope.showArticle = function(index) {
    var article;
    article = $scope.articles[index];
    window.open(article.url, "_blank", "location=no");
  };
  $scope.populateList = function() {
    var res;
    res = $data.feedRead(callAPIUrl);
    res.success(function(data) {
      $scope.articles = data;
    }).error(function(data, status, header, config) {
      alert('error! status code: ' + status);
    })["finally"](function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
}).controller("HaskellController", function($scope, $data) {
  var callAPIUrl, posts;
  callAPIUrl = "https://qiita.com/api/v1/tags/haskell/items";
  posts = JSON.parse(window.localStorage.getItem("haskell"));
  $scope.articles = posts;
  $scope.showArticle = function(index) {
    var article;
    article = $scope.articles[index];
    window.open(article.url, "_blank", "location=no");
  };
  $scope.populateList = function() {
    var res;
    res = $data.feedRead(callAPIUrl);
    res.success(function(data) {
      $scope.articles = data;
    }).error(function(data, status, header, config) {
      alert('error! status code: ' + status);
    })["finally"](function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
}).controller("PythonController", function($scope, $data) {
  var callAPIUrl, posts;
  callAPIUrl = "https://qiita.com/api/v1/tags/python/items";
  posts = JSON.parse(window.localStorage.getItem("python"));
  $scope.articles = posts;
  $scope.showArticle = function(index) {
    var article;
    article = $scope.articles[index];
    window.open(article.url, "_blank", "location=no");
  };
  $scope.populateList = function() {
    var res;
    res = $data.feedRead(callAPIUrl);
    res.success(function(data) {
      $scope.articles = data;
    }).error(function(data, status, header, config) {
      alert('error! status code: ' + status);
    })["finally"](function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
}).controller("CoffeeScriptController", function($scope, $data) {
  var callAPIUrl, posts;
  callAPIUrl = "https://qiita.com/api/v1/tags/coffeescript/items";
  posts = JSON.parse(window.localStorage.getItem("coffeescript"));
  $scope.articles = posts;
  $scope.showArticle = function(index) {
    var article;
    article = $scope.articles[index];
    window.open(article.url, "_blank", "location=no");
  };
  $scope.populateList = function() {
    var res;
    res = $data.feedRead(callAPIUrl);
    res.success(function(data) {
      $scope.articles = data;
    }).error(function(data, status, header, config) {
      alert('error! status code: ' + status);
    })["finally"](function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
}).controller("nginxController", function($scope, $data) {
  var callAPIUrl, posts;
  callAPIUrl = "https://qiita.com/api/v1/tags/nginx/items";
  posts = JSON.parse(window.localStorage.getItem("nginx"));
  $scope.articles = posts;
  $scope.showArticle = function(index) {
    var article;
    article = $scope.articles[index];
    window.open(article.url, "_blank", "location=no");
  };
  $scope.populateList = function() {
    var res;
    res = $data.feedRead(callAPIUrl);
    res.success(function(data) {
      $scope.articles = data;
    }).error(function(data, status, header, config) {
      alert('error! status code: ' + status);
    })["finally"](function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
}).controller("ShellScriptController", function($scope, $data) {
  var callAPIUrl, posts;
  callAPIUrl = "https://qiita.com/api/v1/tags/shellscript/items";
  posts = JSON.parse(window.localStorage.getItem("shellscript"));
  $scope.articles = posts;
  $scope.showArticle = function(index) {
    var article;
    article = $scope.articles[index];
    window.open(article.url, "_blank", "location=no");
  };
  $scope.populateList = function() {
    var res;
    res = $data.feedRead(callAPIUrl);
    res.success(function(data) {
      $scope.articles = data;
    }).error(function(data, status, header, config) {
      alert('error! status code: ' + status);
    })["finally"](function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
}).controller("GitController", function($scope, $data) {
  var callAPIUrl, posts;
  callAPIUrl = "https://qiita.com/api/v1/tags/git/items";
  posts = JSON.parse(window.localStorage.getItem("git"));
  $scope.articles = posts;
  $scope.showArticle = function(index) {
    var article;
    article = $scope.articles[index];
    window.open(article.url, "_blank", "location=no");
  };
  $scope.populateList = function() {
    var res;
    res = $data.feedRead(callAPIUrl);
    res.success(function(data) {
      $scope.articles = data;
    }).error(function(data, status, header, config) {
      alert('error! status code: ' + status);
    })["finally"](function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
});

angular.module('slideTabApp.services', []).factory('$data', [
  '$http', function($http) {
    var data;
    data = {};
    data.feedRead = function(url) {
      return $http.get(url);
    };
    return data;
  }
]);
