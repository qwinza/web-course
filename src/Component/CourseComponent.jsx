import * as React from 'react';
import ImageCerti from '../img/image-sertifikat.jpeg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Course() {
    return (
        <div className="cards">
            <article className="card">
                <h2>A card</h2>
                <p>This is a card. There are many like it but this one is mine.</p>
            </article>
            <article className="card">
                <h2>A card</h2>
                <p>This is a card. There are many like it but this one is mine.</p>
            </article>
        </div>
    )
}