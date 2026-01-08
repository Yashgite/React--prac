export default function PersonalInfo({
  formdata,
  setFormdata,
  err,
  showErrors,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="form-section">
        <h3>Personal Information</h3>

        <label>First Name <span className="required">*</span> </label>
        <input
          placeholder="Enter First Name"
          name="firstName"
          required
          type="text"
          value={formdata.firstName}
          onChange={handleChange}
        />
        {showErrors && err.firstName && (
          <p className="error">{err.firstName}</p>
        )}

        <label>Last Name <span className="required">*</span> </label>
        <input
          placeholder="Enter Last Name"
          name="lastName"
          required
          type="text"
          value={formdata.lastName}
          onChange={handleChange}
        />
        {showErrors && err.lastName &&( <p className="error">{err.lastName}</p>)}

        <label>Email <span className="required">*</span> </label>
        <input
          placeholder="Enter Email"
          required
          name="email"
          type="email"
          value={formdata.email}
          onChange={handleChange}
        />
        {showErrors && err.email && <p className="error">{err.email}</p>}

        <label>Contact <span className="required">*</span> </label>
        <input
          placeholder="Enter Contact Number"
          inputMode="numeric"
          name="contact"
          type="tel"
          value={formdata.contact}
          onChange={handleChange}
        />
        {showErrors && err.contact && <p className="error">{err.contact}</p>}

        <label>Date of Birth <span className="required">*</span> </label>
        <input
          placeholder="Enter Date of Birth"
          required
          name="dob"
          type="date"
          value={formdata.dob}
          onChange={handleChange}
        />
        {showErrors && err.dob && <p className="error">{err.dob}</p>}

        <label className="form-label">Blood Group</label>
        <select
          name="bloodGroup"
          value={formdata.bloodGroup || ""}
          onChange={handleChange}
          required
          className="form-select"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        {/* {showErrors && err.bloodGroup && (
          <p className="error">{err.bloodGroup}</p>
        )} */}

        <label>Gender <span className="required">*</span> </label>
        {showErrors && err.gender && <p className="error">{err.gender}</p>}
        <div className="gender-group">
          <input
            required
            id="male"
            name="gender"
            type="radio"
            value="male"
            checked={formdata.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>

          <input
            id="female"
            name="gender"
            type="radio"
            value="female"
            checked={formdata.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>

          <input
            required
            id="other"
            name="gender"
            type="radio"
            value="other"
            checked={formdata.gender === "other"}
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>

        </div>
      </div>
    </>
  );
}
