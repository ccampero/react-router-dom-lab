// src/App.jsx
import NavBar from './components/NavBar'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';


const App = () => {
  const [mailboxes, setMailboxes] = useState([])
  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
  <>
  <NavBar/>
  <h1>Mailbox List</h1>;
  <Routes>
        <Route path="/" element={<h2>Post Office</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />
        <Route path="/mailboxes/:mailboxId"element={<MailboxDetails mailboxes={mailboxes} />}/> 
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
  </Routes>
  </>
  );
};

export default App;
