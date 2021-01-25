import React from 'react';
import './photoGallery.css';

export default function PhotoGallery() {
    return (
        <div className="photo-gallery-container">
            <h1>Photo Gallery</h1>
            <div>
                <h2>Christmas</h2>
                <div>
                    <p>list of all photos</p>
                </div>
            </div>
            <div>
                <h2>{'Diwali & activities'}</h2>
                <div>
                    <p>list of rest of the photos</p>
                </div>
            </div>
        </div>
    )
}