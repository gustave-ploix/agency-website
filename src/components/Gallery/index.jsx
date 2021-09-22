import images from '../../services/photosGallery'

import './style.scss'

function Gallery() {

    
       let image = images.map((image, index) => {

            console.log(image)

            return (
                <div id="image">
                    <img src={image.src} alt="blabla" />
                    <h1>{image.title}</h1>
                    <h2>{image.subtitle}</h2>
                </div>
            )
        })

    return ( 
        <section id="gallery">
            
            {image}

            {/* <img src={firstImage.src} alt="" />
            <img src={secondImage.src} alt="" />
            <img src={thirdImage.src} alt="" />
            <img src={fourthImage.src} alt="" /> */}

        </section>
     );
}

export default Gallery;