var GL = {
    Map:false,
    MapView:false,
    WebTileLayer:false,
    TileLayer:false,
    Basemap:false,
    SceneView:false,
    GraphicsLayer:false,
    Extent:false,
    SpatialReference:false,
    Graphic:false,
    map:false,
    view:false,
    layers:{},
    colors:['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#ff5722', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#03a9f4', '#795548', '#9e9e9e', '#607d8b'],

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

GL.removeLayer = function(id){
  if(GL.layers[id]!==undefined){
    GL.map.remove(GL.layers[id]);
  }
  delete GL.layers[id];
}

GL.addGeoJSONToMap = function(obj){
  debugger;
  if(GL.layers[obj.id]==undefined){
    GL.layers[obj.id] = new GL.GraphicsLayer();
    GL.map.add(GL.layers[obj.id]);
    var data = GL.geoJSONToArcgisGeoData(obj.geojson,obj.color);
    data.map(function(d){
      GL.layers[obj.id].add(d)
    });
  }
  debugger;
  var bbox = turf.bbox(obj.geojson);
  var boundingBox = new GL.Extent(bbox[0], bbox[1], bbox[2], bbox[3]);
  GL.layers[obj.id].when(() => {
    debugger;
    GL.view.goTo(boundingBox);
  })
}

GL.geoJSONToArcgisGeoData = function(geojson,color){
  var newArr = [];
  var popupTemplate ={
    title:"{type}",
    content:"{content}"
  };
  geojson.features.map(function(feature,row){
    var geo = false;
    var style = false;
    var attr = feature.properties;
    var attrArry = [];
    for(var i in attr){
      if(typeof attr[i]!=='object'){
        var title = i.toUpperCase();
        attrArry.push('<tr><th>'+title+'</th><td>'+attr[i]+'</td></tr>');
      }
    }
    if(feature.geometry!==null && feature.geometry!==undefined){
      console.log(row)
      if(feature.geometry.type!==undefined){
        switch(feature.geometry.type){
          case "MultiPoint":{
            geo = {
              type: "point",
              longitude:feature.geometry.coordinates[0][0],
              latitude: feature.geometry.coordinates[0][1]
            }
            style = {
              type: "simple-marker",
              color: color,
              outline: {
                  color: color,
                  width: 1
              }
            };
            break;
          }
          case "Point":{
            geo = {
              type: "point",
              longitude:feature.geometry.coordinates[0],
              latitude: feature.geometry.coordinates[1]
            }
            style = {
              type: "simple-marker",
              color: color,
              outline: {
                  color: color,
                  width: 1
              }
            };
            break;
          }
          case "LineString":{
            geo = {
              type: "polyline",
              paths:feature.geometry.coordinates
            }
            style = {
              type: "simple-line",
              color: color,
              width: 2
            };
            break;
          }
          case "MultiLineString":{
            geo = {
              type: "polyline",
              paths:feature.geometry.coordinates[0]
            }
            style = {
              type: "simple-line",
              color: color,
              width: 2
            };
            break;
          }
          case "Polygon":{
            geo = {
              type: "polygon",
              rings:feature.geometry.coordinates[0]
            }
            style = {
              type: "simple-fill",
              color: color,
              outline: {
                color: "#000",
                width: 1
              }
            };
            break;
          }
          case "MultiPolygon":{
            geo = {
              type: "polygon",
              rings:feature.geometry.coordinates[0][0]
            }
            style = {
              type: "simple-fill",
              color: color,
              outline: {
                color: "#000",
                width: 1
              }
            };
            break;
          }
          
        }
        if(geo!==false && style!==false){
          var table="<table class=\"table is-bordered is-striped is-narrow is-hoverable is-fullwidth\"><thead><tr><th>Property</th><th>Value</th></tr></thead><tbody>"+attrArry.join('')+"</tbody></table>";
          var geom = new GL.Graphic({
            geometry: geo,
            symbol: style,
            attributes:{
              type:feature.geometry.type,
              content:table
            },
            popupTemplate:popupTemplate
         });
         newArr.push(geom);
        }
      }
      
     
    }
    
  });
  return newArr;
}

GL.setCenterAndZoom = function(center,zoom){
  GL.view.goTo({
    center:center,
    zoom:zoom
  });
}


GL.getAddressFromLocation = function(obj){
  debugger;
  var lat = parseFloat(obj.lat);
  var lng = parseFloat(obj.lng);

  GL.view.popup.open({
    title: "Clicked Position: [" + lng.toFixed(3) + ", " + lat.toFixed(3) + "]",
    location: {latitude:lat,longitude:lng}
  });

  const params = {
    location:{
      latitude:lat,
      longitude:lng
    }
  }

  const locatorTask = new GL.Locator({
    url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
  });

  locatorTask
    .locationToAddress(params)
    .then((response) => {
      debugger;
      GL.view.popup.content = response.address;
    })
    .catch(() => {
      debugger;
      GL.view.popup.content = "Adres is't found for this location";
    });
}