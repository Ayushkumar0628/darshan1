import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchShowList,RemoveShow} from "../Redux/Action";

const Showlisting = (props) => {
    useEffect(() => {
        props.loadshow();
    }, [])
    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
             props.removeshow(code);
             props.loadshow();
             toast.success('Show removed successfully.')
        }
    }
    return (
        props.show.loading ? <div><h2>Loading...</h2></div> :
            props.show.errmessage ? <div><h2>{props.show.errmessage}</h2></div> :

                <div>
                    <div className="card">
                        <div className="card-header" >
                            <Link to={'/show/add'} className="btn btn-success">Add Show +</Link>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>id</td>
                                        <td>TITLE</td>
                                        <td>RATING</td>
                                        <td>GENER</td>
                                        <td>RELEASE DATE</td>
                                        <td>FEATURED</td>
                                        <td style={{wordWrap: 'break-word', overflow:'wrap'}} className="text-wrap">VIDEO-URL</td>
                                        <td style={{wordWrap: 'break-word', overflow:'wrap'}} className="text-wrap">PIC-URL</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.show.showlist && props.show.showlist.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.gener}</td>
                                                <td>{item.selectedDate}</td>
                                                <td>{item.featured}</td>
                                                <td style={{wordWrap: 'break-word',overflow:'wrap'}} className="text-wrap">{item.video}</td>
                                                <td style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}} className="text-wrap">{item.pic}</td>
                                                <td>
                                                    <Link to={'/show/edit/' + item.id} className="btn btn-primary">Edit</Link> |
                                                    <button onClick={() => { handledelete(item.id) }} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
    );
}

const mapStateToProps = (state) => {
    return {
        show: state.show
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadshow: () => dispatch(FetchShowList()),
        removeshow:(code)=>dispatch(RemoveShow(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Showlisting);