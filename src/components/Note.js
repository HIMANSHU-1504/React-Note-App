import {MdDeleteForever} from 'react-icons/md';

const Note = () =>{
    return(
        <div className="note">
            <span>Hello! this is 1st Note</span>
            <div className='note-footer'>
                <small>18/07/2023</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>

        </div>
    );
};

export default Note;