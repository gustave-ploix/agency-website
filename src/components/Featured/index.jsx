import photos from '../../services/photosFeatured';

import './style.scss'

function Featured() {

    const [firstUrl, secondUrl] = photos;

    return ( 
        <section id="featuredSection">
            <div id="featured-row-layout">
                <h6>lorem</h6>
                <img src={firstUrl} alt="blabla" />
            </div>
            <div id="featured-column-layout">
                <h6>lorem</h6>
                <img src={secondUrl} alt="blabla" />
            </div>
        </section>
     );
}

export default Featured;