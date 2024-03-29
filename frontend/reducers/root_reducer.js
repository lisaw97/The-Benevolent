import { combineReducers } from 'redux';
import EntitiesReducer from './entities/entities_reducer';
import SessionReducer from './session/session_reducer';
import ErrorsReducer from './errors/errors_reducer';
import UIReducer from './ui/ui_reducer';

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer,
    ui: UIReducer
});

export default RootReducer;