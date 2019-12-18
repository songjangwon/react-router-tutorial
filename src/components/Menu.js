import React from 'react';
import { Navbar, Nav, NavDropdown, Form ,FormControl , Button} from 'react-bootstrap';


const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (

        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Song's page </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="내정보" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/posts">Posts</NavDropdown.Item>
                            <NavDropdown.Item href="/myAsset">계좌정보</NavDropdown.Item>
                            <NavDropdown.Item href="/option">설정</NavDropdown.Item>
                            <NavDropdown.Item href="/todoList">Todolist</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">logout</NavDropdown.Item>

                            {/* <NavDropdown.Item href="/posts">Posts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
            {/* <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul> */}
            <hr />
        </div>
    );
};

export default Menu;