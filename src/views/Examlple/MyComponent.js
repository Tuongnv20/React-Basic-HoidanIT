// import React from "react";

// class MyComponent extends React.Component {

//     state = {
//         name: 'Tuong',
//         age: 20,
//     }
//     handleChange = (event) => {
//         this.setState({
//             name: event.target.value,
//         })
//     }
//     handleChange1 = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleClickButton = (event) => {
//         alert('Click me')
//     }
//     render() {
//         return (
//             <>
//                 <div className="First">
//                     <input type="text" value={this.state.name}
//                         onChange={(event) => this.handleChange(event)}
//                     />
//                     My name is {this.state.name}
//                 </div>
//                 <div className="Second">
//                     <input type="text" value={this.state.age}
//                         onChange={(event) => this.handleChange1(event)}
//                     />
//                     My age is {this.state.age}
//                 </div>

//                 <div className="third">
//                     <button onClick={() => this.handleClickButton()}> Click me</button>
//                 </div>

//             </>

//         );
//     }
// }

// export default MyComponent;
//----------------------------------------------------------------------------------------------------
//Phía trên là ví dụ về state, changing state, event
//Ở dưới là Form
import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";


class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'Job1', title: 'Developers', salary: '5000' },
            { id: 'Job2', title: 'Testers', salary: '5200' },
            { id: 'Job3', title: 'BA', salary: '9000' }
        ],
    }
    addNewJob = (job) => {

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    // name={this.state.firstName + ' ' + this.state.lastName}
                    // age={20}
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}

                />

            </>


        );
    }
}

export default MyComponent; 