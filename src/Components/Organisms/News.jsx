import React from 'react'
import news1 from '../../img/news1.jpg'
import Figure from 'react-bootstrap/Figure'

const News = () => (
    <Figure>
        <Figure.Image
            width={640}
            height={310}
            alt="noticia1"
            src={news1}
        />
        <Figure.Caption>
            Descripcion de la noticia.
        </Figure.Caption>
    </Figure>
)

export default News