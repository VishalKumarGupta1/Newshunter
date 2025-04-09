import './Card.css'
import { useEffect } from 'react';

const Card = ({ data }) => {
    console.log(data);

    useEffect(() => {
        console.log("Data updated", data);
    }, [data]);

    return (
        <>
            <div className='card-container' >
                {data.map((item, index) => {
                    if (!item.urlToImage) {
                        return null;
                    }
                    else {
                        return (<div className="card" key={index}>
                            <img src={item.urlToImage} alt="" />
                            <div className="content">
                                <a onClick={() => window.open(item.url)}>{item.title}</a>
                                <p>{item.description}</p>
                                <button onClick={() => window.open(item.url)}>
                                    Read more
                                </button>
                            </div>
                        </div>

                        )
                    }
                })}
            </div>
        </>
    )
}

export default Card
