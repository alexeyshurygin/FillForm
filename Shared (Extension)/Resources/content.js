function setValueBySelector(value, selector) {
    let elem = document.querySelector(selector);
    if (elem != null) {
        if (elem instanceof HTMLInputElement) {
            elem.value = value;
        }
    }
}

function setValueByText(value, text) {
    const inputSelector = "input[type='text'], input:not([type])";
    document.querySelectorAll(inputSelector).forEach(input => {
        let e = input.closest("label, div, h3");
        while (e != null) {
            if (e.innerText.includes(text) && e.querySelectorAll(inputSelector).length === 1) {
                input.value = value;
                return;
            }
            e = e.parentElement;
        }
    });
}

function fillForm() {
    const firstName = "";
    const lastName = "";
    const fullName = "";
    const birthday = "";
    const prefix = "";
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
    const noticePeriod = "";
    const measureSuccess = "";
    const pplUnderManagement = "";
    const handsOnTime = "";
    const salary = "";

    setValueBySelector(lastName, "input#last_name, input[aria-label='Last Name'], input[autocomplete='family-name']");
    setValueByText(fullName, "Full name");
    setValueBySelector(fullName, "input[name='name'], input[name='full_name'], input[name='fullName'], input[aria-label='Full Name'], input[autocomplete='name']");
    setValueBySelector(birthday, "input[autocomplete='bday']");
    setValueBySelector(prefix, "input[autocomplete='honorific-prefix']");
    setValueBySelector(email, "input#email, input[autocomplete='email']");
    setValueBySelector(phone, "input#phone, input[autocomplete='tel'], input[autocomplete='tel-national']");
    setValueByText(city, "Location (City)");
    setValueByText(linkedin, "LinkedIn Profile");
    setValueBySelector(linkedin, "input[name='linkedinUrl']");
    setValueByText(personalSite, "Website");
    setValueBySelector(personalSite, "input[name='blogUrl']");
    setValueByText(github, "GitHub");
    setValueByText(github, "Portfolio");
    setValueBySelector(github, "input[name='githubUrl']");
    setValueByText(githubProfile, "GitHub handle");
    setValueByText(legalCountry, "In which of the following countries are you legally authorized to work in?");
    setValueByText("Yes", "Will you now or in the future require visa sponsorship for employment?");
    setValueByText(currentCity, "current location");
    setValueByText(currentCity, "located");
    setValueByText("Yes", "Have you ever worked remotely before?");
    setValueByText("Loneliness - use Slack, get a hobby, have a walk, meet friends IRL. Control - status meetings, PRs and Jira board will" +
        " compensate" +
        " for" +
        " that.", "What do you think are some of the challenges of" +
        " working" +
        " remotely, and how would you address them?");
    setValueByText("On your website", "How did you hear about this job?");
    setValueByText("Yes", "Please acknowledge that you've read the GitHub Candidate Privacy Policy.");
    setValueByText(currentEmployer, "current employer");
    setValueByText(currentTitle, "title");
    setValueByText("Male", "Gender (Select one)");
    setValueByText("Yes", "GitHub has my consent to collect, store, and process my data for the purpose of considering me for employment, and" +
        " for up to 365 days thereafter.");
    setValueByText(skills, "Skills");
    setValueByText(pronouns, "pronouns");
    setValueByText(noticePeriod, "notice period");
    setValueByText(measureSuccess, "measure its success");
    setValueByText(pplUnderManagement, "ow many people");
    setValueByText(handsOnTime, "hands-on");
    setValueByText(salary, "desired gross salary");

    // Let it be the last
    setValueByText(firstName, "first name");
    setValueBySelector(firstName, "input#first_name, input[aria-label='First Name'], input[autocomplete='given-name']");
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    fillForm();
});