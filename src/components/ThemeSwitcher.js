import React, { Component } from 'react';

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
          {/*
            <CustomCardItem
              cardNumber="One"
              nextButton="true"
              header="Collapsible Group Item #1"
              body="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
              3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. 
              Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
            />
          */}
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne">
                  Collapsible Group Item #1
                </button>
              </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingThree" >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo">
                  Next
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo">
                  Collapsible Group Item #2
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseThree">
                Next
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseThree">
                  Collapsible Group Item #3
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseFour">
                Next
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseFour">
                  Collapsible Group Item #4
                </button>
              </h5>
            </div>
            <div id="collapseFour" className="collapse show" aria-labelledby="headingThree" >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className="d-flex flex-wrap justify-content-center position-relative w-100 h-1-0 align-items-center align-content-center">
          <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{ theme || 'Default' }</span>
          <div className="btn-group">
            <button type="button" className={`btn btn-${themeClass} btn-lg`}>{ theme || 'Choose' } Theme</button>
            <button type="button" className={`btn btn-${themeClass} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="sr-only">Toggle Theme Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Primary', e)}>Primary Theme</a>
              <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Danger', e)}>Danger Theme</a>
              <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Success', e)}>Success Theme</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" onClick={this.resetTheme}>Default Theme</a>
            </div>
          </div>
          <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{ theme || 'Default' }</span>
          <div className="btn-group">
            <button type="button" className={`btn btn-${themeClass} btn-lg`}>{ theme || 'Choose' } Theme</button>
            <button type="button" className={`btn btn-${themeClass} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="sr-only">Toggle Theme Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Primary', e)}>Primary Theme</a>
              <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Danger', e)}>Danger Theme</a>
              <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Success', e)}>Success Theme</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" onClick={this.resetTheme}>Default Theme</a>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default ThemeSwitcher;
