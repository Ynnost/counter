import { EmptyObject, combineReducers, createStore } from "redux";
import { counterReducer } from "./reducer/counterReduser";
import { CounterType } from "../types";

export const initState: CounterType = {
  changeCounter: { maxCounterNumber: 5, minCounterNumber: 0 },
  counterСonfiguration: { maxCounterValue: 5, minCounterValue: 0 },
  inputNumberValue: "",
};

export type InitStateType = typeof initState;

const rootReducer = combineReducers({
  counter: counterReducer,
});

// конвертируем объект в строку и сохраняем в localStorage
function saveToLocalStorage(state: EmptyObject & { counter: CounterType }) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// загружаем строку из localStarage и преобразуем в объект
// недопустимый вывод должен быть неопределенным
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// создаем наше хранилище из наших rootReducers и используем loadFromLocalStorage
// чтобы перезаписать любые значения, которые мы уже сохранили
export const store = createStore(rootReducer, loadFromLocalStorage());

// прослушиваем изменения хранилища и используем saveToLocalStorage для
// сохраняем их в localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export type AppRootStateType = ReturnType<typeof rootReducer>;

//@ts-ignore
window.store = store;
