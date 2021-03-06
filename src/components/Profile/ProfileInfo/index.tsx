import React, { useState, useEffect } from 'react'
import { ProfileForm } from './ProfileForm'
import { Status } from './Status'
import styles from '../styles/ProfileInfo.module.scss'
import { useDispatch } from 'react-redux'
import { profileActions } from '../../../redux/profile'

export const ProfileInfo = (props: any) => {
    const dispatch = useDispatch();

    let [editMode, setEditMode] = useState(false);

    let onSubmit = (data: any) => {
        dispatch(profileActions.setProfileData(data))
        !props.isError && setEditMode(false)
    }
    const activateEditMode = () => {
        setEditMode(!editMode)
    }

    return (
        <div>
            {!editMode
                ? <div>
                    <button onClick={activateEditMode} className={styles.submitBtn}>Edit</button>
                    <div className={styles.fullName}>{props.profile.fullName}</div>
                    <Status
                        status={props.status}
                        updateProfileStatus={props.updateProfileStatus}
                    />
                    <div className={styles.info} >
                        <div>Looking for job:</div>
                        <div >{props.profile.lookingForAJob ? "Yes" : "No"}</div>
                        <div>About me:</div>
                        <div >{props.profile.aboutMe}</div>
                        <div> My skils:</div>
                        <div >{props.profile.lookingForAJobDescription}</div>
                        <div className={styles.contacts}>Contacts:</div>
                        <div className={styles.contacts__items}>
                            {/* { props.profile.contacts && Object.entries(props.profile.contacts).map(([key, value], index) => {
                                return value && <div key={index}><a href={value || null}>{value}</a></div>
                            })} */}
                        </div>
                    </div>
                </div>
                :
                <ProfileForm
                    status={props.status}
                    updateProfileStatus={props.updateProfileStatus}
                // profile={props.profile}
                />
            }
        </div>
    )
}

