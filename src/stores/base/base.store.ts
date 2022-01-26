import {action, makeObservable, observable, reaction} from 'mobx';
import {deepClone} from '~/utils';

export abstract class BaseStore<State> {
  protected initialState: State;

  @observable
  public state: State;

  constructor(state: State) {
    this.initialState = deepClone(state);
    this.state = state;

    makeObservable(this);

    // if (NODE_ENV !== 'production') {
    reaction(
      () => this.state,
      (value, prev) => {
        this.log(value, prev);
      },
    );
    // }
  }

  @action
  public resetState(): void {
    this.setStateObject(deepClone(this.initialState));
  }

  @action
  public setStateObject(state: State): void {
    Object.keys(this.state).forEach(key => {
      const value = state[key as keyof State];
      if (value === undefined) {
        return;
      }
      this.state[key as keyof State] = value;
    });
  }

  @action
  public setState(callback: (state: State) => void) {
    callback(this.state);
  }

  private log(value: State, prev: State): void {
    console.log(
      'Previous state:\n',
      JSON.parse(JSON.stringify(prev)),
      '\nCurrent state:',
      JSON.parse(JSON.stringify(value)),
    );
  }
}
