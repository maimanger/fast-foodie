import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileNavSidebar from "./ProfileNavSidebar";
import ProfileAboutMe from "./ProfileAboutMe";
import ReviewItem from "./ReviewItem";

const ProfilePublicScreen = () => {
    const {id} = useParams();

    return (
        <h1>This is the public profile</h1>
    )
}

export default ProfilePublicScreen;