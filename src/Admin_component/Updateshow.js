import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchShowObj, FunctionUpdateShow } from "../Redux/Action";

const Updateshow = () => {
  const [id, idchange] = useState(0);
  const [title, titlechange] = useState('');
  const [rating, ratingchange] = useState();
  const [gener,generchnage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [featured,featuredchange]=useState('No');
  const [video,videochange]=useState('');
  const [pic,picchnage]=useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();

    const showobj=useSelector((state)=>state.show.showobj)


    const handlesubmit = (e) => {
        e.preventDefault();
        const showobj = { id, title, rating, gener, selectedDate, featured, video, pic };
        dispatch(FunctionUpdateShow(showobj,id));
        navigate('/showlisting');
    }

    useEffect(() => {
        dispatch(FetchShowObj(code));
    }, [])

    useEffect(() => {
        if(showobj){
            idchange(showobj.id);
            titlechange(showobj.title);
            ratingchange(showobj.rating);
            generchnage(showobj.gener);
            setSelectedDate(showobj.latest);
            featuredchange(showobj.featured);
            videochange(showobj.video);
            picchnage(showobj.pic);
        }
    }, [showobj])

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add Show</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Id</label>
                                    <input value={id || ''} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input value={title || ''} onChange={e => titlechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Rating</label>
                                    <input value={rating || ''} onChange={e => ratingchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Gener</label>
                                    <input value={gener || ''} onChange={e => generchnage(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Release Date</label>
                    <input type="date" value={selectedDate} onChange={e=>setSelectedDate(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>isFeatured</label>
                                    <select value={featured || ''} onChange={e => featuredchange(e.target.value)} className="form-control">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Video-URL</label>
                                    <input value={video || ''} onChange={e => videochange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Pic-URL</label>
                                    <input value={pic || ''} onChange={e => picchnage(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/showlisting'}>Back</Link>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Updateshow;