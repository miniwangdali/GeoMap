var geomap;
var geoCanvas;
var imageProperty = {
    path : "",
    id : "",
    width : 0,
    height : 0,
    NElat : 0,
    NElng : 0,
    SWlat : 0,
    SWlng : 0,
    center : {lat : 0, lng : 0},
    hUnit : 1,
    vUnit : 1,
    memo : ""
};
function initGeoMap(){ // shoud have a path parameter for image
    geomap = document.getElementById("geomap");
    geoCanvas = document.createElement("canvas");
    geomap.appendChild(geoCanvas);
    geoCanvas.style.width = "100%";
    geoCanvas.style.height = "100%";
    // should load picture property
    imageProperty.NElat = 50;
    imageProperty.NElng = -50;
    imageProperty.SWlat = 30;
    imageProperty.SWlng = -90;
    imageProperty.center.lat = (imageProperty.NElat + imageProperty.SWlat) / 2.0;
    imageProperty.center.lat = (imageProperty.NElng + imageProperty.SWlng) / 2.0;
    width = 3840.0;
    height = 2400.0;
    imageProperty.hUnit = width / Math.abs(imageProperty.SWlng - imageProperty.NElng);
    imageProperty.vUnit = height / Math.abs(imageProperty.NElat - imageProperty.SWlat)
    // ------------
    drawImg();
    
}
function drawImg(){
    var context = geoCanvas.getContext("2d");
    var sx = Math.abs(NElng - imageProperty.NElng) * imageProperty.hUnit;
    var sy = Math.abs(NElat - imageProperty.NElat) * imageProperty.vUnit;
    var sWidth = Math.abs(SWlng - NElng) * imageProperty.hUnit;
    var sHeight = Math.abs(NElat - SWlat) * imageProperty.vUnit;
    context.drawImage(imageMap, sx, sy, sWidth, sHeight, 0, 0, geoCanvas.width, geoCanvas.height);
}