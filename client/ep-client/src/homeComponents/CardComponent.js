import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./HomeComponents.css";
import Pic1 from "./images/Card-1.jpg";
import Pic2 from "./images/Card-2.jpg";
import Pic3 from "./images/Card-3.jpg";
import Pic4 from "./images/Card-4.jpg";

export default function CardComponent() {
return (
<CardGroup>
  <Card>
    <Card.Img variant="top" src={Pic1} />
    <Card.Body>
      <Card.Title className="card_title">Create Quiz</Card.Title>
      <Card.Text>
        ExamPlus allows you to create your customizable quiz, schedule the date
        and duration, and monitor the results.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Pic2} />
    <Card.Body>
      <Card.Title className="card_title"> Unlimited Quizes</Card.Title>
      <Card.Text>
        ExamPlus allows you to attempt unlimited quizes and
        keep a track of the past and upcoming quizes.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Pic3} />
    <Card.Body>
      <Card.Title className="card_title">Score Records</Card.Title>
      <Card.Text>
        With ExamPlus, you can keep a track of the your scores and past records, all in one-place! 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Pic4} />
    <Card.Body>
      <Card.Title className="card_title">Customer Support</Card.Title>
      <Card.Text>
        You can contact our customer team directly in case of queries.
        {<br/>}Write to us: ExamPlus@gmail.com
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
)
}