import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import TabsCustom from './TabsCustom';
import FullcalendarCustom from './FullcalendarCustom';
import CardCustom from './CardCustom';

export default class ContainerCustom extends React.Component {
    render() {
        return (
            <Container fluid>
              
                <Row>
                    <Col sm="2">
                       
                            {/* <TabsCustom></TabsCustom> */}
                            <CardCustom></CardCustom>
                       
                    </Col>
                    
                    <Col sm="2">
                       
                       {/* <TabsCustom></TabsCustom> */}
                       {/* <CardCustom></CardCustom> */}
                  
               </Col>            
                    <Col>
                        <FullcalendarCustom></FullcalendarCustom>
                    </Col>
                </Row>
            </Container>
        );
    }
}