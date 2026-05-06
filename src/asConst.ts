//as const assertion

const userRole = {
    Admin: "ADMIN",
    Editor: "EDITOR"
}

const canEdit = (role: (typeof userRole)[keyof typeof userRole]) => {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true;
    }
    else {
        return false;
    }
};
const isEditPermision = canEdit(userRole.Admin);

type valueOf<T> = T[keyof T];

const canEdit2 = (role: valueOf<typeof userRole>) => {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true
    } else {
        return false;
    }
}
console.log(canEdit2("Admin"));

const status = {
    Success: "SUCCESS",
    Error: "ERROR"
}

function isValidValue<T extends object>(obj: T, value: T[keyof T]) {
    return Object.values(obj).includes(value as any);
}

isValidValue(status, "SUCCESS")