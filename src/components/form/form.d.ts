import { SupportedValues } from "hooks";

export interface BaseField<V extends SupportedValues = any> {
  onChange: (nextVal: V) => void;
  value?: V;
  options?: Frontier.ElementMeta['options']
}
