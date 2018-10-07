import React, { Component } from 'react';

const CustomCardItem = ( { cardNumber, showDefault, nextButton, header, body} ) => {
  let nextNumber = +cardNumber + 1
  let showy = (showDefault==true) ? " show" : ""
  return (
    <div className="card">
      <div className="card-header" id={"heading"+cardNumber}>
        <h5 className="mb-0">
          <button className="btn btn-link" data-toggle="collapse" data-target={"#collapse"+cardNumber}>
            { header }
          </button>
        </h5>
      </div>

      <div id={"collapse"+cardNumber} className={"collapse"+ showy} >
        <div className="card-body">
          { body }
        </div>
        { (nextButton === true)
          ? <button className="btn btn-link" data-toggle="collapse" data-target={"#collapse"+nextNumber}>Next</button>
          : <div></div>
        }
      </div>
    </div>
  )
}

class ThemeSwitcher extends Component {
  state = { theme: null }

  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  }

  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  }

  render() {
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'secondary';

    return (
      <div>
        <div className="accordion" id="accordionExample">
                    
          <CustomCardItem
            cardNumber="1"
            showDefault={ true }
            nextButton={ true }
            header="Collapsible Group Item #1"
            body="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
            3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. 
            Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
          />
          
          <CustomCardItem
            cardNumber="2"
            nextButton={ true }
            header="Collapsible Group Item #2"
            body="Body for card number 2."
          />

          <CustomCardItem
            cardNumber="3"
            nextButton={ true }
            header="Collapsible Group Item #3"
            body="Did you know, one in five college graduates are named fred?"
          />

         <CustomCardItem
            cardNumber="4"
            nextButton={ false }
            header="Collapsible Group Item #4"
            body="body 4 is done"
          />


        </div>
    </div>
    );
  }
}

export default ThemeSwitcher;
