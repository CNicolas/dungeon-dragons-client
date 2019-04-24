import { Action, Selector, State, StateContext } from '@ngxs/store'
import { SetToolbarTitle } from './core.actions'
import { CoreStateModel } from './core.state.model'

@State<CoreStateModel>({
  name: 'core',
  defaults: {
    toolbarTitle: 'Donjon et Dragons'
  }
})
export class CoreState {
  @Selector()
  static toolbarTitle(state: CoreStateModel): string {
    return state.toolbarTitle
  }

  @Action(SetToolbarTitle)
  setToolbarTitle(ctx: StateContext<CoreStateModel>, action: SetToolbarTitle): void {
    ctx.patchState({ toolbarTitle: action.title })
  }
}
