export default function AddressInfo({formdata, setFormdata, err, showErrors}){

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormdata(prev => ({
        ...prev,
        [name]: value
        }));
    };

    return(
        <>
        <div className="form-section">

            <h3>Address Details</h3>
            <input 
            placeholder="Enter the Address Line 1" 
            name="addressLine1"
            type="text" 
            value={formdata.addressLine1} 
            onChange={handleChange}/>
            {showErrors && err.addressLine1 && (
                <p className="error">{err.addressLine1}</p>
            )}

            <input 
            placeholder="Enter the Address Line 1" 
            name="addressLine2"
            type="text" 
            value={formdata.addressLine2} 
            onChange={handleChange}/>

            <input 
            placeholder="Enter the City Name" 
            name="city"
            type="text" 
            value={formdata.city} 
            onChange={handleChange}/>
            {showErrors && err.city && (
                <p className="error">{err.city}</p>
            )}

            <input 
            placeholder="Enter the Postal Code" 
            name="postalCode"
            type="text" 
            value={formdata.postalCode} 
            onChange={handleChange}/>
            {showErrors && err.postalCode && (
                <p className="error">{err.postalCode}</p>
            )}


            <input 
            placeholder="Enter the State" 
            name="state"
            type="text" 
            value={formdata.state} 
            onChange={handleChange}/>
            {showErrors && err.state && (
                <p className="error">{err.state}</p>
            )}

            <input 
            placeholder="Enter the Country" 
            name="country"
            type="text" 
            value={formdata.country} 
            onChange={handleChange} />
            {showErrors && err.country && (
                <p className="error">{err.country}</p>
            )}

        </div>
        </>
    )
}