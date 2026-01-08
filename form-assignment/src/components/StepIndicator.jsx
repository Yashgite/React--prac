export default function StepIndicator({step}){
    return(
        <>
            <div className="step-indicator">
                <div className={step===1?"step active":"step"}>Personal Information</div>
                <div className={step===2?"step active":"step"}>Address Information</div>
                <div className={step===3?"step active":"step"}>Review</div>
            </div>
        </>
    )
}