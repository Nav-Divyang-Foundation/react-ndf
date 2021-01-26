import React, { useEffect } from 'react';
import './photoGallery.css';
import diwali1 from './images/diwali/Diwali art & craft and understanding festival of Diwali (2).jpeg';
import diwali2 from './images/diwali/Diwali art & craft and understanding festival of Diwali.jpeg';
import christmas1 from './images/christmas/Christmas Card making and understanding of festival of christmas.jpeg';
import christmas2 from './images/christmas/Christmas Card making and understanding of festival of christmas (2).jpeg';
import christmas3 from './images/christmas/Christmas Card making and understanding of festival of christmas (3).jpeg';
import christmas4 from './images/christmas/Christmas Card making and understanding of festival of christmas 3.jpeg';
import christmas5 from './images/christmas/Christmas Card making and understanding of festival of christmas4.jpeg';
import christmas6 from './images/christmas/Christmas Card making and understanding of festival of christmas 5.jpeg';
import christmas7 from './images/christmas/Christmas Card making and understanding of festival of christmas 6.jpeg';
import christmas8 from './images/christmas/Christmas Card making and understanding of festival of christmas 7.jpeg';
import christmas9 from './images/christmas/Christmas Card making and understanding of festival of christmas 8.jpeg';
import newyear1 from './images/new_year/Educating on concept of new year and card making (2).jpeg';
import newyear2 from './images/new_year/Educating on concept of New year and card making (3).jpeg';
import newyear3 from './images/new_year/Educating on concept of new year and card making.jpeg';
import random1 from './images/random/Art & Craft.jpeg';
import random2 from './images/random/Big & small concept.jpeg';
import random3 from './images/random/Color identification.jpeg';
import random4 from './images/random/Color sorting.jpeg';
import random5 from './images/random/identifying & sorting activity.jpeg';
import random6 from './images/random/Identifying & Uses of Daily objects.jpeg';
import random7 from './images/random/Litrary & writing.jpeg';
import random8 from './images/random/Maths number counting.jpeg';

export default function PhotoGallery() {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <div className="photo-gallery-container">
            <p className="photo-gallery-title">Nav Divyang Foundation</p>
            <p className="photo-gallery-subtitle">Photo Gallery</p>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'self-end'}}>
                <PhotoCard img={diwali1} desc={"Diwali art & craft and understanding festival of Diwali"} />
                <PhotoCard img={random1} desc="Art & Craft"/>
                <PhotoCard img={diwali2} desc={"Diwali art & craft and understanding festival of Diwali"} />
                <PhotoCard img={random2} desc="Big & small concept"/>
                <PhotoCard img={christmas1} desc="Christmas Card making and understanding of festival of christmas"/>
                <PhotoCard img={christmas3} desc="Christmas Card making and understanding of festival of christmas"/>
                <PhotoCard img={random3} desc="Color identification"/>
                <PhotoCard img={christmas2} desc="Christmas Card making and understanding of festival of christmas"/>
                <PhotoCard img={christmas4} desc="Christmas Card making and understanding of festival of christmas"/>
                <PhotoCard img={christmas5} desc="Christmas Card making and understanding of festival of christmas"/>
                <PhotoCard img={random4} desc="Color sorting"/>
                <PhotoCard img={christmas6} desc="Christmas Card making and understanding of festival of christmas"/>
                <PhotoCard img={christmas7} desc="Christmas Card making and understanding of festival of christmas"/>
                <PhotoCard img={random5} desc="identifying & sorting activity"/>
                <PhotoCard img={christmas8} desc="Christmas Card making and understanding of festival of christmas"/>
                <PhotoCard img={random6} desc="Identifying & Uses of Daily objects"/>
                <PhotoCard img={christmas9} desc="Christmas Card making and understanding of festival of christmas"/>
                <PhotoCard img={newyear1} desc="Educating on concept of new year and card making"/>
                <PhotoCard img={random7} desc="Litrary & writing"/>
                <PhotoCard img={newyear2} desc="Educating on concept of new year and card making"/>
                <PhotoCard img={newyear3} desc="Educating on concept of new year and card making"/>
                <PhotoCard img={random8} desc="Maths number counting"/>
            </div>
        </div>
    )
}

function PhotoCard({img, desc}) {
    return(
        <div className="photo-card">
            <div style={{width: '100%', borderRadius: '10px'}}><img style={{borderRadius: '10px 10px 0 0'}} alt={desc} src={img} /></div>
            <div className="description-div">
                <p className="photo-description">{desc}</p>
            </div>
        </div>
    )
}