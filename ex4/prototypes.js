let image = {width:1920,
            height:1080,
            bitdepth:32,
            computeSize:function () {
                let rawsize = (this.width*this.height*Math.pow(2,this.bitdepth))/(1024*1024);
                let megapixels = this.width*this.height/1000000;
                return "Rawsize: " + rawsize + " MiB" + "\n" +
                    "Megapixel: " + megapixels + " MP"
            }}

            console.log(image.computeSize());



function imagePlus(width, height, bitdepth) { // Constructor
    this.width = width;
    this.height = height;
    this.bitdepth = bitdepth;
    this.rawsize = (width * height * Math.pow(2, bitdepth)) / (1024 * 1024)
    this.megapixels = width * height / 1000000
    this.print = function () {
        for (let i in this) {
            console.log(i + ": " + this[i])
        }
    }
}


//let hugo = new imagePlus(100,100,32);
//console.log(hugo)
//hugo.print()

imagePlus.prototype.printMore = function(){ this.print()
    console.log(" ratio " + this.width/this.height)
}
let hugo = new imagePlus(100,100,32);

hugo.printMore()


function video(framerate,duration,width,height,bitdepth) {
    imagePlus.call(this,width,height,bitdepth)
    this.framerate = framerate;
    this.duration = duration;
    this.totalFrames = function (){return framerate*duration}
}

video.prototype = Object.create(imagePlus.prototype);

let video1 = new video(30,60,100,100,32);

console.log(video1);
console.log(" Total Frames of video: " + video1.totalFrames());
video1.print();
video1.printMore();