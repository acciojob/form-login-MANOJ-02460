function getFormvalue() {
    //Write your code here
	const firstName = document.querySelector('[name="fname"]').value;
	const lastName = document.querySelector('[name="lname"]').value;

	alert(`First Name: ${firstName}, Last Name: ${lastName}`)

}
