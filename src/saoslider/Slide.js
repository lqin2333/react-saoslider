import React, { Component } from 'react';


class Slide extends Component {

    constructor(...args){
        super(...args);
        console.log(this.props.imgUrl);
    }



    render() {
        return ( 

            <li data-transition="zoomout" data-easein="Power0.easeInOut" >

                <img 
                
                //src="https://images.wallpaperscraft.com/image/doors_lockers_retro_120760_1920x1080.jpg"  
                src={this.props.imgUrl}
                width="1920" height="1080" 
                data-bgposition="center center" 
                data-bgfit="cover" 
                data-bgrepeat="no-repeat" 
                alt="alt"
                className="rev-slidebg" data-no-retina/>

                <div 
                    className="tp-caption rev-btn " 
                    id="slide-27-layer-1" 
                    data-x="['left','left','left','left']" 
                    data-hoffset="['-1','2','10','10']" 
                    data-y="['top','bottom','top','top']" 
                    data-voffset="['715','139','755','582']" 
                    data-width="none" 
                    data-height="none" 
                    data-whitespace="nowrap" 
                    data-type="button" 
                    data-responsive_offset="on" 
                    data-responsive="off" 
                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;","mask":"x:[100%];y:0;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"500","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:rgb(202,32,40);bs:solid;bw:0 0 0 0;"}]' 
                    data-paddingtop="[14,14,14,14]" 
                    data-paddingright="[45,45,45,45]" 
                    data-paddingbottom="[12,12,12,12]" 
                    data-paddingleft="[45,45,45,45]" >
                    Shop Collection 
                </div>
            </li>
        )
    }
}

export default Slide;
