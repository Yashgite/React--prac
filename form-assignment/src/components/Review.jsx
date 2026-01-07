export default function Review({formdata}){
    return(
        <>
            <div>
                <div>
                    <strong>Name : </strong>{formdata.fullName}
                </div>
                <div>
                    <strong>Email : </strong>{formdata.email}
                </div>
                <div>
                    <strong>Contact : </strong>{formdata.contact}
                </div>
                <div>
                    <strong>Date of Birth : </strong>{formdata.dob}
                </div>
                <div>
                    <strong>Degree : </strong>{formdata.degree}
                </div>
                <div>
                    <strong>College Name : </strong>{formdata.collegeName}
                </div>
                <div>
                    <strong>Degree Percentage : </strong>{formdata.degreePercentage}
                </div>
                <div>
                    <strong>Gender : </strong>{formdata.gender}
                </div>
                <div>
                    <strong>AddressLine1 : </strong>{formdata.addressLine1}
                </div>
                <div>
                    <strong>AddressLine2 : </strong>{formdata.addressLine2}
                </div>
                <div>
                    <strong>City : </strong>{formdata.city}
                </div>
                <div>
                    <strong>Postal Code : </strong>{formdata.postalCode}
                </div>
                <div>
                    <strong>State : </strong>{formdata.state}
                </div>
                <div>
                    <strong>Country : </strong>{formdata.country}
                </div>

            </div>
        </>
    )
}