var map;
var latitude, longitude;
var NElat, NElng, SWlat, SElng;
var imageMap;
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
    imageMap = document.getElementById("geomapimg")
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
    map.addListener("tilesloaded",function(){
        NElat = map.getBounds().getNorthEast().lat();
        NElng = map.getBounds().getNorthEast().lng();
        SWlat = map.getBounds().getSouthWest().lat();
        SWlng = map.getBounds().getSouthWest().lng();
        initGeoMap();
        map.addListener("bounds_changed", function(){
            NElat = map.getBounds().getNorthEast().lat();
            NElng = map.getBounds().getNorthEast().lng();
            SWlat = map.getBounds().getSouthWest().lat();
            SWlng = map.getBounds().getSouthWest().lng();
            drawImg();
        });
    });
    

}

