import React from 'react';

class List extends React.Component{
  render(){
    return(
      <div className="list-comp" >
        {this.props.users
          .sort((a, b) => {
            return a.user - b.user
          })
          .map((user) =>
          <div key={user.node.id} className={"card grid-2"}>
            <img 
              src={user.node.avatarUrl} 
              alt="User Avater"
              className="round-img"
              style={{ width:'80px' }}
            />
            <h4
              style = {{ padding: '10px' }}
              onClick = {
                () => {
                return this.props.handleClick(user.node)
            }}>
              {user.node.login}
            </h4>
          </div>
        )}
      </div>
    )
  }
}

export default List;