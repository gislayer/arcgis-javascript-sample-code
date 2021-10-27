require(["esri/Map","esri/layers/FeatureLayer"], (Map, FeatureLayer) => { 

    const featureLayer = new FeatureLayer({
        title:'layer1',
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/SF311/FeatureServer/0"
    });

    const table1 = new FeatureLayer({
        title:'table1',
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/SF311/FeatureServer/1"
    });

    //basemap
    const myMap = new Map({
        basemap: "streets-vector"
    });

    //allLayers
    const map = new Map({
        basemap: "streets-vector",
        allLayers:[featureLayer]
    });
    const foundLayer = map.allLayers.find(function(layer) {
        return layer.title === "layer1";
    });
    map.allLayers.on("change", function(event) {
        console.log("Layer added: ", event.added);
        console.log("Layer removed: ", event.removed);
        console.log("Layer moved: ", event.moved);
    });

    //allTables
    const map = new Map({
        basemap: "streets-vector",
        allLayers:[table1]
    });
    const foundLayer = map.allTables.find(function(table) {
        return table.title === "table1";
    });
    map.allTables.on("change", function(event) {
        console.log("Table added: ", event.added);
        console.log("Table removed: ", event.removed);
        console.log("Table moved: ", event.moved);
    });

    //ground 
    const map = new Map({
        basemap: "topo-vector",
        ground: "world-elevation"
    });

    //layers
    const map = new Map({
        basemap: "streets-vector",
        layers:[featureLayer]
    });
    var layers = map.layers;

    //tables
    const map = new Map({
        basemap: "streets-vector",
        tables:[table1]
    });
    var tables = map.tables;

    //add Method
    map.add(featureLayer,3)

    //addMany Method
    map.addMany([featureLayer,table1],2)

    //findLayerById
    var layer1 = map.findLayerById('layer1');

    //findTableById
    var table1 = map.findTableById('table1');

    //remove
    map.remove(layer1);

    //removeAll
    map.removeAll();

    //reorder
    map.reorder(featureLayer,1)

    //removeMany
    map.removeMany([featureLayer,table1]);

    //destroy
    map.destroy();

});