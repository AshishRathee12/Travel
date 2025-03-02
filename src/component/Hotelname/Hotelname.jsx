import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hotelhead from './Hotelhead/Hotelhead';
import Hotelreview from './Hotelreview/Hotelreview';
import Facilities from './Facilities/Facilities';

export default function Hotelname() {
    const id = useParams();
    // console.log(id);
    const hotelname = id.id;

    const [hotellists, setHotellists] = useState(0);

    const url = `https://hotels-com-provider.p.rapidapi.com/v2/regions?query=${hotelname}&domain=IN&locale=en_IN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f288f4fb1cmshadfa18f64a886e8p1b155bjsn407b3d6b2b7f',
            'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
        }
    };

    const addingdata = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const responses = result.data;
            // console.log(responses)  
            if (responses.length >= 0) {
                {
                    responses.map((elem) => {
                        // console.log(elem)
                        if (elem.hotelId) {
                            // console.log(elem.hotelId)
                            setHotellists(elem.hotelId)
                        } else {
                            console.log("no hotelid found");

                        }
                    })
                }
            }
        } catch (error) {
            console.error(error);
        }
    }



    useEffect(() => {
        addingdata();
    }, [hotelname])




    








    return (
        <div>
          {hotellists != 0 && <Hotelhead id={hotellists} />}
          {hotellists != 0 && <Hotelreview id={hotellists} />}
          {hotellists != 0 && <Facilities id={hotellists} />}

        </div>
    )
}
