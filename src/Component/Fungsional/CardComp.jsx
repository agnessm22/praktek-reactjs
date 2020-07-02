import React from 'react';
import {Link} from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class CardComp extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }

    render() {
    return (
        <Card>
            <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
            <CardBody>
                <CardTitle><h3>{this.props.judul}</h3></CardTitle>
                <CardSubtitle>{this.props.tanggal}</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>
                    <Link to ={
                        {
                            pathname: `/detail/${this.props.id}` ,
                            state: {
                                judul: this.props.judul,
                                tanggal: this.props.tanggal
                            }
                        }
                    }>Detail</Link>
                </Button>
            </CardBody>
        </Card>
    )
  }
}

export default CardComp