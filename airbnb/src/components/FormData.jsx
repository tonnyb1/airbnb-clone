import React from "react";

export default function FormData() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "", 
            email: "", 
            comments:"",
            isFriendly: false,
            employment:"",
            favColor:""
        })

    function handleChange(event){
        const {name, value, checked, type} = event.target
        setFormData(prevformData => {
            return {
                ...prevformData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }


    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                placeholder="comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <input
                type="checkbox"
                onChange={handleChange}
                checked={formData.isFriendly}
                name="isFriendly"
                id="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    value="unemployed"
                    onChange={handleChange}
                    name="employment"
                    id="unemployed"
                    checked={formData.employment === "unemployed"}
                />
                <label htmlFor="unemployed">unemployed</label>
                <br />

                <input
                    type="radio"
                    value="partTime"
                    onChange={handleChange}
                    name="employment"
                    id="partTime"
                    checked={formData.employment === "partTime"}
                />
                <label htmlFor="partTime">Part-time</label>
                <br />

                <input
                    type="radio"
                    value="fullTime"
                    onChange={handleChange}
                    name="employment"
                    id="fullTime"
                    checked={formData.employment === "fullTime"}
                />
                <label htmlFor="fullTime">Full-time</label>
                <br />
            </fieldset>

            <select
                id="favColor"
                name="favColor"
                value={formData.favColor}
                onChange={handleChange}
            >
                <option value="">---choose one---</option>
                <option value="red">Red</option>
                <option value="Yellow">Yellow</option>
                <option value="Purple">Purple</option>
                <option value="Pink">Pink</option>
                <option value="Orange">Orange</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
            </select>
            <button>Submit</button>
        </form>
    )
}