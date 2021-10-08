import { useEffect,useState} from "react";
import axios from "axios";

function AImages() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        async function getImage() {
            let newArray = [];
            const res = await axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=w3K0RU7Q4hQ1kGkG89imF6dfzI2SwOA7");
            const data = res.data;
            let i = 1;
            while (i < 11) {
                newArray.push(data.results[i].multimedia)
                i++;
                // console.log(newArray);
             
            }
            setImages(newArray);
        }
            getImage();
        }, [])

    // const iterable = images;
    // for ( const variable of iterable) {
    //     console.log(variable.multimedia.src);
    //   }
    
    return (
        <div>
            {
                images.map((image) => {
                    console.log(image);
                    return (
                        <div>
                            <img src={image.src} alt={image.type}/>
                        </div>
                    )
                })
           }
        </div>
    )
}

export default AImages;

// onPress = () => {
//     const newArr2 = []
//     for (var i = 5; i < 10 && i < data.length; i++) {
//         newArr2.push(data[i])
//     }
//     setDataList([...dataList, newArr2])
//     console.log("dataList", dataList)
// }
// setDataList(dataList.concat(newArr2))