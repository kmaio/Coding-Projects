import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      question: null,
      count: 0,
    }
  }

  getActivity = () => {
    axios
      .get("https://www.boredapi.com/api/activity?")
      .then(response => {
        this.setState({
          question: response.data.activity,
        })
      })
  }

  getActivity1 = () => {
    axios 
    .get("https://www.boredapi.com/api/activity?participants=1")
    .then( response => {
      this.setState({
        question: response.data.activity,
        })
    })
  }

  getActivity2 = () => {
    axios 
    .get("https://www.boredapi.com/api/activity?participants=2")
    .then( response => {
      this.setState({
        question: response.data.activity,
        })
    })
  }

  getActivity3 = () => {
    axios 
    .get("https://www.boredapi.com/api/activity?participants=3")
    .then( response => {
      this.setState({
        question: response.data.activity,
        })
    })
  }

  getActivity4 = () => {
    axios 
    .get("https://www.boredapi.com/api/activity?participants=4")
    .then( response => {
      this.setState({
        question: response.data.activity,
        })
    })
  }
  
  getActivity5 = () => {
    axios 
    .get("https://www.boredapi.com/api/activity?participants=5")
    .then( response => {
      this.setState({
        question: response.data.activity,
        })
    })
  }

  getActivityType1 = () => {
    axios
      .get("https://www.boredapi.com/api/activity?type=education")
      .then(response => {
        this.setState({
          question: response.data.activity,
        })
      })
  }

  getActivityType2 = () => {
    axios
      .get("https://www.boredapi.com/api/activity?type=recreational")
      .then(response => {
        this.setState({
          question: response.data.activity,
        })
      })
  }

  getActivityType3 = () => {
    axios
      .get("https://www.boredapi.com/api/activity?type=social")
      .then(response => {
        this.setState({
          question: response.data.activity,
        })
      })
  }

  getActivityType4 = () => {
    axios
      .get("https://www.boredapi.com/api/activity?type=diy")
      .then(response => {
        this.setState({
          question: response.data.activity,
        })
      })
  }

  getActivityType5 = () => {
    axios
      .get("https://www.boredapi.com/api/activity?type=charity")
      .then(response => {
        this.setState({
          question: response.data.activity,
        })
      })
  }

  getActivityType6 = () => {
    axios
      .get("https://www.boredapi.com/api/activity?type=cooking")
      .then(response => {
        this.setState({
          question: response.data.activity,
          src: "https://cdn.vox-cdn.com/thumbor/P4vhJB3z7sOfAcMYTaHq8EUu9Fo=/0x0:5500x3671/1820x1213/filters:focal(2310x1396:3190x2276):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66563372/GettyImages_849177432.0.jpg"
        })
      })
  }

  getActivityType7 = () => {
    axios
      .get("https://www.boredapi.com/api/activity?type=relaxation")
      .then(response => {
        this.setState({
          question: response.data.activity,
        })
      })
  }

  getActivityType8 = () => {
    axios
      .get("https://www.boredapi.com/api/activity?type=music")
      .then(response => {
        this.setState({
          question: response.data.activity,
        })
      })
  }
  
  getActivityType9 = () => {
    axios
      .get("https://www.boredapi.com/api/activity?type=busywork")
      .then(response => {
        this.setState({
          question: response.data.activity,
        })
      })
  }


  render() {
    let q = "Click the button for a dope activity";
    if(this.state.question){
      q= this.state.question
    }

    return (
      <div>
        
      
        <head>
          <link href="https://fonts.googleapis.com/css?family=Quicksand|Raleway&display=swap" rel="stylesheet" />
        </head>
        <div className="questionBox">

        <center> 
          <div>
            <h1>{q}</h1>
          </div>
         
          <div id="container">
         <south>
          <button onClick={()=>this.getActivity()}>Random Activity </button>
          
          
          <button onClick={() => this.getActivity1()}> Activities for 1</button>
  
          <button onClick={() => this.getActivity2()}> Activities for 2</button>
          <button onClick={() => this.getActivity3()}> Activities for 3</button>
          <button onClick={() => this.getActivity4()}> Activities for 4</button>
          <button onClick={() => this.getActivity5()}> Activities for 5</button>


          <aside>
          <button onClick={()=>this.getActivityType1()}>Education </button>
          <button onClick={()=>this.getActivityType2()}>Recreational </button>
          <button onClick={()=>this.getActivityType3()}>Social </button>
          <button onClick={()=>this.getActivityType4()}>DIY </button>
          <button onClick={()=>this.getActivityType5()}>Charity </button>
          <button onClick={()=>this.getActivityType6()}>Cooking </button>
          <button onClick={()=>this.getActivityType7()}>Relaxation </button>
          <button onClick={()=>this.getActivityType8()}>Music </button>
          <button onClick={()=>this.getActivityType9()}>Busywork </button>
          </aside> 
          </south>
          </div>

          </center>

          <img src= "https://i.pinimg.com/originals/e1/df/59/e1df596580d4d183f998ac4a7926f85e.png" alt="Paris" class="center"></img>

        </div>
      </div>
    )

} 
}

export default App; 
