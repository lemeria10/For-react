// import SingleUser from "./SingleUser";
import SingleUserV2 from "./SingleUserV2";
import users from "./../users.json";
function UsersSection() {
  function getRandomColor(item, index) {
    return (
      <SingleUserV2
        key={item.id}
        avatar_url={item.avatar_url}
        login={item.login}
        url={item.url}
      />
  );
  }
  return (
    <div>
      <div className="flex flex-wrap">{users.map(getRandomColor)}</div>
    </div>
  );
}

  
  // const user0 = users[0];
  //  const user1 = users[1];
  //   const user2 = users[4];

//   console.log({user});
  // return (
  //   <div>
  //     <h2>GitHub Users</h2>
  //     <div className="users-list max-width-900px margin 2rem auto display-flex flex-wrap gap-2rem justify-center border-radius-10px padding-16px box-shadow-light shadow-hover ">
  //       {users.map((user) => (
  //           <SingleUser
  //           key={user.id} 
  //           name={user.login} 
  //           image={user.avatar_url} 
  //           url={user.url} />
            
  //          ))};
  //     </div>
  //     {/* Additional content will go here */}
  //     <SingleUser />
  //   </div>
  // );

//   let colors = ["red", "green", "blue", "yellow", "purple"];
//   function getRandomColor(item ,index){
//     console.log("item is", item);
//     console.log("index is", index);
//     return <h1>{item}</h1>;
//   }

//   return (
//   //   <div>
//   //     <SingleUserV2
//   //     avatar_url={user0.avatar_url}
//   //     login={user0.login}
//   //     url={user0.url}
//   //     />
//   //     <SingleUserV2
//   //     avatar_url={user1.avatar_url}
//   //     login={user1.login}
//   //     url={user1.url}
//   //     />
//   //     <SingleUserV2
//   //     avatar_url={user2.avatar_url}
//   //     login={user2.login}
//   //     url={user2.url}
//   //     />
//   //   </div>
//   // );
//     <div>
//       <div>{colors.map(getRandomColor)}</div>
//     </div>
//   );
// }
export default UsersSection; 
