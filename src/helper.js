//Render error message
export function getValidatedLocation(inputElement) {
	if (inputElement.validity.valueMissing) {
		inputElement.setCustomValidity("Enter location");
		inputElement.reportValidity();
		return null;
	} else {
		inputElement.setCustomValidity("");
		return inputElement.value.trim();
	}
}
export function showError(message, errorContainer, weatherContent){
    if(weatherContent){
        clearElement(weatherContent);
    }
    errorContainer.textContent = message;
    errorContainer.style.display = "block";
}

export function clearError(errorContainer) {
	errorContainer.textContent = "";
	errorContainer.style.display = "none";
}

// General function to remove element from DOM
export function clearElement(element) {
	if (element) {
		element.replaceChildren();
	} else {
		console.warn("Element is undefined:", element);
	}
}

// Temperature Conversions
export function convertTemperature(temp, toUnit) {
	return toUnit === "F" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9;
}

export function getTemperature(value, unit) {
	if (typeof value !== "number") {
		throw new Error("Invalid temperature value");
	}
	return unit === "C" ? value : convertTemperature(value, "F");
}

//Error handling
export function handleUserError(message, errorContainer, weatherContent){
    console.warn(message);
    showError(message, errorContainer, weatherContent);
}

export function handleDeveloperError(error, errorContainer){
    console.error("Error:", error);
    showError("An error occurred. Please try again later.", errorContainer);
}