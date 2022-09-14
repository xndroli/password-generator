<a name="readme-top"></a>

<h3 align="center">JS: Password Generator </h3>

<div align="center">

[![HTML](https://img.shields.io/badge/html-red.svg)]()
[![CSS](https://img.shields.io/badge/css-green.svg)]()
[![Javascript](https://img.shields.io/badge/expressjs-orange.svg)](https://www.javascript.com/)

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Repo Size](https://img.shields.io/github/repo-size/xndroli/password-generator.svg)](https://github.com/xndroli/password-generator/issues)
[![GitHub Issues](https://img.shields.io/github/issues/xndroli/password-generator.svg)](https://github.com/xndroli/password-generator/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/xndroli/password-generator.svg)](https://github.com/xndroli/password-generator/pulls)

</div>

---

## 🔗 Description <a name = "description"></a>

This week I will create an application that an employee can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

[Link to Deployed Application](https://xndroli.github.io/password-generator/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 Table of Contents

- [Description](#description)
- [User Story](#user_story)
- [Acceptance Criteria](#acceptance_criteria)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technology](#built_with)
- [Authors](#authors)
- [Contributing](../CONTRIBUTING.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💡 User Story <a name = "user_story"></a>

```md
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⛓️ Acceptance Criteria <a name = "acceptance_criteria"></a>

```md
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🎞️ Demo <a name = "demo"></a>

The following image shows the web application's appearance and functionality:

[![JS: Password Generator](./assets/images/passwordGenerator-demo.png)](https://github.com/xndroli/password-generator/)

[Link to Deployed Application](https://xndroli.github.io/password-generator/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🏁 Getting Started <a name = "getting_started"></a>

Clone the repo by running:

`git clone https://github.com/xndroli/password-generator.git`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 💾 Installation <a name = "installation"></a>

Input basic project information in include in your package by running:

`npm init`

Install the package, and any packages that it depends on by running:

`npm install`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Usage <a name="usage"></a>

Run the following command at the root of your project:

`npm start`

If you have nodemon:

`npm run watch`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⛏️ Built With <a name = "built_with"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express.js](https://expressjs.com/) - Server Framework
- [Mongoose.js](https://mongoosejs.com/) - Object Data Modeling
- [Node.js](https://nodejs.org/en/) - Server Environment

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ✍️ Authors <a name = "authors"></a>

- [@xndroli](https://github.com/xndroli)

See also the list of [contributors](https://github.com/xndroli/password-generator/contributors) who participated in this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

© 2022 xndroli. All Rights Reserved.
