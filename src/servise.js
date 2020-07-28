
export default class GalleryService {

    getPhotos = async( page,id,typeRes ) => {
        const typeUrl = id? `${typeRes}/${id}/` : "";
        return await new Promise ( (resolve) => {
            setTimeout( async() => {
                const res =  await fetch(`https://api.unsplash.com/${typeUrl}photos?page=${page}&per_page=20`, {
                    method: "get",
                    headers: {
                        "Authorization": "Client-ID c26a315de3c6ec7db76739c8fcf62278eb7fbebbe3c09340ce1a25d0781e6d40"
                    }
                });
                const result = await res.json();
                resolve(result)
            }, 0)
        })
    };

    getRandomPhoto = async() => {
        const res =  await fetch(`https://api.unsplash.com/photos/random`, {
            method: "get",
            headers: {
                "Authorization": "Client-ID c26a315de3c6ec7db76739c8fcf62278eb7fbebbe3c09340ce1a25d0781e6d40"
            }
        });
        const result = await res.json();
        return result
    };

    getOnePhoto = async(id) => {
        const res =  await fetch(`https://api.unsplash.com/photos/${id}`, {
            method: "get",
            headers: {
                "Authorization": "Client-ID c26a315de3c6ec7db76739c8fcf62278eb7fbebbe3c09340ce1a25d0781e6d40"
            }
        });
        const result = await res.json();
        return result
    };

    getUserProfile = async (username) => {
        const res = await fetch(`https://api.unsplash.com/users/${username}`,{
            method: "get",
            headers: {
                "Authorization": "Client-ID c26a315de3c6ec7db76739c8fcf62278eb7fbebbe3c09340ce1a25d0781e6d40"
            }
        });
        const result = await res.json();
        return result
    }

}

// const service = new GalleryService();

// service.getPhotos()
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// collections/3330452/

//c26a315de3c6ec7db76739c8fcf62278eb7fbebbe3c09340ce1a25d0781e6d40