// object of fields object
const fields = {
    email: {
        controlType: 'email',
        required: true,
        email: true,
        label: 'Email Id',
        placeholder: 'Enter your email ID'
    },
    password: {
        controlType: 'password',
        required: true,
        label: 'Password',
        minLength: 8,
        placeholder: 'Enter your password'
    },
    firstname: {
        controlType: 'text',
        required: true,
        label: 'First Name',
        placeholder: 'Enter your first name'
    },
    lastName: {
        controlType: 'text',
        required: true,
        label: 'Last Name',
        placeholder: 'Enter your last name'
    },
    mobile: {
        controlType: 'text',
        required: true,
        label: 'Mobile Number',
        placeholder: 'Enter your mobile number'
    },
    dob: {
        controlType: 'text',
        required: true,
        label: 'Date of Birth',
        placeholder: 'Enter your birth date'
    },
    city: {
        controlType: 'text',
        required: true,
        label: 'Native Place',
        placeholder: 'Enter your city name'
    },
    address: {
        controlType: 'textarea',
        required: true,
        label: 'Current Address',
    },
}

// array of form object
const formObj = {
    signInForm: [
        'email',
        'password'
    ],
    fillupForm: [
        'firstname',
        'lastName',
        'email',
        'mobile',
        'dob',
        'city',
        'address'
    ]
}

export { formObj, fields }