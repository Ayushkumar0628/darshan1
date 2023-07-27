import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddShow } from "../Redux/Action";

const AddShow = () => {
    const [title, titlechange] = useState('');
    const [rating, ratingchange] = useState();
    const [gener,generchnage] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [featured,featuredchange]=useState('');
    const [video,videochange]=useState('');
    const [pic,picchnage]=useState('');

    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const handlesubmit = (e) => {
        e.preventDefault();
        const showobj = {title, rating, gener, selectedDate, featured, video, pic };
        dispatch(FunctionAddShow(showobj));
        navigate('/showlisting');
    }

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
                                    <label>Title</label>
                                    <input value={title} onChange={e => titlechange(e.target.value)} className="form-control"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Rating</label>
                                    <input value={rating} onChange={e => ratingchange(e.target.value)} className="form-control"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Genre</label>
                                    <input value={gener} onChange={e => generchnage(e.target.value)} className="form-control"/>
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
                                    <select value={featured} onChange={e => featuredchange(e.target.value)} className="form-control">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Video URL</label>
                                    <input value={video} onChange={e => videochange(e.target.value)} className="form-control"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Poster URL</label>
                                    <input value={pic} onChange={e => picchnage(e.target.value)} className="form-control"/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/Showlisting'}>Back</Link>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default AddShow;