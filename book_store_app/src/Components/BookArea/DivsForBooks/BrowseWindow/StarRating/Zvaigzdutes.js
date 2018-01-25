import React from 'react';


const zvaigzdutes = ( props ) => {

    let x =[];
    let iki = props.rating;
    let pilnos = Math.floor(iki);
    let key =0;     //pushinant i masyva reik unikalaus key kad nemestu warningo, be jo ir sukasi, bet raudonuoja :)
    //spausdinam pilnas

     //spausdinam pusines
    for(let i=0; i<pilnos; i++){
        x.push(<i key={key++} className="fa fa-star" aria-hidden="true" />);
    }


    //spausdinam pusines
    if(pilnos<iki){
        x.push(<i key={key++} className="fa fa-star-half-o" aria-hidden="true" />);
        iki++;
    }
    //soausdinam tuscias
    for(let i=iki; i<5; i++){
        x.push(<i key={key++} className="fa fa-star-o" aria-hidden="true" />);
    }


    return (
        <div className={props.spalva}>
            {x}
        </div>
    )
};

export default zvaigzdutes;