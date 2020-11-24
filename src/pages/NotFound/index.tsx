import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styled';

const NotFound: React.FC = () => {
  return (
    <Container>
      <div>
        <Link to="/">Go Back for Application</Link>
        <h1>Not Found</h1>
      </div>

      <p>Sorry, no result found!</p>
    </Container>
  );
};

export default NotFound;
