import React from "react";
import { useParams } from "react-router-dom";

const data = {
    velopert: {
        name: 'tester',
        description: '리액트 스터디'
    },
    gildong: {
        name: 'tester1',
        description: '스터디 완료자'
    }
};

// const Profile = ( {match} ) => {
//     const { username } = match.params.username;
const Profile = () => {
    const { username } = useParams();
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
};

export default Profile;