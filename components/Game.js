AFRAME.registerComponent("game", {
    schema:{
        eId:{type:"string",default:"#scrap1"}},

    update:function(){
        this.isC(this.data.eId)
    },

    isC:function(eId){
        const element=document.querySelector(eId)
        element.addEventListener("colide", (e) => {
            if(eId.includes("#scrap")){
                console.log(eId+ "colision")
            }else if(eId.includes("#hurdle")){
                console.log("asteroid colision")
            }
        })
    }
})