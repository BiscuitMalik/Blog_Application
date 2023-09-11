import ReactDOM from 'react-dom';

import classes from './notification.module.css'

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'Success') {
    statusClasses = classes.success;
  }

  if (status === 'Error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
