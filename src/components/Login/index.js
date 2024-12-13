import {Component} from 'react'
import './index.css'

class Login extends Component{
    render(){
        return(
            <div className="bg-container">
                <div className="first">
            <img src="https://i.imghippo.com/files/oZul9054Qhk.jpeg" alt="" className="img1"/>
            <img src="https://i.imghippo.com/files/GVT6308xgQ.png" alt="" className="img2"/>
            <img src="https://i.imghippo.com/files/GVT6308xgQ.png" alt="" className="img3"/>
                </div>
            <div className="second">
                <img src="https://i.imghippo.com/files/GVT6308xgQ.png" alt="" className="img4"/>
                <img src="https://i.imghippo.com/files/GVT6308xgQ.png" alt="" className="img5"/>
                <img src="https://i.imghippo.com/files/GVT6308xgQ.png" alt="" className="img6"/>

            </div>
            <div className="third">
                <img src="https://i.imghippo.com/files/GVT6308xgQ.png" alt="" className="img7"/>
                <img src="https://i.imghippo.com/files/GVT6308xgQ.png" alt="" className="img8"/>
                <img src="https://i.imghippo.com/files/GVT6308xgQ.png" alt="" className="img9"/>
            </div>
           <div className="new-container">
                <div className="head">
                    <h1>vibesnap</h1>
                    <p>Moments the matter that shared</p>

                </div>
                <div className="tail">
                    <button>
                        <p> Continue with Google </p>
                    </button>
                </div>

           </div>
        </div>
        )
    }
}
export default Login