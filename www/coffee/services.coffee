angular.module('slideTabApp.services', [])
.factory('$data', ['$http', ($http) ->
    data = {}

    data.feedRead = (url) -> $http.get(url)

    return data

  ])