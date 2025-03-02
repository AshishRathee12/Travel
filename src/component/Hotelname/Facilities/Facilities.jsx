import React, { useEffect, useState } from 'react'

export default function Facilities({ id }) {

    const [totalfaci, setTotalfact] = useState([])

    const url2 = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/details?domain=IN&hotel_id=${id}&locale=en_IN`;
    const options2 = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f288f4fb1cmshadfa18f64a886e8p1b155bjsn407b3d6b2b7f',
            'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
        }
    };


    useEffect(() => {
        const maindata = async () => {
            try {
                const response = await fetch(url2, options2);
                const result = await response.json();
                // console.log(result.summary.location.coordinates);
                // console.log(result.summary.location.coordinates.latitude);
                const facilites = result.summary.amenities.amenities;
                // console.log(result);
                totalfaci(facilites);

            } catch (error) {
                console.error(error);
            }
        }
        maindata();
    }, [id]);






    return (
        <div>
            sdfj
        </div>
    )
}
