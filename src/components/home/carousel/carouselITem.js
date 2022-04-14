

const CarouselItem = ({ftNews}) => {
    return <>
        {
            ftNews?.length > 0 ?
                ftNews.slice(0, 7).map((ftnew, idx) => {
                    return <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={ftnew.id}>

                        <img src={ftnew.image} className="d-block" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h5 className='carousel-title'>{ftnew.title}</h5>
                            <p className='carousel-body'>{ftnew.body}</p>
                        </div>
                    </div>
                })
                :
                <h3 className='txt-center'>Cargando noticias...</h3>
        }
    </>
}

export default CarouselItem;