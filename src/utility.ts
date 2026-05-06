//utility type

type product1 = {
    id: number;
    price: string;
    stock: Number;
    color?: string
};

type productWithPick = Pick<product1, "id" | "price">

type productWithOmit=Omit<product1,"stock">;

const product1 = {
    id: 1,
    price: "1",
    stock: 40,
    color: "red"
};

type productWithPartial=Partial<product1>

type productWithRequired=Required<product1>

type productWithReadOnly=Readonly<product1>
