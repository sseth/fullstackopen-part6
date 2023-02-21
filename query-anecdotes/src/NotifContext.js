import { useReducer, createContext, useContext } from 'react';

const truncateText = (text) =>
  text.length > 40 ? text.substring(0, 41).concat('...') : text;

const notifReducer = (state, action) => {
  switch (action.type) {
    case 'new':
      clearTimeout(state.timer);
      return {
        timer: action.timer,
        text: `New anecdote added: '${truncateText(action.text)}'`,
      };
    case 'vote':
      clearTimeout(state.timer);
      return {
        timer: action.timer,
        text: `Voted for '${truncateText(action.text)}'`,
      };
    case 'clear':
      return { text: '', timer: null };
    case 'error':
      clearTimeout(state.timer);
      return { text: action.text, timer: action.timer };
    default:
      return state;
  }
};

const NotifContext = createContext();

export const NotifContextProvider = (props) => {
  const [notif, dispatchNotif] = useReducer(notifReducer, {
    text: '',
    timer: null,
  });

  return (
    <NotifContext.Provider value={[notif, dispatchNotif]}>
      {props.children}
    </NotifContext.Provider>
  );
};

export const useNotifValue = () => useContext(NotifContext)[0].text;
export const useNotifDispatch = () => {
  const dispatch = useContext(NotifContext)[1];
  return ({ type, text }) => {
    const timer = setTimeout(() => dispatch({ type: 'clear' }), 5000);
    dispatch({
      type,
      text,
      timer,
    });
  };
};
