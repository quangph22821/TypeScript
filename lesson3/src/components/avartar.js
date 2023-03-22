const Avatar = (props) =>{
    const {user,showInfo,children} = props

    return <div className="flex">
        {children}
        <h1>{user.name}</h1>
        <img className="border-white rounded-[50%]" alt="" src="https://picsum.photos/id/237/50/50"/>
        <button className="border" onClick={showInfo}>Magic</button>
    </div>
}

export default Avatar