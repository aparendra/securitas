import React from 'react';
import {
    Card, 
    // Button,
     CardHeader,
    //   CardFooter, 
      CardBody,
    // CardTitle,
     CardText,
    //   Row
} from 'reactstrap';
import Select from 'react-select';

const scaryAnimals = [
    { label: "Alligators", value: 1 },
    { label: "Crocodiles", value: 2 },
    { label: "Sharks", value: 3 },
    { label: "Small crocodiles", value: 4 },
    { label: "Smallest crocodiles", value: 5 },
    { label: "Snakes", value: 6 },
];

class CardCustom extends React.Component {
    render() {
        return (
            <div>

                <Card>
                    <CardHeader>Locations</CardHeader>
                    <CardBody>
                        {/* <CardTitle>Locations</CardTitle> */}
                        <CardText>


                            <Select options={scaryAnimals} isMulti />


                        </CardText>
                        {/* <Button>Go somewhere</Button> */}
                    </CardBody>
                    {/* <CardFooter>Footer</CardFooter> */}
                </Card>

                <Card>
                    <CardHeader>Projects</CardHeader>
                    <CardBody>
                        {/* <CardTitle>Locations</CardTitle> */}
                        <CardText>


                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><input type="checkbox" checked></input>&nbsp;<label>No Position</label></li>
                                <li class="list-group-item"><input type="checkbox"></input>&nbsp;<label>Supervisor </label></li>
                                <li class="list-group-item"><input type="checkbox"></input>&nbsp;<label>Coordinator</label></li>
                                <li class="list-group-item"><input type="checkbox"></input>&nbsp;<label>Front Desk</label></li>
                                <li class="list-group-item"><input type="checkbox"></input>&nbsp;<label>Manager</label></li>
                                <li class="list-group-item"><input type="checkbox"></input>&nbsp;<label>Floor</label></li>
                            </ul>

                        </CardText>
                        {/* <Button>Go somewhere</Button> */}
                    </CardBody>
                    {/* <CardFooter>Footer</CardFooter> */}
                </Card>

                {/* <Card>
                <CardHeader tag="h3">Featured</CardHeader>
                <CardBody>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </CardBody>
                <CardFooter className="text-muted">Footer</CardFooter>
              </Card> */}
            </div>
        );
    }
}
export default CardCustom;