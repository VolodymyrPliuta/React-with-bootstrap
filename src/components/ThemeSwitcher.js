import React, { Component } from 'react';


class ThemeSwitcher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayOfCards: [ "show", " ", " ", " ", " " ]
    }
    this.nextButtonAccordianItems = this.nextButtonAccordianItems.bind(this);
    this.normalAccordianItem      = this.normalAccordianItem.bind(this);
  }
  // need to be able to manipulate the state from the containing component.
  // pass the bound function into the component.
  // myjaxchamber.com
//

  nextButtonAccordianItems( cardNumber ) {
    const newItems = [...this.state.arrayOfCards];
    const newNum = +cardNumber+1
    newItems[cardNumber] = " "
    newItems[newNum] = (newItems[newNum] === "show")
      ? newItems[newNum] = "show"
      : newItems[newNum] = "show"

    this.setState({
      arrayOfCards: newItems
    });
  }

  normalAccordianItem( cardNumber ) {
    const newItems = [...this.state.arrayOfCards];

    newItems[cardNumber] = (newItems[cardNumber] !== "show")
      ? newItems[cardNumber] = "show"
      : newItems[cardNumber] = " "

    this.setState({
      arrayOfCards: newItems
    });
  }


  render() {
    return (
      <div>
        <div className="accordion">
          <CustomCardItem
            cardNumber="0"
            header="Collapsible Group Item #0"
            body="Body for card number 0."

            nextButton={ true }
            showToggle={this.state.arrayOfCards[0]}
            nextButtonAccordianItems={this.nextButtonAccordianItems}
            normalAccordianItem={this.normalAccordianItem}
          />

          <CustomCardItem
            cardNumber="1"
            header="Collapsible Group Item #1"
            body="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
            Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."

            nextButton={ true }
            showToggle={this.state.arrayOfCards[1]}
            nextButtonAccordianItems={this.nextButtonAccordianItems}
            normalAccordianItem={this.normalAccordianItem}
          />

          <CustomCardItem
            cardNumber="2"
            header="Collapsible Group Item #2"
            body="Body for card number 2."

            nextButton={ true }
            showToggle={this.state.arrayOfCards[2]}
            nextButtonAccordianItems={this.nextButtonAccordianItems}
            normalAccordianItem={this.normalAccordianItem}
          />

          <CustomCardItem
            cardNumber="3"
            header="Collapsible Group Item #3"
            body="Did you know, one in five college graduates are named fred?"

            nextButton={ true }
            showToggle={this.state.arrayOfCards[3]}
            nextButtonAccordianItems={this.nextButtonAccordianItems}
            normalAccordianItem={this.normalAccordianItem}
          />

         <CustomCardItem
            cardNumber="4"
            header="Collapsible Group Item #4"
            body="body 4 is done"

            nextButton={ false }
            showToggle={this.state.arrayOfCards[4]}
            nextButtonAccordianItems={this.nextButtonAccordianItems}
            normalAccordianItem={this.normalAccordianItem}
          />

        </div>
    </div>
    );
  }
}

const CustomCardItem = ( { cardNumber , header, body, nextButton, showToggle, normalAccordianItem, nextButtonAccordianItems } ) => {

  /* button to call function. */
  console.log({showToggle})
  return (
    <div className="card">
      <div className="card-header" id={"heading"+cardNumber}>
        <h5 className="mb-0">
          <button className="btn btn-link" onClick={normalAccordianItem.bind(null, cardNumber)}>
            { header }
          </button>
        </h5>
      </div>

      <div id={"collapse"+cardNumber} className={"collapse "+ showToggle} >
        <div className="card-body">
          { body }
        </div>
        { (nextButton === true)
          ? <button className="btn btn-link" onClick={nextButtonAccordianItems.bind(null, cardNumber)}>Next</button>
          : <div></div>
        }
      </div>
    </div>
  )
}

export default ThemeSwitcher;
