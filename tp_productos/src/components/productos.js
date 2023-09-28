
import 'bootstrap';
import React, {  useRef, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { data } from './data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, ButtonGroup, Button, CardGroup, Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, CardLink } from 'reactstrap';


function Home() {

  return (
    <>
    <ButtonGroup className="my-2">
        <Button> 
            <Link to="/">Home</Link>
        </Button>
        <ButtonGroup>
            <UncontrolledDropdown>
            <DropdownToggle caret>
                Filtrar
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem >
                Categoria 1
                </DropdownItem>
                <DropdownItem >
                Categoria 2
                </DropdownItem>
                <DropdownItem >
                Categoria 3
                </DropdownItem>
                <DropdownItem>
                Categoria 4
                </DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>
        </ButtonGroup>
        </ButtonGroup>
      <center>
      {
                data.map((item) => {
                  return <li key={item.id}>
                    <Card
                      style={{
                        width: '18rem'
                      }}
                    >
                      <CardBody>
                        <CardTitle tag="h5">
                          Card title
                        </CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        >
                          Card subtitle
                        </CardSubtitle>
                      </CardBody>
                      <img
                        alt="Card cap"
                        src={item.imgUrl}
                        width="100%"
                      />
                      <CardBody>
                        <CardText> a </CardText>
                        <CardLink href="#">
                          Mas detalle
                        </CardLink>
                      </CardBody>
                    </Card>
                  </li>
                })
              }
              </center>
      
    </>
  );
}

export default Home;