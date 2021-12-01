import React from 'react';

class Follower extends React.Component {
    render() {
        const {follower} = this.props;
        return(
            <div className='followers'>
            <div className='follower'>
              <img width='150px' src={follower.avatar_url}/>
              <a href={follower.html_url}><p>{follower.login}</p></a>
            </div>

        </div>
        )
    }
}

export default Follower;