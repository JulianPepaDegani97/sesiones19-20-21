import React from 'react';
import { useLocation, useHistory, useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const location = useLocation();
    const history = useNavigate();
    const navigate = (path) => {
        history.push(path);
    }
    const goBack = () => {
        history.goBack();
    }
  return (
    <div>
        <h1>About | FAQs page</h1>
        <div>
            <button onClick={goBack}>prev page</button>
        </div>
    </div>
  )
}

export default AboutPage