import React from "react";



class Age extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            clicks: 0,
            remainingClicks: 100,
        }
    }

    clickMe () {
        this.setState({
            clicks: this.state.clicks + 1,
            remainingClicks: this.state.remainingClicks -1,
        })
    }
 
    render() {
        return (
            <p onClick={()=> this.clickMe()
            }>{this.state.clicks}, {this.state.remainingClicks}</p>
        )
    }
}


export default Age;