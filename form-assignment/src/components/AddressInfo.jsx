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
            <label >Address Line 1</label>
            <input 
            placeholder="Enter the Address Line 1" 
            name="addressLine1"
            type="text" 
            value={formdata.addressLine1} 
            onChange={handleChange}/>
            {showErrors && err.addressLine1 && (
                <p className="error">{err.addressLine1}</p>
            )}

            <label >Address Line 2</label>
            <input 
            placeholder="Enter the Address Line 1" 
            name="addressLine2"
            type="text" 
            value={formdata.addressLine2} 
            onChange={handleChange}/>
            
            <label >City</label>
            <input 
            placeholder="Enter the City Name" 
            name="city"
            type="text" 
            value={formdata.city} 
            onChange={handleChange}/>
            {showErrors && err.city && (
                <p className="error">{err.city}</p>
            )}

            <label >Postal Code</label>
            <input 
            placeholder="Enter the Postal Code" 
            name="postalCode"
            type="text" 
            value={formdata.postalCode} 
            onChange={handleChange}/>
            {showErrors && err.postalCode && (
                <p className="error">{err.postalCode}</p>
            )}

            <label >State</label>
            <select
            name="state"
            value={formdata.state}
            onChange={handleChange}
            className="form-select"
            >
            <option value="">Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Delhi">Delhi</option>
            </select>
            {showErrors && err.state && <p className="error">{err.state}</p>}

            {/* Country Dropdown */}
            <label >Country</label>
            <select
            name="country"
            value={formdata.country}
            onChange={handleChange}
            className="form-select"
            >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            </select>
            {showErrors && err.country && <p className="error">{err.country}</p>}

        </div>
        </>
    )
}