function setValue(selector, value, text = null) {
    let elements = document.querySelectorAll(selector);
    let elem = null;
    for (const e of elements)
        if (text === null || e.innerText != null && e.innerText.trim() === text.trim()) {
            elem = e;
            break;
        }
    if (elem != null) {
        if (elem instanceof HTMLInputElement) {
            elem.value = value;
            return;
        }
        while (elem.parentElement != null) {
            elem = elem.parentElement;
            let input = elem.querySelector("input[type='text'], input:not([type])");
            if (input != null && input instanceof HTMLInputElement) {
                input.value = value;
                return;
            }
        }
    }
}

function fillForm() {
    const firstName = "";
    const lastName = "";
    const fullName = "";
    const email = "";
    const phone = "";
    const city = "";
    const linkedin = "";
    const personalSite = "";
    const github = "";
    const githubProfile = "";
    const legalCountry = "";
    const currentCity = "";
    const currentTitle = "";
    const currentEmployer = "";
    const skills = "";
    const pronouns = "";
    
    setValue("input#last_name, input[aria-label='Last Name']", lastName);
    setValue("input[name='name'], input[name='full_name'], input[name='fullName'], input[aria-label='Full Name']", fullName);
    setValue("div", fullName, "Full name");
    setValue("input#phone", phone);
    setValue("input#email", email);
    setValue("label", city, "Location (City)");
    setValue("label, div", linkedin, "LinkedIn Profile");
    setValue("input[name='linkedinUrl']", linkedin);
    setValue("label", personalSite, "Website");
    setValue("input[name='blogUrl']", personalSite);
    setValue("label, div", github, "GitHub");
    setValue("label, div", github, "Portfolio");
    setValue("input[name='githubUrl']", github);
    setValue("label", githubProfile, "GitHub handle");
    setValue("label", legalCountry, "In which of the following countries are you legally authorized to work in?");
    setValue("label", "Yes", "Will you now or in the future require visa sponsorship for employment?");
    setValue("label", currentCity, "current location");
    setValue("label", currentCity, "located");
    setValue("label", "Yes", "Have you ever worked remotely before?");
    setValue("label", "Loneliness - use Slack, get a hobby, have a walk, meet friends IRL. Control - status meetings, PRs and Jira board will" +
        " compensate" +
        " for" +
        " that.", "What do you think are some of the challenges of" +
        " working" +
        " remotely, and how would you address them?");
    setValue("label", "On your website", "How did you hear about this job?");
    setValue("label", "Yes", "Please acknowledge that you've read the GitHub Candidate Privacy Policy.");
    setValue("label", currentEmployer, "current employer");
    setValue("h3", currentTitle, "title");
    setValue("label", "Male", "Gender (Select one)");
    setValue("label", "Yes", "GitHub has my consent to collect, store, and process my data for the purpose of considering me for employment, and" +
        " for up to 365 days thereafter.");
    setValue("div", skills, "Skills");
    setValue("div", pronouns, "pronouns");
    // Let it be the last
    setValue("h3", firstName, "first name");
    setValue("input#first_name, input[aria-label='First Name']", firstName);
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    fillForm();
});