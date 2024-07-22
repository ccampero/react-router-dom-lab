import { Link } from 'react-router-dom';


const MailboxList = (props) => {
    return (
      <>
        <h2>Mailbox</h2>
        <ul>
          {props.mailboxes.map((currentMailbox) => (
            <li key={currentMailbox.id}>
            <Link to={`/mailboxes/${currentMailbox._id}`}>
            {currentMailbox.boxholder} - {currentMailbox.boxsize}
             </Link>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default MailboxList;
  