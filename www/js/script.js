var app = angular.module('MyApp', []);
app.controller('MyCont', function($scope, $http)
{
    // Initialization of the scope variables. 
 
    $scope.cityName = "Your City";
    $scope.tmp = 0;
    $scope.minTemp = 0;
    $scope.maxTemp = 0;
    
    // Logic for the On-Click event.
 
    $scope.funGet = function()
    {
        getCurrentLocationW();

        var url = "http://api.openweathermap.org/data/2.5/weather?lat=40.51&lon=-88.98&cnt=10&units=imperial&appid=fe86391876b5743ec345451ac2e8d423";
        $http.get(url)
        .success(function(response)
        {
            
            $scope.imgWidth = 150;
            $scope.imgHeight = 150;
            $scope.wtData = response.coord;
            $scope.ct = response.name;
            $scope.tmp = response.main.temp;
            $scope.minTemp = response.main.temp_min;
            $scope.maxTemp = response.main.temp_max;
            $scope.hmdy = response.main.humidity;
            $scope.imgCode = response.weather[0].icon;
        });
    }
});

function getCurrentLocation()
{
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function getCurrentLocationW()
{
    navigator.geolocation.getCurrentPosition(onSuccessW, onError);
}

function onSuccess(position)
{
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    var timestamp = position.timestamp;

    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("long").innerHTML = longitude;
}

function onSuccessW(position)
{
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    var timestamp = position.timestamp;

    document.getElementById("foo").innerHTML = latitude;
    document.getElementById("bar").innerHTML = longitude;
}

function onError(error)
{
    alert("code: " + error.code + 
        "message: " + error.message);
}