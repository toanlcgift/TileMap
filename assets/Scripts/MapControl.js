// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        TiledMap: {
            // ATTRIBUTES:
            default: null,        // The default value will be used only when the component attaching
                                  // to a node for the first time
            type: cc.TiledMap, // optional, default is typeof default
            serializable: true,   // optional, default is true
        },
        Camera: {
            // ATTRIBUTES:
            default: null,        // The default value will be used only when the component attaching
                                  // to a node for the first time
            type: cc.Camera
        },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var url = cc.url.raw( 'resources/dummy.json' );
        var map = this.TiledMap;
        var camera = this.Camera;
        map.node.on(cc.Node.EventType.TOUCH_START, function(event)
        {
        },map.node);
        map.node.on(cc.Node.EventType.TOUCH_MOVE, function(event)
        {
            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();
            camera.node.setPosition(touchLoc.x, touchLoc.y);
        },map.node);
        map.node.on(cc.Node.EventType.TOUCH_END, function(event){

        }, map.node);
        cc.loader.load(url,function( err, res)
        {
            var result = JSON.stringify( res.json );
            //cc.log(that);
            //cc.log( 'load['+ url +'], err['+err+'] result: ' + result );
            // var i = 0;
            // for(i = 0;i< res.json.immovables.length;i++){
            //     var x = res.json.immovables[i].position >> 16;
            //     var y = (res.json.immovables[i].position << 16) >> 16;
            //     cc.log("x:"+x);
            //     cc.log("y:"+y);
            //     var size = map.getMapSize();
                
            //     cc.log(size);
            //     if(x<size.width && y < size.height){
            //     var tile = layer.getTiledTileAt(x, y, true);
               
            //     var tileNode = tile.node;
            //     }
            //     //tileNode.runAction(cc.scaleTo(2, 3, 3));
            // }
        });
    },

    // update (dt) {},
});
