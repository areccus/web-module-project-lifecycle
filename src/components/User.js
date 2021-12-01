import React from 'react';

class User extends React.Component {
    render() {
        const {user} = this.props;
        return(
            <div className='user'>
                <img width='250px' src={user.avatar_url} alt="Profile Image"/>
                <div className="userItems">                
                <a href={user.html_url}><h2>{user.name}</h2></a>
                <p>({user.login})</p>
                <p>Total Repos: {user.public_repos}</p>
                <p>Total Followers: {user.followers}</p>
                </div>
            </div>
        )
    }
}

export default User;