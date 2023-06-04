import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import { connect } from "react-redux";


class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //     }, 3000)
    // }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }


    render() {
        let listUsers = this.props.dataRedux;
        console.log("Check props: ", this.props)
        return (
            <>
                <h1>Hello world</h1>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} -{item.name}
                                    &nbsp;<button onClick={() => this.handleDeleteUser(item)}>x</button>

                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>

                </div>
            </>

        )
    }

}


const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'deleteUser', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'addUser' }),
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));