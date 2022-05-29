import { IComparable } from "./IComparable";
import { IPrintable } from "./IPrintable";

export interface IModel<T> extends IPrintable, IComparable<T> {}
