var imageSize = {
    zoom: 0,
    count: 0,
    current: 0,
    elem: "",
    width: 0,
    height: 0,
    id: "",
    
    init: function(){
        this.elem = document.getElementById(this.id);
        this.width = this.elem.scrollWidth;
        this.height = this.scrollHeight;
        this.zoom = 1;
        this.count = 0;
        this.current = 1; 
    },
    action: function(x){
        if(x == 0){
            this.current = 1;
            this.count = 0;
        }else{
            this.count = this.count + x;
            this.current = Math.pow(this.zoom, this.count);
        }
        this.elem.style.width = this.width * this.current + "px";
        this.elem.style.height = this.width * this.current + "px";
    }
    
}