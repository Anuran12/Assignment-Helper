import React, { useState } from 'react';
import logo from '../logo.gif';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayList';
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import axios from 'axios'

// import Modal from "react-modal";

import 'react-responsive-modal/styles.css'
import "./css/Header.css";
import { Avatar, Button, Input } from "@material-ui/core";
import Modal from 'react-responsive-modal';
import CloseIcon from "@material-ui/icons/Close";
import { ExpandMore, PeopleAltOutlined } from '@material-ui/icons';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { logout, selectUser } from '../feature/userSlice';
import { useDispatch, useSelector } from "react-redux";



function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [inputUrl, setinputUrl] = useState("")
    const [question, setQuestion] = useState("");
    const Close = (<CloseIcon />)
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleSubmit = async () => {
        if (question !== "") {
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };
            const body = {
              questionName: question,
              questionUrl: inputUrl,
              user: user,
            };
            await axios
              .post("/api/questions", body, config)
              .then((res) => {
                console.log(res.data);
                alert(res.data.message);
                window.location.href = "/";
              })
              .catch((e) => {
                console.log(e);
                alert("Error in adding question");
              });
          }

    };
    const handleLogout = () => {
        if (window.confirm("Are you sure to logout ?")) {
          signOut(auth)
            .then(() => {
              dispatch(logout());
              console.log("Logged out");
            })
            .catch(() => {
              console.log("error in logout");
            });
        }
      };
  return (
    <div className='qHeader'>
        <div className='qHeader-content'>
            <div className='qHeader__logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='qHeader__icons'>
                    <div className='qHeader__icon'>
                        <HomeIcon />
                    </div>
                    <div className='qHeader__icon'>
                        <FeaturedPlayListOutlinedIcon />
                    </div>
                    <div className='qHeader__icon'>
                    <PeopleAltOutlinedIcon />
                    </div>
                    <div className='qHeader__icon'>
                    <NotificationsOutlinedIcon />
                    </div>
                </div>
                <div className='qHeader__input'>
                    <SearchIcon />
                    <input type='text' placeholder='Search questions' />
                </div>
                <div className='qHeader__Rem'>
                    <span onClick={handleLogout} style={{
                        cursor: "pointer",
                    }}>
                    <Avatar src={user.photo} />
                    </span>
                    <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
                <Modal
                open = {isModalOpen}
                closeIcon={Close}
                onClose={() => setIsModalOpen(false)}
                closeOnEsc
                center
                closeOnOverlayClick={false}
                styles={{
                    overlay: {
                        height: "auto",
                    },
                }}
                >
                    <div className='modal__title'>
                        <h5>Add Question</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className='modal__info'>
                        <Avatar src={user?.photo} className='avatar'/>
                        <div className='modal__scope'>
                            <PeopleAltOutlined />
                            <p>Public</p>
                            <ExpandMore />
                        </div>
                    </div>
                    <div className='modal__Field'>
                        <Input
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        type="text" placeholder= "Start your question with 'What', 'How', 'Why', etc." />
                        <div style={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <input type='text'
                            value={inputUrl}
                            onChange={(e) => setinputUrl(e.target.value)}
                            style={{
                            margin:"5px 0",
                            border: "1px solid lightgray",
                            padding: "10px",
                            outline: "2px solid #000"
                            
                        }} placeholder='Optional: include a link that gives context' />
                        {
                            inputUrl !== "" && <img style={{
                                height: "40vh",
                                objectFit: "contain",
                            }} src={inputUrl} alt='display image' />
                        }
                        
                        </div>
                    </div>
                    <div className='modal__buttons'>
                        <button className='cancle' onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                        <button onClick={handleSubmit} type='submit' className='add'>
                            Add Question
                        </button>
                    </div>
                </Modal>
                </div>
                
        </div>
    </div>
  )
}

export default Header