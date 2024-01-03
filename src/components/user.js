import React, {useState} from "react";
import "./user.css"

const User = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <div className="Main_Block">
            <div className="Text">
                    <p>REGISTRATION</p>
            </div>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    className="name"
                    placeholder="Введите ваше имя"
                />
                 <input
                    type="text"
                    value={surname}
                    onChange={({target}) => setSurname(target.value)}
                    className="surname"
                    placeholder="Введите вашу Фамилию"
                />
                 <input
                    type="text"
                    value={address}
                    onChange={({target}) => setAddress(target.value)}
                    className="address"
                    placeholder="Введите ваш адрес"
                />
                 <input
                    type="text"
                    value={phone}
                    onChange={({target}) => setPhone(target.value)}
                    className="phone"
                    placeholder="Введите ваш номер телефона"
                />
                <button className="btn" type="Submit"> OK </button>
            </form>
            <div className="Section">
                <span> Name: {name}</span>
                <span> Surname: {surname}</span>
                <span> Address: {address}</span>
                <span> Phone: {phone}</span>

            </div>
        </div>
    )
}
export default User