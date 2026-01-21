function SingleUserV2({ props }) {
   // console.log("props are", props);

   const navigate=()=>{
    console.log("navigating to ", props.url);
    window.open(props.url, "_blank");
   };
   function mouseOverHandler(){
    console.log("mouse over event triggered", props.login);
   }
    return (
        <div className="m-2 rounded-md shadow-md" onMouseOver={mouseOverHandler}>
            <div className="rounded-md">
                <img className="rounded-md" src={props.avatar_url} alt="" />
            </div>
            <div className="p-4">
                <div>
                    Name:<b>{props.login}</b>
                </div>
                <button onClick={navigate}
                className="px-4 py-2 rounded-md text-white bg-blue cursor-pointer active:opacity-50">
                    Visit Profile

                </button>
            </div>
            
        </div>
    );
}
export default SingleUserV2;