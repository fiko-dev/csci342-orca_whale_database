import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CreateDiscussion from '../CreateDiscussion/CreateDiscussion';

import profile from '../../assets/profile-circle.svg';
import editIco from '../../assets/edit-pen.svg';
import confirm from '../../assets/checkmark.png';
import cancel from '../../assets/cancel.png';
import './Account.css';

const Account = () => {
    const { user } = useSelector((state) => state.auth);

    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [showEdit, setShowEdit] = useState(true);
    const [showSave, setShowSave] = useState(false);
    const [initial, setInitial] = useState(username);

    const changePicture = () => {
        console.log('Changing profile picture...');
    }

    useEffect(() => {
        setUsername(user.userName);
        setInitial(user.userName);
    }, [user]);

    const editUsername = () => {
        setInitial(username);
        setUsername('');
        setDisabled(!disabled);
        setShowEdit(!showEdit);
        setShowSave(!showSave);
    }
    
    const cancelEdit = () => {
        setUsername(initial);
        setDisabled(!disabled);
        setShowEdit(!showEdit);
        setShowSave(!showSave);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInitial(username);
        setDisabled(!disabled);
        setShowEdit(!showEdit);
        setShowSave(!showSave);
    }

    return (
        <>
        <div className='background'/>
        <div className='page'>
            {/* Following div contains profile picture and heading. Clicking on profile picture
                allows user to modify their profile picture. */}
            <div className='Account'>
                <div className='whitespace'/>
                <div className='whitespace'>
                    <img className='profile-picture' src={profile} onClick={changePicture}/>
                </div>   
                <p className='page-header'>Account</p>
                <div className='whitespace'/>
                <div className='whitespace'/>
            </div>
            {/* Following form contains elements to edit the user's username using states. */}
            <form className='edit-username' onSubmit={handleSubmit}>
                Username:&nbsp;<input className='bg-[#f2f6fa]' value={username} disabled={disabled} 
                onChange={(event) => setUsername(event.target.value)}
                />
                {showEdit ? <>
                <button onClick={editUsername}><img src={editIco} alt='Edit username'/></button>
                <div className='blank'/>
                </>
                : null}
                {showSave ? <>
                    <button type='submit'><img src={confirm} alt='Confirm username'/></button>
                    <button onClick={cancelEdit}><img src={cancel} alt='Stop editing username'/></button>
                </>
                : null}
            </form>

            
            <br/><br/>
        </div>
        <div className='mb-[30px]'>
            <CreateDiscussion/>
        </div>
        </>
    )
}

export default Account;