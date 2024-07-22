import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
  boxsize: 'small',
  boxholder: '',
};

const MailboxForm = (props) => {
    const navigate = useNavigate();

 const [formData,setFormData] = useState(initialState);

const handleSubmit = (e) => {
    e.preventDefault();
    props.addMailbox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };
  
  

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxsize">Box Size:</label>
        <select
          id="boxsize"
          name="boxsize"
          value={formData.boxsize}
          onChange={handleChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <label htmlFor="boxholder">Box Holder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
