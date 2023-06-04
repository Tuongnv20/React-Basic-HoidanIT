import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from 'react-router-dom';



class ListUser extends React.Component {

    // Đây là cách 1, dùng promises.
    // componentDidMount() {

    //     axios.get("https://reqres.in/api/users?page=1")
    //         .then(res => {
    //             console.log(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    //Cách 2: Dùng async await

    state = {
        listUsers: []
    }
    async componentDidMount() {

        let res = await axios.get("https://reqres.in/api/users?page=1");
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        });

    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`);
    }
    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    List all users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id} style={{ cursor: 'pointer' }}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.first_name}   {item.last_name}
                                </div>
                            )
                        })

                    }
                </div>

            </div>
        );
    }
}
export default withRouter(ListUser);