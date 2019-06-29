import React from 'react';
import Mailchimp from 'react-mailchimp-form';
import '../styles/components/App.styl';

const App = () => (
  <div className="App">
    <h1>React Mailchimp Form</h1>
    <a href="https://github.com/gndx/react-mailchimp-form/">
      react-mailchimp-form
    </a>
    <div className="App-example">
      <Mailchimp
        action="https://dev.us3.list-manage.com/subscribe/post?u=40846eb69e4cacb85c6df96f0&amp;id=1b826ba62f"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true,
          },
          {
            name: 'FNAME',
            placeholder: 'name',
            type: 'text',
            required: true,
          },
        ]}
        messages={{
          sending: 'Sending...',
          success: 'Thank you for subscribing!',
          error: 'An unexpected internal error has occurred.',
          empty: 'You must write an e-mail.',
          duplicate: 'Too many subscribe attempts for this email address',
          button: 'Subscribe!',
        }}
      />
    </div>
  </div>
);

export default App;
