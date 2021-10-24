Vue.component('tilelayer', {
    data: function () {
      return this.setDefault();
    },
    beforeMount: function () {
  
    },
    methods: {
      setDefault() {
        return {
          onoff: true,
          title:'Adding Tile Layer From Arcgis Map Server - 2D',
          //url:'https://stamen-tiles-{subDomain}.a.ssl.fastly.net/terrain/{level}/{col}/{row}.png',
          url:'https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer',
          layerId:'ny-housing',
          opacity:1,
          name:'NewYork Housing'
        }
      },
      open() {
        this.onoff = true;
      },
      close(e) {
        this.clear();
        this.onoff = false;
      },
      clear(){
  
      },
      save() {
        this.onoff = false;
      },
      add(){
          debugger;
          if(!this.url || !this.layerId || !this.name || !this.opacity){
              alert('Please Fill Out the Form');
          }else{
            GL.addTileLayerFromMapServer({
                url:this.url,
                layerId:this.layerId,
                name:this.name,
                opacity:this.opacity,
                zoom:true
            });
          }
      }
    },
    template: '<div v-if="onoff" class="leftTop">' +
        '<article class="message is-info">'+
        '    <div class="message-header">'+
        '    <p>{{title}}</p>'+
        '    </div>'+
        '    <div class="message-body">'+

        // URL
        '   <div class="field">'+
        '   <label>Tile Layer URL</label>'+
        '       <p class="control is-expanded">'+
        '       <input class="input" type="text" v-model="url" placeholder="Tile Layer URL">'+
        '       </p>'+
        '   </div>'+

        // Name
        '   <div class="field">'+
        '   <label>Layer Name</label>'+
        '       <p class="control is-expanded">'+
        '       <input class="input" type="text" v-model="name" placeholder="Name">'+
        '       </p>'+
        '   </div>'+

        // ID
        '   <div class="field">'+
        '   <label>Layer ID</label>'+
        '       <p class="control is-expanded">'+
        '       <input class="input" type="text" v-model="layerId" placeholder="Layer ID">'+
        '       </p>'+
        '   </div>'+


        // Opacity
        '   <div class="field">'+
        '   <label>Layer Opacity : {{opacity*100}}%</label>'+
        '       <p class="control is-expanded">'+
        '       <input style="width:100%;" type="range" min="0" max="1" step="0.01" v-model="opacity" >'+
        '       </p>'+
        '   </div>'+



         '   <div class="field">'+
         '       <button @click="add" class="button is-success is-fullwidth">Add To Map</button>'+
         '   </div>'+


        '    </div>'+
        '</article>'+
      '</div>'
  });
  
  var tilelayer = new Vue({
    el: '#tilelayer'
  });
  