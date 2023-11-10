export type InstitutionId = string;

export interface Context<T> {
  params: Record<string, T>;
}
