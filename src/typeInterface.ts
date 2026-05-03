//type interface
// eita sudhu object er jonno use korbo
//Tumi jodi eki name-e duita interface likho, TypeScript taderke automatic jora (merge) lagiye dibe. Kintu type-e eki name duibar likhle error dibe.
interface Window {
  title: string;
}
interface Window {
  width: number;
}
// Automatically merged: Window ekhon { title: string, width: number }

//exdends
interface animal{
    name:string;
}

interface dogs extends animal{
    bark:boolean;
}
