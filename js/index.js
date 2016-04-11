var map;
var latitude, longitude;
function getLocation() {
    if(window.navigator.geolocation){
        var option = {enableHighAccuracy : true};
        window.navigator.geolocation.getCurrentPosition(locationSuccess, locationError, option);
    }else{
        alert("不支持html5来获取地理位置信息。");
    }
}
function locationSuccess(position){
    //console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    initMap();
}
function locationError(error){
    console.log(error);
}
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 12
    });
    var label1 = document.createElement("div");
    label1.className = "labels";
    var canvas = document.createElement("canvas");
    canvas.width = 36;
    canvas.height = 36;
    addMap(canvas);
    label1.appendChild(canvas);
    document.body.appendChild(label1);
    map.addListener("zoom_changed", function(){
       //console.log(map.getBounds().getNorthEast());
       //console.log(map.getBounds().getSouthWest());
       imageSize.action(-1); 
    });
    imageSize.id = "geomapimg";
    imageSize.init();
}

