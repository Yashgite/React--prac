import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import StepIndicator from "./StepIndicator";
import Review from "./Review";

export default function ParentForm() {
  const [showErrors, setShowErrors] = useState(false);
  const [step, setStep] = useState(1);

  const [err, setErr] = useState({
    firstName: "",
    lastName:"",
    email: "",
    contact: "",
    dob: "",
    gender: "",
    addressLine1: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
  });

  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName:"",
    email: "",
    contact: "",
    dob: "",
    bloodGroup: "",
    gender: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
  });


  
  function validateBeforeNext() {
    let isValid = true;

    const newErr = {
      firstName: "",
      lastName:"",
      email: "",
      contact: "",
      dob: "",
      gender: "",
      addressLine1: "",
      city: "",
      postalCode: "",
      state: "",
      country: "",
    };

  //  PERSONAL INFO VALIDATION 
    if (formdata.firstName === "") {
      newErr.firstName = "First Name is required";
      isValid = false;
    }

    if (formdata.lastName === "") {
      newErr.lastName = "Last Name is required";
      isValid = false;
    }

    if (formdata.email === "") {
    newErr.email = "Email is required";
    isValid = false;
    } else {
    const gmailRegex = /^[a-z][a-z0-9._%+-]+@gmail\.com$/;

    if (!gmailRegex.test(formdata.email)) {
        newErr.email =
        "Please enter valid Email address (example@gmail.com)";
        isValid = false;
    }
    }


    if (formdata.contact === "") {
      newErr.contact = "Contact is required";
      isValid = false;
    } else if (formdata.contact.length < 10 || formdata.contact.length > 10) {
      newErr.contact = "Contact is Invaild";
      isValid = false;
    }

    if (formdata.dob === "") {
      newErr.dob = "Date of birth is required";
      isValid = false;
    }else{
        const Today = new Date();
        const dobdate = new Date(formdata.dob);
        if(Today<dobdate){
            newErr.dob = "Date of birth cannot be in future"
            isValid = false
        }
    }
    
    // if (formdata.bloodGroup === "") {
    // newErr.bloodGroup = "Blood group is required";
    // isValid = false;
    // }


    if (formdata.gender === "") {
      newErr.gender = "Gender is required";
      isValid = false;
    }

    // Address step validation
    if (step === 2) {
      if (formdata.addressLine1 === "") {
        newErr.addressLine1 = "Address is required";
        isValid = false;
      }

      if (formdata.city === "") {
        newErr.city = "City is required";
        isValid = false;
        } else {
        const cityRegex = /^[a-zA-Z\s]+$/;

        if (!cityRegex.test(formdata.city)) {
            newErr.city = "City name is invalid";
            isValid = false;
        }
        }

      

      if (formdata.postalCode === "" ) {
        newErr.postalCode = "Postal code is required";
        isValid = false;
      }
      else if(formdata.postalCode.length !== 6){
        newErr.postalCode = "Postal code is Invalid";
        isValid = false;
      }

      if (formdata.state === "") {
        newErr.state = "State is required";
        isValid = false;
      }

      if (formdata.country === "") {
        newErr.country = "Country is required";
        isValid = false;
      }
    }

    setErr(newErr);
    return isValid;
  }

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    dob: "",
    bloodGroup: "",
    gender: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
  };

  const initialErr = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    dob: "",
    gender: "",
    addressLine1: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form is submitted");
    setFormdata(initialFormData);
    setErr(initialErr);
    setShowErrors(false);
    setStep(1);
  };

  function handleNext() {
    setShowErrors(true); // turn ON inline validation

    if (validateBeforeNext()) {
      setShowErrors(false); // reset for next step
      setStep(step + 1);
    }
  }

  return (
    <>
      <div className="form-container">
        <StepIndicator step={step} />

        <form onSubmit={handleSubmit} className="main-form">
          {step === 1 && (
            <PersonalInfo
              showErrors={showErrors}
              err={err}
              formdata={formdata}
              setFormdata={setFormdata}
            />
          )}

          {step === 2 && (
            <AddressInfo
              showErrors={showErrors}
              err={err}
              formdata={formdata}
              setFormdata={setFormdata}
            />
          )}

          {step === 3 && <Review formdata={formdata} />}

          <div className="form-actions">
            {step < 2 && (
              <button
                type="button"
                className="btn primary"
                onClick={handleNext}
              >
                Next
              </button>
            )}

            {step > 1 && step < 3 && (
              <>
                <button
                  type="button"
                  className="btn secondary"
                  onClick={() => setStep(step - 1)}
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="btn primary"
                  onClick={handleNext}
                >
                  Review
                </button>
              </>
            )}

            {step === 3 && (
                <>
                   
                    <button
                    type="button"
                    className="btn secondary"
                    onClick={() => setStep(step - 1)}
                    >
                    Prev
                    </button>

                    <button type="submit" className="btn submit">
                    Submit
                    </button>
                </>

            )}
          </div>
        </form>
      </div>
    </>
  );
}
