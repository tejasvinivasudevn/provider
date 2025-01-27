// pages/api/register.js


export default async function register() {

    const reqBody = {
        email: "kalaii@gmail.com",
        first_name: "kalai",
        phone: "2313232123",
        type: "patient",
        dob: "12/01/1997",
        password: "hello"
    };

    try {
        const response = await fetch('http://localhost:5001/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Handle non-2xx responses
        }

        const data = await response.json(); // Parse the JSON response
        console.log('Registration successful:', data); // Handle success
    } catch (error: any) {
        console.error('Registration failed:', error.message); // Handle errors
    }


}

export async function fetchAllPatients() {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthbGFpaUBnbWFpbC5jb20iLCJpZCI6NSwibmFtZSI6ImthbGFpIiwidHlwZSI6InBhdGllbnQiLCJpYXQiOjE3Mzc5ODI4NTAsImV4cCI6MTczNzk4NjQ1MH0.ADQ9qMreoVaxyv3oMTASzFXCltdHrgt8Q3Cmok-5XPE';

    try {
        const response = await fetch('http://192.168.130.209:5001/api/v1/patients/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error: any) {
        console.error('Fetching patients failed:', error.message);
    }

}