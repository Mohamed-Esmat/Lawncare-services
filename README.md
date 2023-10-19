# Lawncare-services Landing Page

Welcome to the Upskilling Landing Page project! This project is designed to create a modern and responsive landing page for Upskilling, a leading company in the world of professional development coaching and mentoring. The landing page includes several sections such as the header, about section, services section, testimonials, and contact information.

![Upskilling Landing Page](https://res.cloudinary.com/tawfeer/image/upload/v1697752507/Lawncare-services_pouwmv.png)

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Styling](#styling)
- [Sending a POST Request](#sending-a-post-request)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can check out a live demo of the Upskilling Landing Page [here]([https://your-demo-url.com](https://lawnservices-esmat.netlify.app)).

## Features

- Professional and modern design.
- Responsive layout suitable for various screen sizes.
- Organized code structure using React components.
- Integration with Axios for fetching testimonials and sending contact form data.
- Custom styling using CSS modules and the BEM naming convention.
- Clear and user-friendly navigation.

## Technologies Used

- React: A popular JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making HTTP requests.
- CSS Modules: Scoped CSS styling for better organization.
- React-Query (optional): A data-fetching library for React (can be used instead of `useEffect` for data fetching).

## Project Structure

- `src/`
  - `components/`: React components for different sections.
  - `assets/`: Images and static assets.
  - `App.js`: The main application component.
  - `index.js`: Entry point for the React application.
- `public/`: Static assets and HTML template.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Mohamed-Esmat/Lawncare-services.git
```

2. Change directory to the project folder:

```bash
cd Lawncare-services
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

## Usage

1. Start the development server:

```bash
npm run dev
# or
yarn run dev
```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the landing page.

## Styling

The project uses CSS Modules and follows the BEM (Block Element Modifier) naming convention for class names. You can customize the styling in the CSS module files within the `src/components` directory.

## Sending a POST Request

To send a POST request with the contact form data, modify the `ContactUs` component and use Axios to send the data to the server. Make sure to set up CORS on your server to allow requests from your development environment.

```javascript
import axios from 'axios';

const apiUrl = 'http://upskilling-egypt.com:3000/contact'; // Your API endpoint

const formData = {
  name: 'Mohamed Esmat',
  email: 'mohamed@example.com',
  phone: '01123256072',
};

const headers = {
  'Content-Type': 'application/json',
  // Add any other custom headers your server expects
};

axios.post(apiUrl, formData, { headers })
  .then((response) => {
    // Handle the response
    console.log('POST request response:', response.data);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error sending POST request:', error);
  });
```

## Contributing

Contributions to this project are welcome! If you have any suggestions, bug reports, or feature requests, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using the Upskilling Landing Page project! I hope this README provides all the information you need to get started with the project. If you have any questions or need further assistance, please don't hesitate to reach out.
