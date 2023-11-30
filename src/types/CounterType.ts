export type CounterType = {
  changeCounter: ChangeCounterType;
  counterСonfiguration: CounterСonfigurationType;
  inputNumberValue: string;
};

export type ChangeCounterType = {
  maxCounterNumber: number;
  minCounterNumber: number;
};

export type CounterСonfigurationType = {
  maxCounterValue: number;
  minCounterValue: number;
};
