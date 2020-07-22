import React from 'react';

const Repos = ({repoLink, repoName}) => 
  <div className={"card"}>
    <h3>
      <a href={repoLink}>
        {repoName}
      </a>
    </h3>
  </div>


export default Repos;