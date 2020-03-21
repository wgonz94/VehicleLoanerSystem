import React from 'react';
import { Row, Col } from '../../components/Grid';

function Unavailable() {

return(
<div>
    <Row>
        <Col size='md-12'>
            <h2 classname='center'>These vehicles may be Unavailable for such reasons:</h2>
            <ul>
                <li>Customer Transfer (Order Pending Sale)</li>
                <li>Vehicle Recall</li>
                <li>Does not meet Loaner Requirements</li>
                <li>Transfer Pending Vehicle</li>
            </ul>
        </Col>
    </Row>
</div>
)
}

export default Unavailable;