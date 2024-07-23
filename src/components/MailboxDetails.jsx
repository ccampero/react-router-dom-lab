import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const mailbox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
);
console.log(mailbox);

  
return (
    <>
      <h2>Mailbox Details</h2>
      <dl>
        <dt>Box Size:</dt>
        <dd>{mailbox.boxsize}</dd>
        <dt>Box Number:</dt>
        <dd>{mailbox._id}</dd>
        <dt>Box Holder:</dt>
        <dd>{mailbox.boxholder}</dd>
      </dl>
    </>
  );
};

export default MailboxDetails;