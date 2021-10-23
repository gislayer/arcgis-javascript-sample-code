var GL = {
    Map:false,
    MapView:false,
    WebTileLayer:false,
    Basemap:false,
    map:false,
    view:false,
};

GL.addXYZTileBasemap = function(obj){
    debugger;
    var id = "layer"+Date.now();

    const mapBaseLayer = new GL.WebTileLayer({
      urlTemplate: obj.url,
      subDomains: obj.subdomains,
      copyright:obj.attribute|| 'Custom Tiles',
      title: "New XYZ Tile Layer",
      id: "id",
    });

    GL.map.add(mapBaseLayer);
}