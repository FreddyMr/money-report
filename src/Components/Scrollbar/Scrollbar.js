import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Grid, Modal, Form, Checkbox, Image, List, Button } from 'semantic-ui-react';

export default class Scrollbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            db: {
                name: "Freddy",
                amount: 0,
                history: [{
                    cost: true,
                    howmany: 100,
                    img: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
                    detail: "play",
                    description: "play games"
                },
                {
                    cost: true,
                    howmany: 100,
                    img: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
                    detail: "play",
                    description: "play games"
                }]
            }
        }
    }
    readDB() {
        
        this.setState({
            db: (JSON.parse(localStorage.getItem("freddy_db")))
        })
        console.log(this.state.db)
    }

    writeDB() {
        localStorage.setItem("freddy_db", JSON.stringify(this.state.db))
    }

    setOpen(val) {
        this.setState({
            open: val
        })
    }
    handleAddSubmit = (e) => {
        console.log(e)
        if ((e.target[1].checked && e.target[2].checked) || !(e.target[1].checked || e.target[2].checked)) {
            alert("You must select ONE option!")
            return
        } else {
            this.state.db.history.push({
                cost: e.target[1].checked,
                howmany: parseInt(e.target[0].value),
                img: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
                detail: e.target[3].value,
                description: e.target[4].value
            })
            this.writeDB()
            this.setOpen(false)
            window.location.reload(false)
        }
    }

    componentDidMount () {
        this.readDB()
    }

    render() {
        console.log(1)
        console.log(this.state.db)
        console.log(1)
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 12,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            beforeChange: function (currentSlide, nextSlide) {
                console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                console.log("after change", currentSlide);
            },
            data: this.state.db
        };
        console.log(this.state.db)


        return (
            <div>
                <Modal
                    onClose={() => this.setOpen(false)}
                    onOpen={() => this.setOpen(true)}
                    open={this.state.open}>
                    <Modal.Header>add a new thing</Modal.Header>
                    <Modal.Content>
                        <div>
                            <Form onSubmit={this.handleAddSubmit}>
                                <Form.Field>
                                    <label>Howmany</label>
                                    <input placeholder='Howmany' />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox label='Cost' />
                                    <Checkbox label='Earn' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Why</label>
                                    <input placeholder='Why' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Description</label>
                                    <input placeholder='Description' />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>

                            </Form>
                        </div>
                    </Modal.Content>
                </Modal>
                <Grid.Row id="sc-row">
                    <Grid.Column>
                        <List celled>
                            {/* <Card>
                                <Card.Content>
                                    <Image
                                        floated='right'
                                        size='mini'
                                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                    />
                                    <Card.Header>Steve Sanders</Card.Header>
                                    <Card.Meta>Friends of Elliot</Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                            </Card> */}
                            {this.state.db.history.map((item) => {
                                if (item.cost) {
                                    var text = "Cost:" + item.howmany
                                }
                                else {
                                    var text = "Earn:" + item.howmany
                                }
                                return <Card>
                                    <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                        />
                                        <Card.Header>{text}</Card.Header>
                                        <Card.Meta>{item.detail}</Card.Meta>
                                        <Card.Description>{item.description}</Card.Description>
                                    </Card.Content>
                                </Card>
                            })}
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Button.Group widths='100%' id='buttons'>
                    <Button class="button">One</Button>
                    <Button  class="button" onClick={() => this.setOpen(true)}>Add</Button>
                    <Button class="button">Three</Button>
                </Button.Group>
            </div>
        );
    }
}