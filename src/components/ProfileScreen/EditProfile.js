import React, {useState} from "react";
import "./Profile.css"
import moment from "moment";
import {updateProfile} from "../../services/profileService";
import {useDispatch} from "react-redux";

const EditProfile = ({profile, setEdit}) => {


    /********************************Set Birthdate Display State*********************************/
    const [editBirth, setEditBirth] = useState({
                                                   "dateHidden": false,
                                                   "datePickerHidden": true,
                                                   "editClickerHidden": false,
                                                   "cancelClickerHidden": true
                                               });
    const editBirthClickHandler = () => {
        setEditBirth({
                         "dateHidden": true,
                         "datePickerHidden": false,
                         "editClickerHidden": true,
                         "cancelClickerHidden": false
                     });
    }
    const cancelEditBirthClickHandler = () => {
        setEditBirth({
                         "dateHidden": false,
                         "datePickerHidden": true,
                         "editClickerHidden": false,
                         "cancelClickerHidden": true
                     });
    }

    const [imageURL, setImageURL] = useState(profile.image_url);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [location, setLocation] = useState(profile.location);
    const [address, setAddress] = useState(profile.addressDetail);
    const [email, setEmail] = useState(profile.email);
    const [birthday, setBirthday] = useState(profile.birthday);
    const [locationVisible, setLocationVisible] = useState(profile.customerData.visibility.location);
    const [birthdayVisible, setBirthdayVisible] = useState(profile.customerData.visibility.birthday);

    const dispatch = useDispatch();
    // TODO: fetch server and dispatch reducer in save button
    const saveClickHandler = ()=> {
        const newImgURL = imageURL.trim();
        const newFirstName = firstName === "" ? profile.firstName : firstName.trim();
        const newLastName = lastName === "" ? profile.lastName : lastName.trim();
        const newLocation = location === "" ? profile.location : location.trim();
        const newAddress = address.trim();
        const newEmail = email.trim();
        const newProfile = {
            ...profile,
            "email": newEmail,
            "firstName": newFirstName,
            "lastName": newLastName,
            "image_url": newImgURL,
            "location": newLocation,
            "addressDetail": newAddress,
            "birthday": birthday,
            "customerData": {
                ...profile.customerData,
                "visibility": {
                    ...profile.customerData.visibility,
                    "location": locationVisible,
                    "birthday": birthdayVisible
                }
            }
        };
        updateProfile(newProfile, dispatch);
        setEdit(false);
    }

    return(
        <>
        <div className="mb-3 d-flex align-items-center">
            <h3 className="text-danger fw-bold my-0">Edit Profile</h3>
            {/**********************Cancel Edit**************************/}
            <button className="btn wd-circle-btn btn-outline-info border-0 rounded-circle p-0 mx-2"
                    onClick={()=> setEdit(false)}>
                <i className="fa fa-times"></i>
            </button>
            {/**********************Save Edit**************************/}
            <button onClick={saveClickHandler}
                    className="btn btn-danger rounded-pill fw-bold ms-auto me-0 me-sm-2 me-xl-5 px-3">
                Save
            </button>

        </div>
        <div className="row g-3 mb-2">

            {/***************************Upload Avatar*****************************/}
            <div
                className="col-12 col-lg-3 col-xxl-2 card border-0 text-white bg-transparent"
                style={{"height": "130px", "width": "130px"}}>
                <img src={profile.image_url}
                     className="img-fluid rounded-3 wd-profile-img-faded"
                     style={{"height": "120px", "width": "120px"}}/>
                <div
                    className="card-img-overlay p-0 m-0 d-flex justify-content-center align-items-center">
{/*                    <label className="btn wd-circle-btn rounded-circle p-0 d-flex
                                          justify-content-center align-items-center">
                        <i className="fas fa-camera text-white"></i>
                        <input type="file" className="d-none" accept="image/*"/>
                    </label>*/}
                </div>
            </div>


            <div className="col-12 col-lg-9 d-flex flex-column">

                <div className="form-floating h-auto mb-4">
                    {/***************************Edit Avatar URL*****************************/}
                    <input type="text" id="editAvatar" placeholder="Edit" maxLength="100"
                           className="form-control bg-transparent border border-secondary
                                          wd-profile-edit"
                           value={imageURL}
                           onChange={e => setImageURL(e.target.value)}/>
                    <label htmlFor="editAvatar" className="wd-text-18">Profile Image URL</label>
                </div>

                {/***************************Edit Name*****************************/}
                <div className="form-floating h-auto mb-4">
                    <input type="text" id="editName" placeholder="Edit" maxLength="50"
                              className="form-control bg-transparent border border-secondary
                                          wd-profile-edit"
                              value={firstName}
                              onChange={e => setFirstName(e.target.value)}/>
                    <label htmlFor="editName" className="wd-text-18">First Name</label>
                </div>

                <div className="form-floating h-auto mb-4">
                    <input type="text" id="editName" placeholder="Edit" maxLength="50"
                              className="form-control bg-transparent border border-secondary
                                          wd-profile-edit"
                              value={lastName}
                              onChange={e => setLastName(e.target.value)}/>
                    <label htmlFor="editName" className="">Last Name</label>
                </div>

                {/*************************Edit Location**************************/}
                <div className="form-floating h-auto mb-4">
                    <input type="text" id="editLocation" placeholder="Edit" maxLength="50"
                              className="form-control bg-transparent border border-secondary
                                           wd-profile-edit"
                           value={location}
                            onChange={e => setLocation(e.target.value)}/>
                    <label htmlFor="editLocation" className="wd-text-18">Location</label>
                </div>

                {/*************************Edit Address Detail**************************/}
                <div className="form-floating h-auto mb-4">
                    <input type="text" id="editLocation" placeholder="Edit" maxLength="50"
                           className="form-control bg-transparent border border-secondary
                                           wd-profile-edit"
                           value={address}
                           onChange={e => setAddress(e.target.value)}/>
                    <label htmlFor="editLocation" className="wd-text-18">Address</label>
                </div>

                {/*************************Edit Email**************************/}
                <div className="form-floating h-auto mb-4">
                    <input type="email" id="editEmail" placeholder="Edit" maxLength="50"
                           className="form-control bg-transparent border border-secondary
                                           wd-profile-edit"
                           value={email}
                           onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="editEmail" className="wd-text-18">Email</label>
                </div>


                {/*************************Edit Birthday***************************/}
                <div className="d-flex flex-column mb-4">

                    <div hidden={editBirth.editClickerHidden}>
                        Birth date · <span className="text-danger wd-profile-link-text"
                                           onClick={editBirthClickHandler}>Edit</span>
                    </div>

                    <div hidden={editBirth.cancelClickerHidden}>
                        Birth date · <span className="text-info wd-profile-link-text"
                                           onClick={cancelEditBirthClickHandler}>Cancel</span>
                    </div>

                    <div hidden={editBirth.dateHidden} className=" ">
                        {moment(birthday).format('LL')}
                    </div>

                    <div hidden={editBirth.datePickerHidden} className="">
                        <input type="date" className="rounded-3 border-secondary form-control bg-transparent"
                               onChange={event => {
                                   if (event.target.value !== '') {
                                       /*console.log(moment(event.target.value).format("YYYY-MM-DD"));*/
                                       setBirthday(moment(event.target.value).format("YYYY-MM-DD"));
                                   }
                               }}/>
                    </div>

                </div>

                {/*************************Edit Visibility***************************/}
                    <fieldset className="row mb-4 pb-2 ">
                        <legend className="col-form-label col-md-4 pt-0">Manage the visibility</legend>
                        <div className="col-md-6">
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" name="locationVisible"
                                       id="gridRadios1" value="locationVisible"
                                       defaultChecked={locationVisible}
                                       onChange={e => {
                                           e.target.checked ?
                                           setLocationVisible(true) : setLocationVisible(false)}}/>
                                    <label className="form-check-label" htmlFor="locationVisible">
                                        Location
                                    </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" name="birthdayVisible"
                                       id="gridRadios2" value="birthdayVisible"
                                       defaultChecked={birthdayVisible}
                                       onChange={e => {
                                           e.target.checked ?
                                           setBirthdayVisible(true) : setBirthdayVisible(false)}}/>
                                    <label className="form-check-label" htmlFor="birthdayVisible">
                                        Birthday
                                    </label>
                            </div>
{/*                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" name="photosVisible"
                                       id="gridRadios2" value="photosVisible"/>
                                <label className="form-check-label" htmlFor="photosVisible">
                                    Photos
                                </label>
                            </div>*/}
{/*                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" name="bookmarksVisible"
                                       id="gridRadios2" value="bookmarksVisible"
                                       defaultChecked={profile.customerData.visibility.bookmarks}/>
                                <label className="form-check-label" htmlFor="bookmarksVisible">
                                    Bookmarks
                                </label>
                            </div>*/}
                        </div>
                    </fieldset>

            </div>
        </div>
        </>
    )
}

export default EditProfile;