import { useDispatch } from 'react-redux';
import { createChangeOrderStageAction } from '../store/order/actions';

function useStage(nextStage, modifiers) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    modifiers.forEach(modifier => {
      const changeOrderStageAction = createChangeOrderStageAction(nextStage);
      const action = modifier.action(...modifier.data);
      dispatch(action);
      dispatch(changeOrderStageAction);
    });
  };

  return {
    handleSubmit,
  };
}

export default useStage;