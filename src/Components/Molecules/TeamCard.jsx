import React from 'react';
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const TeamCard = ({name,nationality}) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" alt={name} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {nationality}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    // <article className="card">
    //     <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    //       <Link to={`/cursos/${id}`}>
    //         <img src={image} alt={title}/>
    //       </Link>
    //     </div>
    //     <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    //       <h3 className="center">{title}</h3>
    //       <div className="s-main-center">
    //         {profesor}
    //       </div>
    //       <div className="s-main-center">
    //         <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price}`}</a>
    //       </div>
    //     </div>
    //   </article>
)
TeamCard.propTypes = {
  name: PropTypes.string,
  nationality: PropTypes.string
}

TeamCard.defaultProps = {
  name: "No se encontro nombre",
  nationality: "Unknown"
}

export default TeamCard;