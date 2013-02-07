console.log('iuab :-)');


iuab={

  stuff:{   
    'About':'<h1>iUAB</h1>Multiple projects at UAB build webApps as their ultimate, user facing, deliverable. <p>The focus on the <a href="http://www.webplatform.org/">Web Platform</a> to deliver informatics solutions is justified first by its pervasiveness (no need for downloads or installs) but increasingly also by its computational effectiveness (for example GPUs are altomatically engaged by javascript compiler), security (sandboxed execution) and, most important, an architecture designed for integration.</p>',
    'Apps':'Apps ...',
    'Docs':'Docs ...',
    'People':'People ...',
    'Programs':'training programs go here ...'
  },

  uid:function(prefix){
    if(!prefix){prefix='UID'}
    var uid=prefix+Math.random().toString().slice(2);
    return uid;
  },

  div:function(id,cl){
    if(!id){id=this.uid('iUab')};
    var d = document.createElement('div');
    if(Array.isArray(cl)){cl=cl.join(' ')};
    if(!!cl){d.className = cl};
    d.id = id;
    return d;
  },

  buildUI:function(id){
    // if id not provided then use body
    if(!id){id=document.body}
      else{id=$('#'+id)};
    
    // head //
    var iuabHead = $('<div class="container" id="iuabHead">').appendTo(id);
    //head[0].style.margin=10;
    var navHead = $('<div class="navbar navbar-inverse pull-left">').appendTo(iuabHead);
    var innerHead = $('<div class="navbar-inner">').appendTo(navHead);
    var folders = Object.getOwnPropertyNames(iuab.stuff);
    //var brand = $('<a class="brand" href="#">iUAB</a>').appendTo(innerHead);
    var navUl = $('<ul class="nav">').appendTo(innerHead);
    var navLi=[];
    for(var i in folders){
      navLi[i]=$('<li><a href="#" id="iuabNav_'+i+'">'+folders[i]+'</a></li>').appendTo(navUl);
    }

    // body //
    var iuabBody = $('<div class="container" id="iuabBody">').appendTo(id);
    var iuabBodyDiv = $('<div class="hero-unit" id="iuabBodyDiv">').appendTo(iuabBody);
    var iuabBodies=[];
    for(var i in folders){
     iuabBodies[i]=$('<div id="iuabBody_'+i+'">').html(iuab.stuff[folders[i]]).appendTo(iuabBodyDiv);
    }
    var n = navLi.length
    for(var i in navLi){
      if(i>0){(iuabBodies[i]).hide()};
      document.getElementById('iuabNav_'+i).i=i;
      document.getElementById('iuabNav_'+i).n=n;
      document.getElementById('iuabNav_'+i).onclick=function(evt){
        for(var i = 0 ; i<this.n ; i++){
          if(i==this.i){$('#iuabBody_'+i).show()}
            else{$('#iuabBody_'+i).hide()};
        }
      }
    }
  }
}




    