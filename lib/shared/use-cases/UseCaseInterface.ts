export interface UseCaseInput {
  [key: string]: any;
}

export interface UseCaseOutput {
  [key: string]: any;
}

export interface UseCase {
  execute(input: UseCaseInput): UseCaseOutput;
}
