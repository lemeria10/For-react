function SingleUser({ name, image, url }) {
  //   console.log(user);
  //   console.log(user.login);
  return (
    <div>
      <div>
        <img src={image} alt="" />
        <ul>
          <li>
            Name:<b>{name}</b>
          </li>
          <li>
            Url:<b>{url}</b>
          </li>  
        </ul>
      </div>
    </div>
  );
}
export default SingleUser;
