const apiKey = "jDnMo3YUo8X4mnOfkaJ_1HqVkxefuMshmayPz4YliZhuZ06X_2bInzLHe2-yzpiqT5VJJXT_Tn0te3R1-TAEXpc9MOmvJCEX03NfzXg9M2n7HQEA3W9BcsXkhe7FZHYx"; 
const yelpBaseUrl = 'https://api.yelp.com/v3';

function search(term, location, sortBy){
    const corsOverride = 'https://cors-anywhere.herokuapp.com/' //must go to https://cors-anywhere.herokuapp.com/corsdemo and request temporary access in order to use CORS Anywhere.
    const searchEndpoint = '/businesses/search';
    const queryParams = `?location=${location}&term=${term}&sort_by=${sortBy}&limit=18`;
    const urlToFetch =  corsOverride + yelpBaseUrl + searchEndpoint + queryParams;
    console.log(urlToFetch)
    return fetch(urlToFetch,{
        headers:{
            Authorization: `Bearer ${apiKey}`
        }
    }).then(response=>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Request Failed!');
    }, networkError=> console.log(networkError.message)
    ).then(jsonResponse=>{
        if(jsonResponse.businesses){
            return jsonResponse.businesses.map((business)=>({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
            }))
        }
    });
}

export default search