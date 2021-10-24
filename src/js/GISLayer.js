var GL = {
    Map:false,
    MapView:false,
    WebTileLayer:false,
    TileLayer:false,
    Basemap:false,
    SceneView:false,
    map:false,
    view:false,
};

GL.addXYZTileBasemap = function(obj){
    var id = "layer"+Date.now();
    const mapBaseLayer = new GL.WebTileLayer({
      urlTemplate: obj.url,
      subDomains: obj.subdomains,
      copyright:obj.attribute|| 'Custom Tiles',
      title: "New XYZ Tile Layer",
      id: id,
    });
    GL.map.add(mapBaseLayer);
}

GL.addTileLayerFromMapServer = function(obj){
  if(!obj.url || !obj.layerId || !obj.opacity || !obj.name){
    alert('Missed Some Parameters!');
  }else{
    var opacity = parseFloat(obj.opacity);
    
    const TileLayer = new GL.TileLayer({
      url: obj.url,
      id: obj.layerId,
      title: obj.name,
      opacity:opacity
    });

    GL.map.add(TileLayer);

    if(obj['zoom']!==undefined){
      if(obj.zoom){
        GL.view.when(() => {
          TileLayer.when(() => {
            GL.view.goTo(TileLayer.fullExtent)
            .catch((error) => {
              console.error(error);
            });
          });
        });
      }
    }
  }
}