import React from 'react';
import {
    Card,
    //  Button, 
     CardHeader, 
    //  CardFooter, 
     CardBody,
    // CardTitle, 
    CardText
} from 'reactstrap';
import FullCalendar from 'fullcalendar-reactwrapper';

class FullcalendarCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    title: 'All Day Event',
                    start: '2018-11-01'
                },
                {
                    title: 'Long Event',
                    start: '2018-11-07',
                    end: '2018-11-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-11-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-11-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2018-11-11',
                    end: '2018-11-13'
                },
                {
                    title: 'Meeting',
                    start: '2018-11-12T10:30:00',
                    end: '2018-11-12T12:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2018-11-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2018-11-28'
                }
            ],
        }
    }

    render() {
        return (
            <div id="example-component">

                <Card>
                    <CardHeader>Calendar</CardHeader>
                    <CardBody>

                        <CardText>

                            <div className="app">
                                <div className="container">
                                    <FullCalendar
                                        id="your-custom-ID"
                                        header={{
                                            left: 'prev,next today myCustomButton',
                                            center: 'title',
                                            right: 'month,basicWeek,basicDay'
                                        }}
                                        defaultDate={'2018-11-12'}
                                        navLinks={true} // can click day/week names to navigate views
                                        editable={true}
                                        eventLimit={true} // allow "more" link when too many events
                                        events={this.state.events}
                                    />
                                </div>
                            </div>

                        </CardText>
                        {/* <Button>Go somewhere</Button> */}
                    </CardBody>
                    {/* <CardFooter>Footer</CardFooter> */}
                </Card>

            </div>
        );
    }
}

export default FullcalendarCustom;