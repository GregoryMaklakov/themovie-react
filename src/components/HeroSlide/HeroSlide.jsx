import { useState, useEffect, useRef } from "react";
import SwiperCore, { Autoplay, Parallax, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../Button/Button";
import { Modal, ModalContent } from "../Modal";
import { apiConfig, tmdbApi, movieType, category } from "../../api/apiClient";
import { clsx } from 'clsx';
import "./HeroSlide.scss";
import { useHistory } from "react-router";

const HeroSlide = () => {
    SwiperCore.use([Autoplay, Parallax, Scrollbar]);
    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            //page - array с данными фильмов
            const params = { page: 1 };
            const url = `${apiConfig.baseUrl}movie/${movieType.popular}?api_key=${apiConfig.API_KEY}&page=${params.page}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                //колличество слайдов = max 19
                setMovieItems(data.results.slice(1, 12));
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getMovies();
    }, []);


    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay, Parallax, Scrollbar]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                parallax={{}}
            // autoplay={{ delay: 5000 }}
            // speed={1000}
            >
                {movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <HeroSlideItem
                                item={item}
                                className={clsx({ 'active': isActive })}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {
                movieItems.map((item, i) => (
                    <TrailerModal key={i} item={item} />
                ))
            }
        </div >
    );
};
//========================================================================================================================================================


const HeroSlideItem = (props) => {
    let history = useHistory();
    const item = props.item;

    const background = apiConfig.originalImage(
        item.backdrop_path ? item.backdrop_path : item.poster_path
    );

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);
        const videos = await tmdbApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
            modal
                .querySelector(".modal__content > iframe")
                .setAttribute("src", videSrc);
        } else {
            modal.querySelector(".modal__content").innerHTML = "No trailer";
        }
        modal.classList.toggle("active");
    };

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="subtitle">{item.overview}</div>
                    <div className="btns">
                        <Button
                            variant="primary"
                            size="m"
                            onClick={() => history.push("/movie/" + item.id)}
                        >
                            Watch now
                        </Button>
                        <Button variant="secondary" size="m" onClick={setModalActive}>
                            Watch trailer
                        </Button>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    );
};

const TrailerModal = (props) => {
    const item = props.item;
    const iframeRef = useRef(null);
    const onClose = () => iframeRef.current.setAttribute("src", "");
    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe
                    ref={iframeRef}
                    width="100%"
                    height="500px"
                    title="trailer"
                ></iframe>
            </ModalContent>
        </Modal>
    );
};

export default HeroSlide;
