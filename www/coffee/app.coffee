angular.module('slideTabApp', ['ionic', 'slideTabApp.controller', 'slideTabApp.services', 'tabSlideBox'])

.value("$initConstant",
  'tagNames': ["swift", "scala", "ios", "android", "haskell", "python", "coffeescript", "nginx", "shellscript", "git"]
  'qiitaApiEndPoint': "https://qiita.com/api/v1"
)

.run(($ionicPlatform, $data, $initConstant) ->
  $ionicPlatform.ready ->
    if window.cordova and window.cordova.plugins.Keyboard
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar true

    if window.StatusBar then StatusBar.styleDefault()
    return

  setTimeout(() ->
    $initConstant.tagNames.forEach((tag) ->
      apiPath = "/tags/" + tag + "/items"
      res = $data.feedRead($initConstant.qiitaApiEndPoint + apiPath)
      res.success((data) ->
        console.log('tag is: ' + tag)
        window.localStorage.setItem(tag, JSON.stringify(data))
        if tag is "git" then navigator.splashscreen.hide()
        return
      ).error((data, status, headers, config) ->
        alert('error! statuscode: ' + status)
        return
      )
      return
    )
    return
  ,5000)

  return
)

.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
  .state('tabs',
    url: "/tabs"
    templateUrl: "templates/tabs.html"
    controller: 'AppController'
  )

  $urlRouterProvider.otherwise('/tabs')

  return
