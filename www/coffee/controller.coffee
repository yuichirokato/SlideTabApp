angular.module('slideTabApp.controller', [])

.controller('AppController', ["$scope", '$location', ($scope, $location) ->

    $scope.tabItems = [
      {text: "Swift"}
      {text: "Scala"}
      {text: "iOS"}
      {text: "Android"}
      {text: "Haskell"}
      {text: "Python"}
      {text: "CoffeeScript"}
      {text: "nginx"}
      {text: "ShellScript"}
      {text: "Git"}
    ]

#    $scope.onSlideMove = (data) ->
#      index = data.index
#      if index is 0
#        $location.path('#/tabs/swift');
#      else if index is 1
#        $location.path('#/tabs/scala');
#      else if index is 2
#        $location.path('#/tabs/ios');
#      else
#        $location.path('#/tabs/android');
#      return

    return
  ])

.controller('SwiftController', ($scope, $data) ->
  callAPIUrl = "https://qiita.com/api/v1/tags/swift/items"
  posts = JSON.parse(window.localStorage.getItem("swift"))
  console.log("posts = " + posts)
  $scope.articles = posts

  $scope.showArticle = (index) ->
    article = $scope.articles[index]
    window.open(article.url, "_blank", "location=no")
    return

  $scope.populateList = () ->
    res = $data.feedRead(callAPIUrl)
    res.success((data) ->
      $scope.articles = data
      return
    ).error((data, status, header, config) ->
      alert('error! status code: ' + status)
      return
    ).finally(() ->
      $scope.$broadcast('scroll.refreshComplete')
      return
    )
    return

  return
)
.controller("ScalaController", ($scope, $data) ->
  callAPIUrl = "https://qiita.com/api/v1/tags/scala/items"
  posts = JSON.parse(window.localStorage.getItem("scala"))
  $scope.articles = posts

  $scope.showArticle = (index) ->
    article = $scope.articles[index]
    window.open(article.url, "_blank", "location=no")
    return

  $scope.populateList = () ->
    res = $data.feedRead(callAPIUrl)
    res.success((data) ->
      $scope.articles = data
      return
    ).error((data, status, header, config) ->
      alert('error! status code: ' + status)
      return
    ).finally(() ->
      $scope.$broadcast('scroll.refreshComplete')
      return
    )
    return

  return
)

.controller("iOSController", ($scope, $data) ->
  callAPIUrl = "https://qiita.com/api/v1/tags/ios/items"
  posts = JSON.parse(window.localStorage.getItem("ios"))
  $scope.articles = posts

  $scope.showArticle = (index) ->
    article = $scope.articles[index]
    window.open(article.url, "_blank", "location=no")
    return

  $scope.populateList = () ->
    res = $data.feedRead(callAPIUrl)
    res.success((data) ->
      $scope.articles = data
      return
    ).error((data, status, header, config) ->
      alert('error! status code: ' + status)
      return
    ).finally(() ->
      $scope.$broadcast('scroll.refreshComplete')
      return
    )
    return

  return
)

.controller("AndroidController", ($scope, $data) ->
  callAPIUrl = "https://qiita.com/api/v1/tags/android/items"
  posts = JSON.parse(window.localStorage.getItem("android"))
  $scope.articles = posts

  $scope.showArticle = (index) ->
    article = $scope.articles[index]
    window.open(article.url, "_blank", "location=no")
    return

  $scope.populateList = () ->
    res = $data.feedRead(callAPIUrl)
    res.success((data) ->
      $scope.articles = data
      return
    ).error((data, status, header, config) ->
      alert('error! status code: ' + status)
      return
    ).finally(() ->
      $scope.$broadcast('scroll.refreshComplete')
      return
    )
    return

  return
)
.controller("HaskellController", ($scope, $data) ->
  callAPIUrl = "https://qiita.com/api/v1/tags/haskell/items"
  posts = JSON.parse(window.localStorage.getItem("haskell"))
  $scope.articles = posts

  $scope.showArticle = (index) ->
    article = $scope.articles[index]
    window.open(article.url, "_blank", "location=no")
    return

  $scope.populateList = () ->
    res = $data.feedRead(callAPIUrl)
    res.success((data) ->
      $scope.articles = data
      return
    ).error((data, status, header, config) ->
      alert('error! status code: ' + status)
      return
    ).finally(() ->
      $scope.$broadcast('scroll.refreshComplete')
      return
    )
    return

  return
)
.controller("PythonController", ($scope, $data) ->
  callAPIUrl = "https://qiita.com/api/v1/tags/python/items"
  posts = JSON.parse(window.localStorage.getItem("python"))
  $scope.articles = posts

  $scope.showArticle = (index) ->
    article = $scope.articles[index]
    window.open(article.url, "_blank", "location=no")
    return

  $scope.populateList = () ->
    res = $data.feedRead(callAPIUrl)
    res.success((data) ->
      $scope.articles = data
      return
    ).error((data, status, header, config) ->
      alert('error! status code: ' + status)
      return
    ).finally(() ->
      $scope.$broadcast('scroll.refreshComplete')
      return
    )
    return

  return
)
.controller("CoffeeScriptController", ($scope, $data) ->
  callAPIUrl = "https://qiita.com/api/v1/tags/coffeescript/items"
  posts = JSON.parse(window.localStorage.getItem("coffeescript"))
  $scope.articles = posts

  $scope.showArticle = (index) ->
    article = $scope.articles[index]
    window.open(article.url, "_blank", "location=no")
    return

  $scope.populateList = () ->
    res = $data.feedRead(callAPIUrl)
    res.success((data) ->
      $scope.articles = data
      return
    ).error((data, status, header, config) ->
      alert('error! status code: ' + status)
      return
    ).finally(() ->
      $scope.$broadcast('scroll.refreshComplete')
      return
    )
    return

  return
)
.controller("nginxController", ($scope, $data) ->
  callAPIUrl = "https://qiita.com/api/v1/tags/nginx/items"
  posts = JSON.parse(window.localStorage.getItem("nginx"))
  $scope.articles = posts

  $scope.showArticle = (index) ->
    article = $scope.articles[index]
    window.open(article.url, "_blank", "location=no")
    return

  $scope.populateList = () ->
    res = $data.feedRead(callAPIUrl)
    res.success((data) ->
      $scope.articles = data
      return
    ).error((data, status, header, config) ->
      alert('error! status code: ' + status)
      return
    ).finally(() ->
      $scope.$broadcast('scroll.refreshComplete')
      return
    )
    return

  return
)
.controller("ShellScriptController", ($scope, $data) ->
  callAPIUrl = "https://qiita.com/api/v1/tags/shellscript/items"
  posts = JSON.parse(window.localStorage.getItem("shellscript"))
  $scope.articles = posts

  $scope.showArticle = (index) ->
    article = $scope.articles[index]
    window.open(article.url, "_blank", "location=no")
    return

  $scope.populateList = () ->
    res = $data.feedRead(callAPIUrl)
    res.success((data) ->
      $scope.articles = data
      return
    ).error((data, status, header, config) ->
      alert('error! status code: ' + status)
      return
    ).finally(() ->
      $scope.$broadcast('scroll.refreshComplete')
      return
    )
    return

  return
)
.controller("GitController", ($scope, $data) ->
  callAPIUrl = "https://qiita.com/api/v1/tags/git/items"
  posts = JSON.parse(window.localStorage.getItem("git"))
  $scope.articles = posts

  $scope.showArticle = (index) ->
    article = $scope.articles[index]
    window.open(article.url, "_blank", "location=no")
    return

  $scope.populateList = () ->
    res = $data.feedRead(callAPIUrl)
    res.success((data) ->
      $scope.articles = data
      return
    ).error((data, status, header, config) ->
      alert('error! status code: ' + status)
      return
    ).finally(() ->
      $scope.$broadcast('scroll.refreshComplete')
      return
    )
    return

  return
)