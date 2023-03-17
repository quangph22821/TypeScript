// Object declaration
// Object literal
const sinhvien: { name: string, age: number, homeTown?: string } = {
    name: "Nam Cuong",
    age: 20,
    // homeTown: "Van Con"
}

const sinhvien2: { name: string, age: number, homeTown?: string } = {
    name: "Thành",
    age: 20,
}

//////////////////////////////////////////////////////////////
interface Book {
    authors: Authors[]
    categories: Categories
    book_cover ?: string
    current_seller: Current_seller
    description: Description
    image: Image[]
    list_price: List_price,
    name: Name,
    original_price: Original_price,
    quantity_sold: Quantity_sold,
    rating_average: Rating_average,
    short_description: Short_description,
    specifications: Specifications,
    id: Id,
}

interface Authors {
    id: number,
    name: string,
    slug: string,
}

interface Categories {
    id: number,
    name: string,
    is_leaf: boolean

}

interface Current_seller {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number,
    product_id: string,
    store_id: number,
    is_best_store: boolean,
    is_offline_installment_supported: null,
}

interface Description {
    description: string
}

interface Image {
    base_url: string,
    is_gallery: boolean
    label: null,
    large_url: string
    medium_url: string
    position: null
    small_url: string
    thumbnail_url: string
}

interface List_price {
    list_price: number
}

interface Name {
    name: string
}

interface Original_price {
    original_price: string,
}

interface Quantity_sold {
        quantity_sold: {
        text: string,
        value: number
    }
}

interface Rating_average {
    rating_average: number
}

interface Short_description {
    short_description: string
}

interface Specifications {
    name: string;
    atributes: [{
        code: string,
        name: string,
        value: string
    }];
}

interface Id {
    id: number
}
//////////////////////////////////////////////////
enum ROLE {STAFF,MANAGER, USER}

// properties
// interface User{
//     username:string,
//     id:string,
//     email:string
// }

// interface Use{
//     login:() => void
//     logout: ()=>void

// }

// interface Admin extends User {
//     role: ROLE.MANAGER | ROLE.STAFF
// }


// interface vừa khai báo được phương thức vừa khai báo được thuộc tính
type User={
    username: string
    pass:string,
    email: string
    login : ()=>void
    logout : () =>void
}

type Admin = User & {
    role : ROLE.MANAGER | ROLE.STAFF
}