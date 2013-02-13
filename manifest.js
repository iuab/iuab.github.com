
wApps.manifest.apps.push(

    {
    "name": "QMachine",
    "description": "QMachine volunteer",
    "url": "http://v1.qmachine.org",
    "namespace":'QM',
    buildUI:function(id){
        this.require('', // script needed to volunteer compute cycles to QM
            function(){
                $('#'+id).html("<h1>QMachine</h1>Volunteering to Sean's QMachine will go here, Sean, can you please change the manifest accordingly?");
            });
        }
    },


    {
    "name": "Login@ S3DB.UAB",
    "description": "<p>Very simple login into UAB's S3DB cloud deployment using jmat's toolbox.<br> The login credentials will be stored at wApps.s3db.info.",
    "url": "https://code.google.com/p/jmat/", // home page of App
    "namespace":'jmat',
    buildUI:function(id){
        this.require('https://jmat.googlecode.com/git/jmat.js', //'http://localhost:8888/jmat/jmat.js',
            function(){jmat.s3db.UI.wApp(id,'https://uab.s3db.org/s3db')}
            );
        }
    },

    {
    "name": "ET callHome",
    "description": "a little coding on the anifest can go a long way.",
    "url": "https://code.google.com/p/jmat/", // home page of App
    "namespace":'jmat',
    buildUI:function(id){
        this.require('https://jmat.googlecode.com/git/jmat.js', //'http://localhost:8888/jmat/jmat.js',
            function(){
                var t = setInterval(
                    function(){jmat.plot(id,jmat.rand(1000),jmat.rand(5000))},
                    1000
                );
            }
        )}
    },

    {
    "name": "someWApp",
    "description": "Some wApp one of you links here",
    "url": "http://uab.mathbiol.org/workshop",
    "namespace":'Some_wAapp',
    buildUI:function(id){
        this.require('', // script to load your code 
            function(){
                $('#'+id).html("<h1>Some wApp</h1>Some Application you developped and want to wApp here");
            });
        }
    }
);

wApps.manifest.authors.push(
    {
    }
);

wApps.manifest.brand={
    pic:'github.jpeg',
    url:'https://github.com/iuab/iuab.github.com'
};

wApps.manifest.checkedApps=[];

wApps.manifest.bodies={
    "myApps":{
        html:'Apps you selected from the AppStore ...',
        Div:{} // where the DOM element will be set later 
    },
    "Store":{
        html:'Retrieving list of Apps from the manifest ...',
        Div:{}
    },
    "People":{
        html:'Retrieving list of people authoring Apps ...',
        Div:{}
    },
    "About":{
        html:'<h1>wApps</h1>This is an experiment in loosening the architecture of a webApp store to achieve a deeper integration between autonomously developed components.',
        Div:{}
    },
    "lala":{
        html:'<h1>lala</h1>this is Lala.',
        Div:{}
    }
};


for(var i in wApps.manifest.apps){
    wApps.manifest.apps[i].require=function(url,fun){
        if(!window[this.namespace]){
            wApps.load(url,fun)
        }else(fun());
    }
}



/*
    {
        "name": "RPPA",
        "description": "Real time analysis of reverse phase protein data.",
        "url": "https://raw.github.com/agrueneberg/TCGA.rppa/master/rppa.js"
    },
    {
        "name": "Import",
        "description": "Import your files and compare them to the reference data in TCGA.",
        "url": "https://raw.github.com/agrueneberg/TCGA.import/master/import.js"
    },
    {
        "name": "Dropbox",
        "description": "Access your Dropbox and load files into the TCGA Toolbox.",
        "url": "https://raw.github.com/agrueneberg/TCGA.dropbox/master/dropbox.js"
    },
    {
        "name": "Databases",
        "description": "Activate third-party databases for use with the TCGA Toolbox.",
        "url": "https://raw.github.com/agrueneberg/TCGA.databases/master/databases.js"
    }
)
*/