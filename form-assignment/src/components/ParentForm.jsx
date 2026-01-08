import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import StepIndicator from "./StepIndicator";
import Review from "./Review";

export default function ParentForm() {
  const [showErrors, setShowErrors] = useState(false);
  const [step, setStep] = useState(1);

  const [err, setErr] = useState({
    fullName: "",
    email: "",
    contact: "",
    dob: "",
    degree: "",
    collegeName: "",
    degreePercentage: "",
    gender: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
  });

  const [formdata, setFormdata] = useState({
    fullName: "",
    email: "",
    contact: "",
    dob: "",
    degree: "",
    collegeName: "",
    degreePercentage: "",
    gender: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventdefault();
    alert("Form is submitted");
  };

  function validateBeforeNext() {
    let isValid = true;

    const newErr = {
      fullName: "",
      email: "",
      contact: "",
      dob: "",
      degree: "",
      collegeName: "",
      degreePercentage: "",
      gender: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      postalCode: "",
      state: "",
      country: "",
    };

    // ---- PERSONAL INFO VALIDATION ----
    if (formdata.fullName === "") {
      newErr.fullName = "Name is required";
      isValid = false;
    }

    if (formdata.email === "") {
      newErr.email = "Email is required";
      isValid = false;
    } else if (!formdata.email.includes("@")) {
      newErr.email = "Email is not valid";
      isValid = false;
    }

    if (formdata.contact === "") {
      newErr.contact = "Contact is required";
      isValid = false;
    } else if (formdata.contact.length < 10 || formdata.contact.length > 11) {
      newErr.contact = "Contact is not valid";
      isValid = false;
    }

    if (formdata.dob === "") {
      newErr.dob = "Date of birth is required";
      isValid = false;
    }

    if (formdata.degree === "") {
      newErr.degree = "Degree is required";
      isValid = false;
    }

    if (formdata.collegeName === "") {
      newErr.collegeName = "College name is required";
      isValid = false;
    }

    if (formdata.degreePercentage === "") {
      newErr.degreePercentage = "Percentage is required";
      isValid = false;
    }

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
      }

      if (formdata.postalCode === "") {
        newErr.postalCode = "Postal code is required";
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
              <button type="submit" className="btn submit">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
