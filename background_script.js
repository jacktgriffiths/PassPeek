browser.browserAction.onClicked.addListener(() => {
    console.log("Extension clicked!");
    browser.tabs.executeScript({
        code: `
            console.log("Executing script...");
            const passwordFields = document.querySelectorAll('input[type="password"]');
            if (passwordFields.length === 0) {
                console.log("No password fields found.");
                alert("No password fields found on this page.");
            } else {
                passwordFields.forEach((field) => {
                    field.type = field.type === 'password' ? 'text' : 'password';
                    console.log("Toggled password field:", field);
                });
            }
        `
    }).catch((error) => {
        console.error("Failed to execute script: ", error);
    });
});
