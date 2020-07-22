import React from 'react';
import Repos from './Repos';


const User = ({user}) =>
  <div>
    <div className={"card grid-2"}>
    <div>
      <img 
        src={user.avatarUrl} 
        alt="User Avater"
        className="round-img"
        style={{ width:'80px' }}
      />
      <h4 style={{ padding: '10px' }}>
        {user.name}
      </h4>
    </div>
    <div>
      <h4 style={{ padding: '10px' }}>
        {user.login}
      </h4>
      <h4 style={{ padding: '10px' }}>
        {user.email}
      </h4>
      <a href={user.url} className="btn btn-dark">Visit Github Profile</a>
    </div>
    </div>
    <div className={"card"}>
       {
        user.repositories.edges.length ?
        user.repositories.edges.map((repo) =>
          <Repos
            key={repo.node.id}
            repoLink={repo.node.url}
            repoName={repo.node.name}
          />
        ) : ''
      }
    </div>
  </div>


export default User;