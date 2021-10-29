Vue.component('items', {
    data: function () {
      return this.setDefault();
    },
    beforeMount: function () {
        this.filtered = JSON.parse(JSON.stringify(this.items))
    },
    methods: {
      setDefault: function () {
        return {
            items:[
                {
                    img:'./src/img/sample-01.png',
                    title:'Adding Custom XYZ Tile on 2D View',
                    content:'With this example you can add own custom XYZ Tile map to a web based arcgis map. Usage of ArcGIS WebTileLayer and adding Free Basemaps',
                    module:['2D','WebTileLayer','Basemap','XYZ Tile'],
                    post:'https://www.alikilic.org/post/web-based-gis-module-development',
                    url:'https://upbeat-yalow-84ebdb.netlify.app/sample-01/',
                    code:'https://github.com/gislayer/arcgis-javascript-sample-code/tree/main/SAMPLE-01',
                    video:'https://www.alikilic.org/post/web-based-gis-module-development',
                    data:'https://www.alikilic.org/post/web-based-gis-module-development',
                },
                {
                    img:'./src/img/sample-02.png',
                    title:'Adding Custom XYZ Tile on 3D View',
                    content:'With this example you can add own custom XYZ Tile map to a web based arcgis map. Usage of ArcGIS WebTileLayer and adding Free Basemaps',
                    module:['3D','WebTileLayer','Basemap','XYZ Tile'],
                    url:'https://upbeat-yalow-84ebdb.netlify.app/sample-02/',
                    post:'https://www.alikilic.org/post/web-based-gis-module-development',
                    code:'https://github.com/gislayer/arcgis-javascript-sample-code/tree/main/SAMPLE-02',
                    video:'https://www.alikilic.org/post/web-based-gis-module-development',
                    data:'https://www.alikilic.org/post/web-based-gis-module-development',
                },
                {
                    img:'./src/img/sample-03.png',
                    title:'Adding Tile Layer From ArcGIS MapServer 2D View',
                    content:'Many companies are using ArcGIS Mapserver. You can add custom tile layer on your ArcGIS Web Project. Develop your map!',
                    module:['2D','TileLayer','Mapserver'],
                    url:'https://upbeat-yalow-84ebdb.netlify.app/sample-03/',
                    post:'https://www.alikilic.org/post/web-based-gis-module-development',
                    code:'https://github.com/gislayer/arcgis-javascript-sample-code/tree/main/SAMPLE-03',
                    video:'https://www.alikilic.org/post/web-based-gis-module-development',
                    data:'https://www.alikilic.org/post/web-based-gis-module-development',
                },
                {
                    img:'./src/img/sample-04.png',
                    title:'Adding Tile Layer From ArcGIS MapServer 3D View',
                    content:'Many companies are using ArcGIS Mapserver. You can add custom tile layer on your ArcGIS Web Project. Develop your map!',
                    module:['3D','TileLayer','Mapserver'],
                    url:'https://upbeat-yalow-84ebdb.netlify.app/sample-04/',
                    post:'https://www.alikilic.org/post/web-based-gis-module-development',
                    code:'https://github.com/gislayer/arcgis-javascript-sample-code/tree/main/SAMPLE-04',
                    video:'https://www.alikilic.org/post/web-based-gis-module-development',
                    data:'https://www.alikilic.org/post/web-based-gis-module-development',
                },
                {
                    img:'./src/img/sample-05.png',
                    title:'Adding GeoJSON File To ArcGIS Map - 2D View',
                    content:'Displaying a GeoJSON file on a Web Based ArcGIS Map. Uploading GeoJSON File to ArcGIS Map. ArcGIS Javascript Graphic, GraphicsLayer Samples',
                    module:['2D','Graphic','GraphicsLayer','Extent','geojson','point','linestring','polygon'],
                    url:'https://upbeat-yalow-84ebdb.netlify.app/sample-05/',
                    post:'https://www.alikilic.org/post/web-based-gis-module-development',
                    code:'https://github.com/gislayer/arcgis-javascript-sample-code/tree/main/SAMPLE-05',
                    video:'https://www.alikilic.org/post/web-based-gis-module-development',
                    data:'https://www.alikilic.org/post/web-based-gis-module-development',
                },
                {
                    img:'./src/img/sample-06.png',
                    title:'Adding GeoJSON File To ArcGIS Map - 3D View',
                    content:'Displaying a GeoJSON file on a Web Based ArcGIS Map. Uploading GeoJSON File to ArcGIS Map. ArcGIS Javascript Graphic, GraphicsLayer Samples',
                    module:['3D','Graphic','GraphicsLayer','Extent','geojson','point','linestring','polygon'],
                    url:'https://upbeat-yalow-84ebdb.netlify.app/sample-06/',
                    post:'https://www.alikilic.org/post/web-based-gis-module-development',
                    code:'https://github.com/gislayer/arcgis-javascript-sample-code/tree/main/SAMPLE-06',
                    video:'https://www.alikilic.org/post/web-based-gis-module-development',
                    data:'https://www.alikilic.org/post/web-based-gis-module-development',
                },
                {
                    img:'./src/img/sample-07.png',
                    title:'Go to Coordinate & Getting Address - 2D View',
                    content:'If you have a coordinate, you can find the address using the ArcGIS API and navigate to this location on the map. Also you can change zoom',
                    module:['2D','Locator','Address','zoom','center'],
                    url:'https://upbeat-yalow-84ebdb.netlify.app/sample-07/',
                    post:'https://www.alikilic.org/post/web-based-gis-module-development',
                    code:'https://github.com/gislayer/arcgis-javascript-sample-code/tree/main/SAMPLE-07',
                    video:'https://www.alikilic.org/post/web-based-gis-module-development',
                    data:'https://www.alikilic.org/post/web-based-gis-module-development',
                },
                {
                    img:'./src/img/sample-08.png',
                    title:'Go to Coordinate & Getting Address - 3D View',
                    content:'If you have a coordinate, you can find the address using the ArcGIS API and navigate to this location on the map. Also you can change zoom',
                    module:['2D','Locator','Address','zoom','center'],
                    url:'https://upbeat-yalow-84ebdb.netlify.app/sample-08/',
                    post:'https://www.alikilic.org/post/web-based-gis-module-development',
                    code:'https://github.com/gislayer/arcgis-javascript-sample-code/tree/main/SAMPLE-08',
                    video:'https://www.alikilic.org/post/web-based-gis-module-development',
                    data:'https://www.alikilic.org/post/web-based-gis-module-development',
                }
            ],
            filtered:[]
        }
      },
      search:function(text){
          debugger;
        var newArr = [];
        if(text!==""){
            this.items.map(function(item){
                var title = item.title.toLowerCase();
                var content = item.content.toLowerCase();
                var modules = item.module.join(' ').toLowerCase();
                var lastText = title+' '+content+' '+modules;
                if(lastText.indexOf(text)!==-1){
                    newArr.push(item); 
                }
            });
            this.filtered = newArr;
        }else{
            this.filtered = JSON.parse(JSON.stringify(this.items)) 
        }
       
      }
    },
    template: '<div class="container">' +
        '<div class="row columns is-multiline" style="margin-bottom: 50px;">'+
            '<div class="column is-4" :key="i" v-for="(item,i) in filtered">'+
                '<div class="card">'+
                '    <div class="card-image">'+
                '        <figure class="image is-16by8">'+
                '        <a :title="item.title" :href="item.url" style="cursor: pointer;"><img :src="item.img" :alt="item.title"></a>'+
                '        </figure>'+
                '    </div>'+
                '    <div class="card-content" style="padding-bottom: 10px;">'+
                '        <div class="media">'+
                '        <div class="media-content">'+
                '            <p class="title is-6"><a :href="item.url" style="cursor: pointer;">{{item.title}}</a></p>'+
                '        </div>'+
                '        </div>'+
                '        <div class="content">'+
                '        {{item.content}}'+
                '        </div>'+
                '    </div>'+
                '    <div class="card-content">'+
                '       <div class="buttons are-small">'+
                '           <a title="Get Code" style="cursor: pointer;" class="button is-normal is-dark is-outlined" :href="item.code" target="_blank"><span class="icon is-small"> <i class="fas fa-code"></i> </span><span>Code</span></a>'+
                '           <a title="Download Data" style="cursor: pointer;" class="button is-normal is-danger is-outlined" :href="item.data" target="_blank"><span class="icon is-small"> <i class="fas fa-download"></i> </span><span>Data</span></a>'+
                '           <a title="Read Detailed Post" style="cursor: pointer;" class="button is-normal is-primary is-outlined" :href="item.post" target="_blank"><span class="icon is-small"> <i class="fas fa-book"></i> </span><span>Post</span></a>'+
                '           <a title="Watch Udemy Video" style="cursor: pointer;" class="button is-normal is-link is-outlined" :href="item.video" target="_blank"><span class="icon is-small"> <i class="fas fa-video"></i> </span><span>Video</span></a>'+
                '       </div>'+
                '    </div>'+
                '</div>'+
            '</div>'+
        '</div>'+
      '</div>'
  });
  
  var items = new Vue({
    el: '#items'
  });
  
  var searchInput = document.getElementById('search');
  searchInput.addEventListener('keyup',function(e){
      var stext = e.target.value.toLowerCase();
      items.$children[0].search(stext);
  },false);