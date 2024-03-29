AFRAME.registerComponent("target-ring", {
    init:function(){

        for(var i=1;i<=20;i++){
            var id=`ring${i}`

           //
           var posX=(Math.random()*3000+(-1000));
           var posY =(Math.random()*2+(-1));
           var posZ=(Math.random()*3000+(-1000));
           var position={x:posX, y:posY, z:posZ};

           this.creatingRings(id, position);
        }
    },
    creatingRings:function(id, position){
        var terrainEl= document.querySelector("#Terrain");
        var ringEl = document.createElement("a-entity");

        ringEl.setAttribute("id", id);
        ringEl.setAttribute("position", position);


        ringEl.setAttribute("material", "color", "rgb(255,255,0)");
        ringEl.setAttribute("geometry", {primitive: "torus", radius:8});
        terrainEl.appendChild(ringEl);
    },
});

//A component with one property value is a single property component
//and with multiple property values has many values as properties of the component.