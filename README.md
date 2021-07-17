# FULL STACK HANDWRITTEN DIGIT CLASSIFIER

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#links">Links</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/bennaaym/handwritten-digit-classifier-full-stack.git)

This project is a full-stack handwritten digit classifier that uses [CNN](https://www.tensorflow.org/tutorials/images/cnn) 
### Built With

* [Python](https://www.python.org/)
* [Flask](https://flask.palletsprojects.com/en/2.0.x/)
* [TensorFlow](https://www.tensorflow.org/)
    * Minst dataset
* [React.js](https://reactjs.org)
* [Tailwindcss](https://tailwindcss.com/)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
* [Python](https://www.python.org/)
* [PIP](https://pypi.org/project/pip/)
* [Node.js](https://nodejs.org)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/bennaaym/handwritten-digit-classifier-full-stack.git
   ```
2. Install python packages  (server directory)
   ```sh
   pip install -r requirements.txt
   ```
3. Install NPM packages (ui directory)
   ```sh
   npm install
   ```
   
3. inside the ui directory create a `.env.local` file  and past the line below
   ```sh
   REACT_APP_API=http://127.0.0.1:5000/api/input
   
   ```


<!-- LICENSE -->
## License
[![MIT License][license-shield]][license-url]<br>
Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Links

* Project repo: [https://github.com/bennaaym/handwritten-digit-classifier-full-stack.git](https://github.com/bennaaym/handwritten-digit-classifier-full-stack.git)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[product-screenshot]: https://i.ibb.co/8NFS6Yt/screely-1626521338350.png