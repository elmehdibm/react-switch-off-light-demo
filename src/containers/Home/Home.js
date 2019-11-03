import React, { Component } from 'react';
import { sayHello } from '../../actions/greeting';
import { connect } from 'react-redux';
import FocusedContent from "react-switch-off-light";
import FantasticSolid from "../../ressources/pied.jpg";
import Princpale from "../../ressources/principale.jpg";
import Tete from "../../ressources/tete.jpg";
import LightIcon from "../../ressources/light-icon.png";
import "./styles.scss";

class Home extends Component {
  componentWillMount(){
    const { dispatchHello } = this.props;
    dispatchHello("Hello React World !");
  }
  render() {
    const {children} = this.props;
    return (
<FocusedContent.LightZone>
      <div
        className="box1"
        style={{
          "backgroundImage": `url(${FantasticSolid})`,
          "&:hover": {
            "border": "solid 1px",
            "borderRadius": "18px",
            "boxShadow": "1px 1px 5px"
          }
        }}>


        <div
          className="box2"
          style={{
            "backgroundImage": `url(${Princpale})`,
          }}>
          
          <FocusedContent.Component>
          <div
            className="box3"
            style={{
              "backgroundImage": `url(${Tete})`,
            }}>
                      <img
          src={LightIcon}
          className="light-icon"
          style={{
            "position": "absolute",
            "width": "65px",
            "height": "65px",
            "cursor": "pointer",
          }}
          onClick={
            () => {
              FocusedContent.switchOff();
            }
          }
        />
          </div>
          </FocusedContent.Component>
        </div>

      </div>
      </FocusedContent.LightZone>
    )
  }
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  "dispatchHello": sayHello
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
