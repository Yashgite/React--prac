# Multi-Step Form with Validation (React)

A responsive multi-step form built using React that collects user information across multiple steps with proper validation, error handling, and a final review before submission.

# Features :
- Multi-step form navigation (Personal Info → Address → Review)
- Step indicator to show progress
- Inline validation with error messages
- Controlled form inputs using React state
- Prevents invalid navigation between steps
- Review page before final submission
- Form reset after successful submission

# Tech Stack :
- React
- Javascript
- Css
- React Hooks

# How It Works :

  1. Step Navigation
    - Users move through steps using Next, Prev, and Review buttons
    - Navigation is blocked if validation fails
  
  2. Validation
    - Required fields are validated before moving to the next step
    - Regex validation for:
       - Email
       - City name
    - Date of birth cannot be in the future
    - Inline error messages shown only when needed
  
  3. Review Step
    - Displays all entered details
    - User can go back and edit information
  
  4. Form Submission
    On submit:
    - Shows success alert
    - Resets form data
    - Clears errors
    - Returns to Step 1

# State & Navigation Logic :
This project uses React state management to control form data, validation, and step-based navigation in a clean and predictable way.

# State Management Overview :
The parent component (ParentForm) manages all shared state to ensure consistency across steps.

1. Step State
 
  const [step, setStep] = useState(1);
  
  Controls which form step is currently visible
  Values:
  1 → Personal Information
  2 → Address Information
  3 → Review & Submit
  
  Prevents users from jumping steps without validation

2. Form Data State
 
  const [formdata, setFormdata] = useState(initialFormData);
  
  - Holds all input values from every step
  - Shared across child components
  - Ensures data persistence while navigating between steps
  - Uses controlled inputs for predictable updates

3. Error State
 
  const [err, setErr] = useState(initialErr);
  
  - Stores field-specific validation messages
  - Updated only during validation checks
  - Cleared when form is successfully submitted

4. Validation Visibility State
 
  const [showErrors, setShowErrors] = useState(false);
  
  - Controls when error messages are displayed
  - Errors are shown only after user attempts navigation
  - Improves user experience by avoiding premature error messages

# Navigation Logic :
  - Next / Review Button Logic
      function handleNext() {
        setShowErrors(true);
      
        if (validateBeforeNext()) {
          setShowErrors(false);
          setStep(step + 1);
        }
      }
  
  Flow:
  - Enables inline validation
  - Runs step-specific validation
  - Moves to the next step only if data is valid
  - Prevents invalid navigation

# Previous Button Logic :
  onClick={() => setStep(step - 1)}

  - Allows backward navigation
  - Does not reset form data
  - Users can edit previous inputs

# Validation Logic :
  - Validation is step-aware
  - Personal details validated in Step 1
  - Address details validated in Step 2
  - Review step contains no validation
  - Errors are mapped to individual fields for clarity

# Submit Logic :
    
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Form is submitted");
      setFormdata(initialFormData);
      setErr(initialErr);
      setShowErrors(false);
      setStep(1);
    };

On successful submission:
  - Form data is reset
  - Errors are cleared
  - Navigation returns to the first step
  - Ensures a fresh form state

# Getting Started

Follow these steps to download the project files and run the application on your local machine.

Option 1: Download ZIP (Without Git)

  - Click the Code button on the GitHub repository
  - Select Download ZIP
  - Extract the ZIP file to your local system
  - Open the extracted folder in VS Code

Option 2: Clone the Repository (Using Git)

  git clone https://github.com/Yashgite/React--prac.git
  
  Navigate into the project folder:
  cd React--prac.git

Install Dependencies
  - Make sure Node.js is installed on your system.
    npm install

This command installs all required packages from package.json.

  Run on Localhost
  - Start the development server using:
    npm start
  or (if using Vite):
    npm run dev
  
  Open in Browser
  - Once the server starts, open your browser and visit:
    http://localhost:3000
  or (Vite default):
    http://localhost:5173 
