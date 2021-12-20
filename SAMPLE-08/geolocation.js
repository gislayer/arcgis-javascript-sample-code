Vue.component('geolocation', {
    data: function () {
      return this.setDefault();
    },
    beforeMount: function () {
  
    },
    methods: {
      setDefault() {
        return {
          onoff: true,
          title:'Click to Map and Get Address',
          lat:38.41892,
          lng:27.12871,
          zoom:20
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
      setPosition:function(pos){
        this.lat = pos.lat;
        this.lng = pos.lng;
      },
      goToCoordinate:function(){
        GL.setCenterAndZoom([this.lng,this.lat],this.zoom);
      },
      getAddress:function(){
        GL.setCenterAndZoom([this.lng,this.lat],this.zoom);
        GL.getAddressFromLocation({lat:this.lat,lng:this.lng});
      },
      bell:function(){
        debugger;
        var a = new Audio('../src/beep-09.mp3');
        a.play(); 
      }
    },
    template: '<div v-if="onoff" class="leftTop">' +
        '<article class="message is-info">'+
        '    <div class="message-header">'+
        '    <p>{{title}}</p>'+
        '    </div>'+
        '    <div class="message-body">'+

        // Latitude
        '   <div class="field" style="margin-bottom: 0;">'+
        '   <label>Latitude : </label>'+
        '       <p class="control is-expanded">'+
        '       <input v-model="lat"  class="input is-small" type="number" placeholder="Latitude">'+
        '       <span class="icon is-small is-left">'+
        '           <i class="fas fa-user"></i>'+
        '       </span>'+
        '       </p>'+
        '   </div>'+

        // Longitude
        '   <div class="field" style="margin-bottom: 0;">'+
        '   <label>Longitude : </label>'+
        '       <p class="control is-expanded">'+
        '       <input v-model="lng" class="input is-small" type="number" placeholder="Longitude">'+
        '       <span class="icon is-small is-left">'+
        '           <i class="fas fa-user"></i>'+
        '       </span>'+
        '       </p>'+
        '   </div>'+

        // Zoom
        '   <div class="field" style="margin-bottom: 0;">'+
        '   <label>Zoom Level : </label>'+
        '       <p class="control is-expanded">'+
        '       <input v-model="zoom" class="input is-small" type="number" placeholder="Zoom">'+
        '       <span class="icon is-small is-left">'+
        '           <i class="fas fa-user"></i>'+
        '       </span>'+
        '       </p>'+
        '   </div>'+

        '<div class="field is-horizontal">'+
        '  <div class="field-body">'+
        '    <div class="field">'+
        '      <button @click="goToCoordinate" class="button is-success is-small">Go to Coordinate</button>'+
        '    </div>'+
        '    <div class="field">'+
        '      <button @click="getAddress" class="button is-success is-small">Go & Find Address</button>'+
        '    </div>'+
        '<button @click="bell">Bell</button>'+
        '  </div>'+
        '</div>'+
        

        '    </div>'+
        '</article>'+
      '</div>'
  });
  
  var geolocation = new Vue({
    el: '#geolocation'
  });
  