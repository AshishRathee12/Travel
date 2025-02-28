import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hotelhead from './Hotelhead/Hotelhead';

export default function Hotelname() {
    const id = useParams();
    // console.log(id);
    const hotelname = id.id;

    const [hotellists, setHotellists] = useState(0);

    const url = `https://hotels-com-provider.p.rapidapi.com/v2/regions?query=${hotelname}&domain=IN&locale=en_IN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6b589d747cmsh6bfc6f6a58159d8p10b9afjsn4f6d85818a10',
            'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
        }
    };

    const addingdata = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const responses = result.data;
            console.log(responses)
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



    // works with hotel details api instead of this 

    








    return (
        <div>
          {hotellists != 0 && <Hotelhead id={hotellists} />}

        </div>
    )
}
