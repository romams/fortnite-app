import CarouselItem from "./carouselITem";


const Carousel = ({ftNews}) => {

    return <div id="carouselExampleCaptions" className="carousel slide mt-4" data-bs-ride="carousel">
        <div className="carousel-inner">

            <CarouselItem ftNews={ftNews}/>
            
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}

export default Carousel;