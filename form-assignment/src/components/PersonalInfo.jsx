export default function PersonalInfo({formdata, setFormdata, err, showErrors}){

    const handleChange=(e)=>{
        const {name, value} = e.target;

        setFormdata(prev=>({
            ...prev,
            [name]:value
        }));
    }


    return(
        <>
            <div className="form-section">
                <h3>Personal Information</h3>
                <input 
                placeholder="Enter Fullname" 
                name="fullName" 
                required 
                type="text" 
                value={formdata.fullName} 
                onChange={handleChange}/>
                {showErrors && err.fullName && (
                    <p className="error">{err.fullName}</p>
                )}

                <input 
                placeholder="Enter Email" 
                required 
                name="email" 
                type="email" 
                value={formdata.email} 
                onChange={handleChange}/>
                {showErrors && err.email && (
                    <p className="error">{err.email}</p>
                )}

                <input 
                placeholder="Enter Contact Number" 
                required 
                name="contact" 
                type="tel" 
                value={formdata.contact} 
                onChange={handleChange}/>
                {showErrors && err.contact && (
                    <p className="error">{err.contact}</p>
                )}

                <input 
                placeholder="Enter Date of Birth" 
                required name="dob" 
                type="date" 
                value={formdata.dob} 
                onChange={handleChange}/>
                {showErrors && err.dob && (
                    <p className="error">{err.dob}</p>
                )}

                <input 
                placeholder="Enter Degree" 
                required 
                name="degree" 
                type="text" 
                value={formdata.degree} 
                onChange={handleChange}/>
                {showErrors && err.degree && (
                    <p className="error">{err.degree}</p>
                )}

                <input 
                placeholder="Enter College Name" 
                required 
                name="collegeName" 
                type="text" 
                value={formdata.collegeName} 
                onChange={handleChange}/>
                {showErrors && err.collegeName && (
                    <p className="error">{err.collegeName}</p>
                )}

                <input 
                placeholder="Enter Degree Percentage" 
                required 
                name="degreePercentage" 
                type="number" 
                min="0" 
                max="100" 
                value={formdata.degreePercentage} 
                onChange={handleChange}/>
                {showErrors && err.degreePercentage && (
                    <p className="error">{err.degreePercentage}</p>
                )}

                <label>Gender</label>
                {showErrors && err.gender && (
                        <p className="error">{err.gender}</p>
                    )}
                <div className="gender-group">
                    <label htmlFor="male">Male</label>
                    <input 
                    required 
                    id="male" 
                    name="gender" 
                    type="radio" 
                    value="male" 
                    checked={formdata.gender === "male"} 
                    onChange={handleChange}/>

                    <label htmlFor="female">Female</label>
                    <input 
                    id="female" 
                    name="gender" 
                    type="radio" 
                    value="female" 
                    checked={formdata.gender === "female"} 
                    onChange={handleChange}/>

                    <label htmlFor="other">Other</label>
                    <input 
                    required 
                    id="other" 
                    name="gender" 
                    type="radio" 
                    value="other" 
                    checked={formdata.gender === "other"}
                    onChange={handleChange}/>
                    
                </div>
                
            </div>
            
        </>
    )
}