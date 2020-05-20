import React, { Component } from 'react'

class Search extends Component {
    filterUpdate() {
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }
    render() {
        return(
            <form>
                <input 
                    type="text"
                    placeholder="Qual time?"
                    ref={(value) => this.myValue = value}
                    onChange={this.filterUpdate.bind(this)}
                />
                <p>filtrando por: {this.props.filterText}</p>
            </form>
        )
    }
}

export default Search;