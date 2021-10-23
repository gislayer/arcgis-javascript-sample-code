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
          title:'Custom XYZ Tile Adding Panel',
          //url:'https://stamen-tiles-{subDomain}.a.ssl.fastly.net/terrain/{level}/{col}/{row}.png',
          url:'https://mts{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
          x:{mask:"{col}",url:"{x}"},
          y:{mask:"{row}",url:"{y}"},
          z:{mask:"{level}",url:"{z}"},
          s:{mask:"{subDomain}",url:"{s}"},
          subdomains:'0,1,2,3'
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
          if(!this.url || !this.x.url || !this.y.url || !this.z.url || !this.s.url || !this.subdomains){
              alert('Please Fill Out the Form');
          }else{
            var subdomainsArray = this.subdomains.split(',');
            var url = this.url.replace(this.x.url,this.x.mask).replace(this.y.url,this.y.mask).replace(this.z.url,this.z.mask).replace(this.s.url,this.s.mask);
            GL.addXYZTileBasemap({
                url:url,
                subdomains:subdomainsArray,
                attribute:'New Custom XYZ Tile'
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
        '   <label>XYZ Tile URL</label>'+
        '       <p class="control is-expanded">'+
        '       <input class="input" type="text" v-model="url" placeholder="XYZ Tile URL">'+
        '       <span class="icon is-small is-left">'+
        '           <i class="fas fa-user"></i>'+
        '       </span>'+
        '       </p>'+
        '   </div>'+


        // X Param
        '    <div class="field is-horizontal">'+
        '      <div class="field-label is-normal">'+
        '      <label class="label">X Param</label>'+
        '      </div>'+
        '      <div class="field-body">'+
        '        <div class="field">'+
        '            <p class="control is-expanded">'+
        '            <input class="input" type="text" v-model="x.url" placeholder="X URL Param Key Holder">'+
        '            <span class="icon is-small is-left">'+
        '                <i class="fas fa-user"></i>'+
        '            </span>'+
        '            </p>'+
        '        </div>'+
        '        <div class="field">'+
        '            <p class="control is-expanded">'+
        '            <input class="input" type="text" readonly v-model="x.mask">'+
        '            <span class="icon is-small is-left">'+
        '                <i class="fas fa-user"></i>'+
        '            </span>'+
        '            </p>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+

         // Y Param
         '    <div class="field is-horizontal">'+
         '      <div class="field-label is-normal">'+
         '      <label class="label">Y Param</label>'+
         '      </div>'+
         '      <div class="field-body">'+
         '        <div class="field">'+
         '            <p class="control is-expanded">'+
         '            <input class="input" type="text" v-model="y.url" placeholder="Y URL Param Key Holder">'+
         '            <span class="icon is-small is-left">'+
         '                <i class="fas fa-user"></i>'+
         '            </span>'+
         '            </p>'+
         '        </div>'+
         '        <div class="field">'+
         '            <p class="control is-expanded">'+
         '            <input class="input" type="text" readonly v-model="y.mask">'+
         '            <span class="icon is-small is-left">'+
         '                <i class="fas fa-user"></i>'+
         '            </span>'+
         '            </p>'+
         '        </div>'+
         '      </div>'+
         '    </div>'+

         // Z Param
         '    <div class="field is-horizontal">'+
         '      <div class="field-label is-normal">'+
         '      <label class="label">Z Param</label>'+
         '      </div>'+
         '      <div class="field-body">'+
         '        <div class="field">'+
         '            <p class="control is-expanded">'+
         '            <input class="input" type="text" v-model="z.url" placeholder="Z URL Param Key Holder">'+
         '            <span class="icon is-small is-left">'+
         '                <i class="fas fa-user"></i>'+
         '            </span>'+
         '            </p>'+
         '        </div>'+
         '        <div class="field">'+
         '            <p class="control is-expanded">'+
         '            <input class="input" type="text" readonly v-model="z.mask">'+
         '            <span class="icon is-small is-left">'+
         '                <i class="fas fa-user"></i>'+
         '            </span>'+
         '            </p>'+
         '        </div>'+
         '      </div>'+
         '    </div>'+

          // S Param
          '    <div class="field is-horizontal">'+
          '      <div class="field-label is-normal">'+
          '      <label class="label">Server P.</label>'+
          '      </div>'+
          '      <div class="field-body">'+
          '        <div class="field">'+
          '            <p class="control is-expanded">'+
          '            <input class="input" type="text" v-model="s.url" placeholder="a,b,c,d">'+
          '            <span class="icon is-small is-left">'+
          '                <i class="fas fa-user"></i>'+
          '            </span>'+
          '            </p>'+
          '        </div>'+
          '        <div class="field">'+
          '            <p class="control is-expanded">'+
          '            <input class="input" type="text" readonly v-model="s.mask">'+
          '            <span class="icon is-small is-left">'+
          '                <i class="fas fa-user"></i>'+
          '            </span>'+
          '            </p>'+
          '        </div>'+
          '      </div>'+
          '    </div>'+

          // S Param
          '    <div class="field is-horizontal">'+
          '      <div class="field-label is-normal">'+
          '      <label class="label">Server Subdomains</label>'+
          '      </div>'+
          '      <div class="field-body">'+
          '        <div class="field">'+
          '            <p class="control is-expanded">'+
          '            <input class="input" type="text" v-model="subdomains" placeholder="a,b,c,d">'+
          '            <span class="icon is-small is-left">'+
          '                <i class="fas fa-user"></i>'+
          '            </span>'+
          '            </p>'+
          '        </div>'+
          '      </div>'+
          '    </div>'+

         '   <div class="field">'+
         '       <button @click="add" class="button is-success is-fullwidth">Add To Map</button>'+
         '   </div>'+


        '    </div>'+
        '</article>'+
      '</div>'
  });
  
  var xyzTilePanel = new Vue({
    el: '#xyz'
  });
  