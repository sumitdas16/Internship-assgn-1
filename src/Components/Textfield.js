import React, { useState } from 'react';

const TextField = ({ label, type, name, value, onChange, options }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    if (type === "dropdown") {
        return (
            <div>
                <label>{label}</label>
                <select name={name} value={value} onChange={onChange}>
                    <option value="">Select {label}</option>
                    {options && options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        );
    }

    if (type === "password") {
        return (
            <div>
                <label>{label}</label>
                <div className='passwordWrapper'>
                    <input
                        name={name}
                        type={passwordVisible ? "text" : "password"}
                        className='textInput passwordInput'
                        value={value}
                        onChange={onChange}
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                        <i className={passwordVisible ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <label>{type === "submit" ? "" : label}</label>
            <input type={type} name={name} value={value} onChange={onChange} />
        </div>
    );
}

export default TextField;