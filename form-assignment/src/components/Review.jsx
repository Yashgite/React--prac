export default function Review({ formdata }) {
  return (
    <>
      <div className="review-card">
        <h3 className="review-title">Review Details</h3>

        <table className="review-table">
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{formdata.firstName}</td>
            </tr>
             <tr>
              <th>Last Name</th>
              <td>{formdata.lastName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{formdata.email}</td>
            </tr>
            <tr>
              <th>Contact</th>
              <td>{formdata.contact}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{formdata.dob}</td>
            </tr>
             <tr>
              <th>Blood Group</th>
              <td>{formdata.bloodGroup}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{formdata.gender}</td>
            </tr>
            <tr>
              <th>Address Line 1</th>
              <td>{formdata.addressLine1}</td>
            </tr>
            <tr>
              <th>Address Line 2</th>
              <td>{formdata.addressLine2}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{formdata.city}</td>
            </tr>
            <tr>
              <th>Postal Code</th>
              <td>{formdata.postalCode}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{formdata.state}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{formdata.country}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
