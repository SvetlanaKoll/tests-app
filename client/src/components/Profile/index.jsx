import React, { Fragment } from "react";
import { useAuth0 } from '../../react-auth0-spa'
import style from './index.module.css'

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div className={style.box}>
      <img className={style.box__img} src={user.picture} alt="Profile" />
      <div className={style.box__name}>{user.name}</div>  
      </div>

      
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
  );
};

export default Profile;