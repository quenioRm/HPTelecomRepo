import react, {useState} from "react";
import { HomeCepCheck } from "./HomeCepCheck";

export const HomeBanner = () => {

    const [showCep, setShowCep] = useState(false);

    const toggleSignin = () => {
        setShowCep(!showCep);
    }

    return(
        <>
        {/* Banner */}
        <div className="iq-bg banner-stars">
          <div
            id="rev_slider_2_1_wrapper"
            className="rev_slider_wrapper fullwidthbanner-container"
            data-alias="coinexfly"
            data-source="gallery"
            style={{
              margin: "0px auto",
              background: "transparent",
              padding: 0,
              marginTop: 0,
              marginBottom: 0
            }}
          >
            {/* START REVOLUTION SLIDER 5.4.6.3 fullwidth mode */}
            <div
              id="rev_slider_2_1"
              className="rev_slider fullwidthabanner tp-overflow-hidden"
              style={{ display: "none" }}
              data-version="5.4.6.3"
            >
              <ul>
                {/* SLIDE  */}
                <li
                  data-index="rs-5"
                  data-transition="fade"
                  data-slotamount="default"
                  data-hideafterloop={0}
                  data-hideslideonmobile="off"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-thumb="revslider/assets/100x50_b78ec-04.jpg"
                  data-rotate={0}
                  data-saveperformance="off"
                  data-title="Slide"
                  data-param1
                  data-param2
                  data-param3
                  data-param4
                  data-param5
                  data-param6
                  data-param7
                  data-param8
                  data-param9
                  data-param10
                  data-description
                >
                  {/* MAIN IMAGE */}
                  <img
                    src="revslider/assets/b78ec-04.jpg"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    data-bgparallax="off"
                    className="rev-slidebg"
                    data-no-retina
                  />
                  {/* LAYERS */}
                  {/* LAYER NR. 1 */}
                  <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-3"
                    id="slide-5-layer-3"
                    data-x="right"
                    data-hoffset={106}
                    data-y="bottom"
                    data-voffset={196}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"x:[100%];y:bottom;opacity:{0,1};","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 5 }}
                  >
                    <img
                      src="revslider/assets/04c8d-05.png"
                      alt=""
                      data-ww="206px"
                      data-hh="370px"
                      data-no-retina
                    />{" "}
                  </div>
                  {/* LAYER NR. 2 */}
                  <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-10"
                    id="slide-5-layer-2"
                    data-x={370}
                    data-y={40}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2500,"speed":1000,"frame":"0","from":"x:[175%];y:top;z:{-20,20};opacity:{0,1};","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 6 }}
                  >
                    <img
                      src="revslider/assets/0dd17-06.png"
                      alt=""
                      data-ww="auto"
                      data-hh="auto"
                      data-no-retina
                    />{" "}
                  </div>
                  {/* LAYER NR. 3 */}
                  <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-5"
                    id="slide-5-layer-9"
                    data-x={-77}
                    data-y={389}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2810,"speed":1000,"frame":"0","from":"x:[175%];y:[-175%];opacity:{0,1};","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 7 }}
                  >
                    <img
                      src="revslider/assets/0dd17-06.png"
                      alt=""
                      data-ww="auto"
                      data-hh="auto"
                      data-no-retina
                    />{" "}
                  </div>
                  {/* LAYER NR. 4 */}
                  <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-8"
                    id="slide-5-layer-10"
                    data-x="right"
                    data-hoffset={-100}
                    data-y="center"
                    data-voffset={105}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":3160,"speed":1000,"frame":"0","from":"x:[175%];y:[-175%];opacity:{0,1};","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 8 }}
                  >
                    <img
                      src="revslider/assets/0dd17-06.png"
                      alt=""
                      data-ww="auto"
                      data-hh="auto"
                      data-no-retina
                    />{" "}
                  </div>
                  {/* LAYER NR. 5 */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-5-layer-4"
                    data-x={30}
                    data-y={272}
                    data-width="['auto']"
                    data-height="['auto']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 9,
                      whiteSpace: "nowrap",
                      fontSize: 58,
                      lineHeight: 58,
                      fontWeight: 400,
                      color: "#ffffff",
                      letterSpacing: 0,
                      fontFamily: '"Ubuntu", sans-serif',
                      textTransform: "uppercase"
                    }}
                  >
                    Be ready to fly with{" "}
                  </div>
                  {/* LAYER NR. 6 */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-5-layer-5"
                    data-x={30}
                    data-y={343}
                    data-width="['auto']"
                    data-height="['auto']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 10,
                      whiteSpace: "nowrap",
                      fontSize: 78,
                      lineHeight: 80,
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: 0,
                      fontFamily: '"Ubuntu", sans-serif',
                      textTransform: "uppercase"
                    }}
                  >
                    <span className="iq-font-yellow">CoinEX.</span>
                  </div>
                  {/* LAYER NR. 7 */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-5-layer-6"
                    data-x={30}
                    data-y={432}
                    data-width="['auto']"
                    data-height="['auto']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 11,
                      whiteSpace: "nowrap",
                      fontSize: 14,
                      lineHeight: 26,
                      fontWeight: 400,
                      color: "#ffffff",
                      letterSpacing: 0,
                      fontFamily: "Raleway",
                      position: "relative",
                      top:"-130px",
                      fontWeight:"bold"
                    }}
                  >
                    <h1>
                      <p>
                      INTERNET PARA 
                      </p>
                      <p>
                      PESSOAS <span style={{color:"#008C1E"}}>EXIGENTES</span> <span>!</span>
                      </p>
                    </h1>
                  </div>
                  {/* LAYER NR. 8 */}
                  <div onClick={toggleSignin}
                    className="tp-caption rev-btn button white tp-resizeme"
                    id="slide-42-layer-18"
                    data-x={30}
                    data-y="center"
                    data-voffset={150}
                    data-width="['auto']"
                    data-height="['auto']"
                    data-type="button"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1000,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":""}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[1,1,1,1]"
                    data-paddingright="[25,25,25,25]"
                    data-paddingbottom="[1,1,1,1]"
                    data-paddingleft="[25,25,25,25]"
                    style={{
                      zIndex: 18,
                      whiteSpace: "nowrap",
                      boxSizing: "border-box",
                      MozBoxSizing: "border-box",
                      WebkitBoxSizing: "border-box",
                      cursor: "pointer"
                    }}
                  >
                    ASSINE JÁ
                  </div>
                  <HomeCepCheck 
                      isOpen={showCep}
                      toggle={toggleSignin}
                  />
                </li>
                
                <li
                  data-index="rs-42"
                  data-transition="fade"
                  data-slotamount="default"
                  data-hideafterloop={0}
                  data-hideslideonmobile="off"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed={600}
                  data-rotate={0}
                  data-saveperformance="off"
                  data-title="Slide"
                  data-param1=""
                  data-param2=""
                  data-param3=""
                  data-param4=""
                  data-param5=""
                  data-param6=""
                  data-param7=""
                  data-param8=""
                  data-param9=""
                  data-param10=""
                  data-description=""
                >
                  {/* MAIN IMAGE */}
                  <img
                    src="revslider/assets/c3d11-02b9f-01.jpg"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    data-bgparallax="off"
                    className="rev-slidebg"
                    data-no-retina=""
                  />
                  {/* LAYERS */}
                  {/* LAYER NR. 1 */}
                  <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-2"
                    id="slide-42-layer-1"
                    data-x="right"
                    data-hoffset={30}
                    data-y="bottom"
                    data-voffset=""
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1000,"speed":1000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 5 }}
                  >
                    <img
                      src="revslider/assets/bf82d-03.png"
                      alt=""
                      data-ww="507px"
                      data-hh="607px"
                      data-no-retina=""
                    />{" "}
                  </div>
                  {/* LAYER NR. 2 */}
                  <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-5"
                    id="slide-42-layer-2"
                    data-x="center"
                    data-hoffset={362}
                    data-y="center"
                    data-voffset={-64}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 6 }}
                  >
                    <img
                      src="revslider/assets/c176d-04.png"
                      alt=""
                      data-ww="auto"
                      data-hh="auto"
                      data-no-retina=""
                      style={{
                        position:"relative",
                        top:"-70px",
                        left:"-70px"
                      }}
                    />{" "}
                  </div>
                  {/* LAYER NR. 3 */}
                  <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-2"
                    id="slide-42-layer-3"
                    data-x="center"
                    data-hoffset={131}
                    data-y="center"
                    data-voffset={-23}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 7 }}
                  >
                    <img
                      src="revslider/assets/218e9-05.png"
                      alt=""
                      data-ww="auto"
                      data-hh="auto"
                      data-no-retina=""
                    />{" "}
                  </div>
                    {/* LAYER NR. 3.2 */}
                    <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-2"
                    id="slide-42-layer-3"
                    data-x="center"
                    data-hoffset={131}
                    data-y="center"
                    data-voffset={-23}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 7 }}
                  >
                    <img
                      src="revslider/assets/220b9-06-8.png"
                      alt=""
                      data-ww="auto"
                      data-hh="auto"
                      data-no-retina=""
                      style={{
                        position:"relative",
                        top:"150px"
                      }}
                    />{" "}
                  </div>
                  {/* LAYER NR. 4 */}
                  <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-5"
                    id="slide-42-layer-4"
                    data-x="center"
                    data-hoffset={237}
                    data-y="center"
                    data-voffset={153}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 8 }}
                  >
                    <img
                      src="revslider/assets/220b9-06.png"
                      alt=""
                      data-ww="auto"
                      data-hh="auto"
                      data-no-retina=""
                      style={{
                        position:"relative",
                        top:"180px",
                        left: "-155px"
                      }}
                    />{" "}
                  </div>
                    {/* LAYER NR. 4.2 */}
                    <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-5"
                    id="slide-42-layer-4"
                    data-x="center"
                    data-hoffset={237}
                    data-y="center"
                    data-voffset={153}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 8 }}
                  >
                    <img
                      src="revslider/assets/9ecee-08-8.png"
                      alt=""
                      data-ww="auto"
                      data-hh="auto"
                      data-no-retina=""
                      style={{
                        position:"relative",
                        top:"110px",
                        left:"130px"
                      }}
                    />{" "}
                  </div>
                  {/* LAYER NR. 5 */}
                  <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-4"
                    id="slide-42-layer-5"
                    data-x="right"
                    data-hoffset=""
                    data-y="center"
                    data-voffset={-50}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 9 }}
                  >
                    <img
                      src="revslider/assets/69182-07.png"
                      alt=""
                      data-ww="auto"
                      data-hh="auto"
                      data-no-retina=""
                      style={{
                        position:"relative",
                        top:"-130px"
                      }}
                    />{" "}
                  </div>
                  {/* LAYER NR. 6 */}
                  <div
                    className="tp-caption   tp-resizeme rs-parallaxlevel-6"
                    id="slide-42-layer-6"
                    data-x="right"
                    data-hoffset={120}
                    data-y="bottom"
                    data-voffset={30}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 10 }}
                  >
                    <img
                      src="revslider/assets/9ecee-08.png"
                      alt=""
                      data-ww="auto"
                      data-hh="auto"
                      data-no-retina=""
                      style={{
                        position:"relative",
                        top:"-260px",
                        left:"70px"
                      }}
                    />{" "}
                  </div>
                  {/* LAYER NR. 7 */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-42-layer-8"
                    data-x={607}
                    data-y={434}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":600,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 11 }}
                  >
                    <div
                      className="rs-looped rs-rotate"
                      data-easing="Linear.easeNone"
                      data-startdeg={-90}
                      data-enddeg={90}
                      data-speed={10}
                      data-origin="50% 50%"
                    >
                      <img
                        src="revslider/assets/62c29-square-11.png"
                        alt=""
                        data-ww="auto"
                        data-hh="auto"
                        data-no-retina=""
                      />{" "}
                    </div>
                  </div>
                  {/* LAYER NR. 8 */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-42-layer-10"
                    data-x="right"
                    data-hoffset={-80}
                    data-y=""
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":600,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 12 }}
                  >
                    <div
                      className="rs-looped rs-pulse"
                      data-easing="Linear.easeNone"
                      data-speed={5}
                      data-zoomstart="1.1"
                      data-zoomend={1}
                    >
                      <img
                        src="revslider/assets/57877-shape-12.png"
                        alt=""
                        data-ww="auto"
                        data-hh="auto"
                        data-no-retina=""
                      />{" "}
                    </div>
                  </div>
                  {/* LAYER NR. 9 */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-42-layer-11"
                    data-x={-100}
                    data-y={170}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":600,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 13 }}
                  >
                    <div
                      className="rs-looped rs-pulse"
                      data-easing="Linear.easeNone"
                      data-speed={5}
                      data-zoomstart="1.1"
                      data-zoomend={1}
                    >
                      <img
                        src="revslider/assets/33266-round-10.png"
                        alt=""
                        data-ww="auto"
                        data-hh="auto"
                        data-no-retina=""
                      />{" "}
                    </div>
                  </div>
                  {/* LAYER NR. 10 */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-42-layer-12"
                    data-x="center"
                    data-hoffset={-1}
                    data-y="center"
                    data-voffset={-228}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":600,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 14 }}
                  >
                    <div
                      className="rs-looped rs-rotate"
                      data-easing="Power3.easeInOut"
                      data-startdeg={90}
                      data-enddeg={20}
                      data-speed={2}
                      data-origin="50% 50%"
                    >
                      <img
                        src="revslider/assets/e4095-round-13.png"
                        alt=""
                        data-ww="auto"
                        data-hh="auto"
                        data-no-retina=""
                      />{" "}
                    </div>
                  </div>
                  {/* LAYER NR. 11 */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-42-layer-13"
                    data-x={30}
                    data-y="center"
                    data-voffset={-46}
                    data-width="['308']"
                    data-height="['81']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1000,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 15,
                      minWidth: 308,
                      maxWidth: 81,
                      whiteSpace: "nowrap",
                      fontSize: 72,
                      lineHeight: 72,
                      fontWeight: 800,
                      color: "#ffffff",
                      letterSpacing: 0,
                      fontFamily: "Raleway"
                    }}
                  >
                  </div>
                  {/* LAYER NR. 12 */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-42-layer-14"
                    data-x={30}
                    data-y="center"
                    data-voffset={10}
                    data-width="['auto']"
                    data-height="['auto']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1000,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 16,
                      whiteSpace: "nowrap",
                      fontSize: 30,
                      lineHeight: 30,
                      fontWeight: 400,
                      color: "#ffffff",
                      letterSpacing: 0,
                      fontFamily: "Lato"
                    }}
                  >
                        <h1 style={{position:'relative'}}>
                          <p>
                          VOCÊ SEMPRE 
                          </p>
                          <p>
                          <span style={{color:"#008C1E"}}>CONECTADO</span> <span>!</span>
                          </p>
                        </h1>
                  </div>
                  {/* LAYER NR. 13 */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-42-layer-15"
                    data-x={31}
                    data-y="center"
                    data-voffset={75}
                    data-width="['auto']"
                    data-height="['auto']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1000,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 17,
                      whiteSpace: "nowrap",
                      fontSize: 14,
                      lineHeight: 28,
                      fontWeight: 400,
                      color: "#ffffff",
                      letterSpacing: 0,
                      fontFamily: "Open Sans"
                    }}
                  >
                  </div>
                  {/* LAYER NR. 14 */}
                  <div onClick={toggleSignin}
                    className="tp-caption rev-btn button white tp-resizeme"
                    id="slide-42-layer-18"
                    data-x={30}
                    data-y="center"
                    data-voffset={150}
                    data-width="['auto']"
                    data-height="['auto']"
                    data-type="button"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1000,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":""}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[1,1,1,1]"
                    data-paddingright="[25,25,25,25]"
                    data-paddingbottom="[1,1,1,1]"
                    data-paddingleft="[25,25,25,25]"
                    style={{
                      zIndex: 18,
                      whiteSpace: "nowrap",
                      boxSizing: "border-box",
                      MozBoxSizing: "border-box",
                      WebkitBoxSizing: "border-box",
                      cursor: "pointer"
                    }}
                  >
                    ASSINE JÁ
                  </div>
                  {/* LAYER NR. 15 */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-42-layer-20"
                    data-x="right"
                    data-hoffset={-100}
                    data-y="bottom"
                    data-voffset={205}
                    data-width="['none','none','none','none']"
                    data-height="['none','none','none','none']"
                    data-type="image"
                    data-responsive_offset="on"
                    data-frames='[{"delay":600,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                    data-textalign="['inherit','inherit','inherit','inherit']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 19 }}
                  >
                    <img
                      src="revslider/assets/e4095-round-13.png"
                      alt=""
                      data-ww="auto"
                      data-hh="auto"
                      data-no-retina=""
                    />{" "}
                  </div>
                </li>
                
              </ul>
              <div
                className="tp-bannertimer tp-bottom"
                style={{ visibility: "hidden !important" }}
              />
            </div>
          </div>
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>
        {/* Banner End */}
      </>
    )
}