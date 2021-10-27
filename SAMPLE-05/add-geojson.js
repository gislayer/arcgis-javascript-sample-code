Vue.component('xyz', {
    data: function () {
      return this.setDefault();
    },
    beforeMount: function () {
  
    },
    methods: {
      setDefault() {
        return {
          onoff: true,
          title:'Adding GeoJSON File To ArcGIS Map',
          files:[]
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
      fileUpload(e){
          debugger;
          var that = this;
          var files = e.target.files;
          var list=[];
          function doIt(i,arr){
            if(i<arr.length){
              var id = 'layer-'+i;
              var mod19 = i%19;
              var color = GL.colors[mod19];
              var data = {};
              var file = arr[i];
              data.id = id;
              data.name = file.name;
              data.color = color;
              data.size = (file.size/1000).toFixed(2);
              var fr = new FileReader();
              fr.onload = function (e) {
                data.geojson = JSON.parse(fr.result);
                list.push(data);
                i++;
                doIt(i,arr)
              };
              fr.readAsText(file);
            }else{
              that.files=list;
            }
          }
          doIt(0,files);
      },
      addToMap:function(file){
        debugger;
        GL.addGeoJSONToMap(file);
      },
      remove:function(file){
        GL.removeLayer(file.id);
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
        '   <label>Select GeoJSON File(s)</label>'+
        '       <p class="control is-expanded">'+
        '       <input class="input" accept=".geojson" multiple type="file" @change="fileUpload($event)">'+
        '       <span class="icon is-small is-left">'+
        '           <i class="fas fa-user"></i>'+
        '       </span>'+
        '       </p>'+
        '   </div>'+

        '<table v-if="files.length>0" class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"><thead><tr><th>#</th><th>File Name</th><th>Size (Kb)</th><th>Color</th><th>Add</th><th>Remove</th></tr></thead>'+
          '<tbody><tr :key="i" v-for="(file,i) in files"><td>{{i+1}}</td><td>{{file.name}}</td><td>{{file.size}}</td><td><input type="color" v-model="file.color"></td>'+
          '<td><button @click="addToMap(file)" class="button is-success is-small">Add To Map</button></td>'+
          '<td><button @click="remove(file)" class="button is-small is-danger">Remove</button></td>'+
          '</tr></tbody>'+
        '</table>'+

        '    </div>'+
        '</article>'+
      '</div>'
  });
  
  var xyzTilePanel = new Vue({
    el: '#xyz'
  });
  