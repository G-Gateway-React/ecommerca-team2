import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './style.css'


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import {Container, Grid , Box} from "@mui/material";

export default function Slider() {
    

    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                    <Container maxWidth="sm">
                        <Box>
                    {/* <Swiper
                        style={{
                            // "--swiper-navigation-color": "#fff",
                            // "--swiper-pagination-color": "#fff",
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img src="../../img-section2.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../img-section2.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../img-section2.png"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../img-section2.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../img-section2.png"/>
                        </SwiperSlide>
                    </Swiper> */}
                    <Swiper
                        // onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <img src="../../img-section2.png" />
                        </SwiperSlide>

                    </Swiper>
                </Box>
                </Container>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <h3>SKELETON HAND SHIRT</h3>
                        <p>$24.59</p>
                        <p>COLOR</p>
                        
                    </Grid>
                </Grid>
            </Container>


        </>
    );
                    }
                    