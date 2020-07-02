import React from 'react'
import { Container, Jumbotron, Button } from 'reactstrap';

const DetailComp = (props) => {
    const judul= props.location.state.judul;
    const tanggal = props.location.state.tanggal;
    console.log("judul:"+judul);
    return (
     <Container>
        <Jumbotron>
          <h1 className="display-3">{props.location.state.judul}</h1>
          <p className="lead">{props.location.state.tanggal}</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </Container>
    )
}


export default DetailComp