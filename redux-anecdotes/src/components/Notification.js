import { useSelector } from 'react-redux';

const Notification = () => {
  const notif = useSelector((state) => state.notification.text);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return notif && <div style={style}>{notif}</div>;
};

export default Notification;
