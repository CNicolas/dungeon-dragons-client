export interface DicesRollResults {
  calculations: number[]
  input: DicesRollerInput
  rolled: number[]
  result: number
}

export interface DicesRollerInput {
  quantity: number
  sides: number
  transformations: any[]
}
