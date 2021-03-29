import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);

    // //se ejecuta cuando se renderiza por primera vez
    // useEffect( () => {
    //     getGif(category)
    //         // .then( imgs => setImages( imgs))
    //         .then(setImages);
    // }, [category])
    //se manda entre corchete la category como referencia para que renderice en el caso de que el objeto se altere



    return (
        <>
            <h3 className="animate__fadeIn">{category}</h3>

            {loading && <p>Loading</p> }

            <div className="card-grid">
                
                {
                    images.map( (img) => (
                        <GifGridItem 
                            key={img.id}
                            //es lo mismo las dos siguientes linias... es la opcion spred
                            // img={img}
                            {...img}
                        />
                    ))
                }
                
            </div>





            {/* <div className="card-grid">
                
                {
                    images.map( (img) => (
                        <GifGridItem 
                            key={img.id}
                            //es lo mismo las dos siguientes linias... es la opcion spred
                            // img={img}
                            {...img}
                        />
                    ))
                }
                
            </div> */}
        </>
    )
}
