
import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        console.log("onclick delete", job)
        this.props.deleteAJob(job);
    }

    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        // Cú pháp viết ngắn
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        return (
            //Cách viết này hơi dài, ở dưới là cách viết ngắn hơn.
            // <> 
            //     {showJobs === false && //Sau && chính là điều kiện, đây là cách viết câu điều kiện của React, Nếu showJobs === false thí làm những gì sau &&
            //         <div>
            //             <button onClick={() => this.handleShowHide()} >Show</button>
            //         </div>
            //     }
            //     {showJobs === true &&
            //         <>
            //             <div className="job-lists">
            //                 {
            //                     arrJobs.map((item, index) => {
            //                         if (item.salary >= 1000) {
            //                             return (// Each child in a list should have a unique "key" prop. Key là cần thiết cho mỗi props.
            //                                 <div key={item.id}>
            //                                     {item.title} - {item.salary} $
            //                                 </div>
            //                             )
            //                         }
            //                     })
            //                 }
            //             </div>
            //             <div>
            //                 <button onClick={() => this.handleShowHide()}>Hide</button>
            //             </div>
            //         </>
            //     }
            // </>

            <>
                {showJobs === false ? // Ở dây chúng ta sử dụng toán tử 3 ngôi, Nếu showJobs === false thí làm cái sau dấu chấm ? còn nếu showJobs === true thì làm cái sau dấu :
                    <div>
                        <button onClick={() => this.handleShowHide()} >Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (// Each child in a list should have a unique "key" prop. Key là cần thiết cho mỗi props.
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$
                                            <><button onClick={() => this.handleOnclickDelete(item)}>x</button></>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>

        );
    }
}



export default ChildComponent;
// này là functional Component, và nó chỉ hữu ích khi ta chơi với Hook, và điều kiện để sử dụng là thằng cha phải truyền dữ liệu xuống thg con.
// khuyến khích sử dụng Class Components.
// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (// Each child in a list should have a unique "key" prop. Key là cần thiết cho mỗi props.
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     );
// }


// export default ChildComponent; 