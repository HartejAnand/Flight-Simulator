AFRAME.registerComponent("flying-birds", {
    init:function(){
        for(var i=1;i<=20;i++){
            var id=`hurdle${i}`

           //
           var posX=(Math.random()*3000+(-1000));
           var posY =(Math.random()*2+(-1));
           var posZ=(Math.random()*3000+(-1000));
           var position={x:posX, y:posY, z:posZ};

           this.flyingBirds(id, position);
        }
    },
    
    flyingBirds:(id, position)=>{
        var terrainEl= document.querySelector("#Terrain");
        var birdEl = document.createElement("a-entity");

        birdEl.setAttribute("id", id);
        birdEl.setAttribute("position", position);

        var birdEl=document.createElement("a-entity");
        birdEl.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");
        birdEl.setAttribute("scale", {x:500, y:500, z:500});
        birdEl.setAttribute("script-model", "./assets/models/flying_bird/scene.bin");
        birdEl.setAttribute("animation-mixer", {});

        terrainEl.appendChild(birdEl);

    }
});