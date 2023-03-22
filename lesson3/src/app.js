import Avatar from "./components/avartar";
// component Base

// Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
const App = () =>{
    const user ={
        name:"Hoang Xuan Quang",
        age: 20,
    }

    return (
        <div>
            <h1>Hello world</h1>
            <Avatar user={user} showInfo={() => console.log(user)}>
                {/* <h2>Lớp we17304</h2> */}
            </Avatar>
        </div>
    )

}
export default App