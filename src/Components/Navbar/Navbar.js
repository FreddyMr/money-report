import React from "react"
import { Menu } from 'semantic-ui-react'
import Slider from "react-slick";
class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            db: {}
        }
    }
    readDB() {

        this.setState({
            db: (JSON.parse(localStorage.getItem("freddy_db")))
        })
        console.log(this.state.db)
    }
    componentWillMount() {
        this.readDB()
    }
    render() {
        var allcost = 0, allearn = 0, ii = 0;
        for (ii = 0; ii < this.state.db.history.length; ii++) {
            if (this.state.db.history[ii].cost) {
                allcost += this.state.db.history[ii].howmany
            }
            else {
                allearn += this.state.db.history[ii].howmany
            }
        }
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: "linear"
        };
        return <div><Menu pointing secondary id='Navbar'>
            <nav style={{
                lineHeight: 0
            }}>
                <h1 id='title'>Freddy Money Report</h1>
            </nav>
        </Menu>
            <div>
                <Slider {...settings}>
                    <div class='slide'>
                        <h1>总支出：</h1>
                        <h1>{allcost}</h1>
                    </div>
                    <div class='slide'>
                        <h1>总收入：</h1>
                        <h1>{allearn}</h1>
                    </div>
                    <div class='slide'>
                        <h1>结余：</h1>
                        <h1>{allearn-allcost}</h1>
                    </div>
                </Slider>
            </div>
        </div>
    }
}
export default Navbar;